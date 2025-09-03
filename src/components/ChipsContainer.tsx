import type { ChipType } from "../types/ChipType";
import Chip from "./Chip";

interface ChipsContainerProps {
	wrongGuessCount: number;
	languages: ChipType[];
	numGuessesLeft: number;
}

export default function ChipsContainer({ wrongGuessCount, languages, numGuessesLeft }: ChipsContainerProps) {
	return (
		<div className="flex flex-wrap w-64 gap-2 items-center justify-center mt-5 mx-auto">
			{languages.map((language, index) => (
				<Chip
					key={index}
					lost={index < wrongGuessCount}
					chip={language}
				/>
			))}
			<p>Guesses left: {numGuessesLeft}</p>
		</div>
	);
}
