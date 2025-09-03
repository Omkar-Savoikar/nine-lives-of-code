import { useEffect, useRef, useState } from "react";

interface TimerProps {
	isGameOver: boolean;
}

export default function Timer({ isGameOver }: TimerProps) {
	const [time, setTime] = useState<number>(0);
	const startRef = useRef<number | null>(null);
	const requestRef = useRef<number | null>(null);

	const formatTime = (ms: number): string => {
		const minutes = Math.floor(ms / 60000);
		const seconds = Math.floor((ms % 60000) / 1000);
		const milliseconds = ms % 1000;
		return `${minutes}.${seconds}.${milliseconds}`;
	};

	useEffect(() => {
		if (!isGameOver) {
			startRef.current = Date.now();
			const update = () => {
				if (startRef.current !== null) {
					setTime(Date.now() - startRef.current);
				}
				requestRef.current = requestAnimationFrame(update);
			};
			requestRef.current = requestAnimationFrame(update);
		} else {
			if (requestRef.current !== null) {
				cancelAnimationFrame(requestRef.current);
				requestRef.current = null;
			}
		}

		return () => {
			if (requestRef.current !== null) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	}, [isGameOver]);

	return <div className="w-full h-fit flex justify-center mt-5">{formatTime(time)}</div>;
}
