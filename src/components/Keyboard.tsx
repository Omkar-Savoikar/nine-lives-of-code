import { useEffect, useRef } from "react";
import Key from "./Key";

interface KeyboardProps {
	currentWord: string;
	guessedLetters: string[];
	isGameOver: boolean;
	handleKeyClick: (letter: string) => void;
	displayHint: () => void;
}

export default function Keyboard({
	currentWord,
	guessedLetters,
	isGameOver,
	handleKeyClick,
	displayHint,
}: KeyboardProps) {
	const letters = "qwertyuiopasdfghjklzxcvbnm";
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (!containerRef.current) return;
			if (event.key === "?") {
				displayHint();
			}
			const key = event.key.toLowerCase();
			if (letters.includes(key) && !isGameOver) {
				handleKeyClick(key);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyClick, isGameOver, displayHint]);

	return (
		<div
			ref={containerRef}
			className="flex flex-row flex-wrap justify-center gap-1.5 w-3/4 md:w-md mx-auto">
			{letters.split("").map((letter) => (
				<Key
					key={letter}
					letter={letter}
					handleKeyClick={handleKeyClick}
					guessedLetters={guessedLetters}
					currentWord={currentWord}
					isGameOver={isGameOver}
				/>
			))}
		</div>
	);
}
