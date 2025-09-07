import { useState } from "react";

import type { ChipType } from "../types/ChipType";
import Chip from "./Chip";

interface ChipsContainerProps {
	wrongGuessCount: number;
	languages: ChipType[];
	numGuessesLeft: number;
	hint1: string;
	hint2: string;
}

export default function ChipsContainer({
	wrongGuessCount,
	languages,
	numGuessesLeft,
	hint1,
	hint2,
}: ChipsContainerProps) {
	const [isHintVisible, setIsHintVisible] = useState(false);

	function displayHint() {
		setIsHintVisible(true);
	}

	return (
		<div className="flex flex-wrap w-64 gap-2 items-center justify-center mt-5 mx-auto">
			{languages.map((language, index) => (
				<Chip
					key={index}
					lost={index < wrongGuessCount}
					chip={language}
				/>
			))}
			<p className="text-center">Hint 1: {hint1}</p>
			<div className="flex flex-row justify-around w-full">
				<p className="w-1/2 text-center">Guesses left: {numGuessesLeft}</p>
				<div className="w-1/2 flex flex-row justify-center items-center">
					{isHintVisible ? (
						<p className="text-red-600">No more hints</p>
					) : (
						<button
							className="text-green-600"
							type="button"
							onClick={displayHint}>
							Want a Hint?💡
						</button>
					)}
				</div>
			</div>
			{isHintVisible && <p className="text-center">Hint 2: {hint2}</p>}
		</div>
	);
}
