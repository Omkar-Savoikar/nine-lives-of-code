import LetterBlock from "./LetterBlock";

interface WordProps {
	currentWord: string;
	guessedLetters: string[];
	numGuessesLeft: number;
}

export default function Word({ currentWord, guessedLetters, numGuessesLeft }: WordProps) {
	const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];

	return (
		<>
			<div className="flex flex-row gap-0.5 justify-center my-5 mx-auto flex-wrap w-3/4">
				{Array.from(currentWord).map((letter, index) => (
					<LetterBlock
						key={index}
						letter={letter}
						guessedLetters={guessedLetters}
						numGuessesLeft={numGuessesLeft}
					/>
				))}
			</div>
			{/* Screen read only part */}
			<div
				className="sr-only"
				aria-live="polite"
				role="status">
				<p>
					{currentWord.includes(lastGuessedLetter)
						? `Correct! The letter ${lastGuessedLetter} is in the word.`
						: `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
					You have {numGuessesLeft} attempts left.
				</p>
				<p>
					Current Word:{" "}
					{currentWord
						.split("")
						.map((letter) => (guessedLetters.includes(letter) ? letter + "." : "blank ."))
						.join(" ")}
				</p>
			</div>
		</>
	);
}
