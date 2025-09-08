interface LetterBlockProps {
	letter: string;
	guessedLetters: string[];
	numGuessesLeft: number;
}
export default function LetterBlock({ letter, guessedLetters, numGuessesLeft }: LetterBlockProps) {
	const show = guessedLetters.includes(letter);
	const display = show || numGuessesLeft === 0;
	const letterMissed = numGuessesLeft === 0 && !guessedLetters.includes(letter);

	return (
		<span
			aria-label={display ? `Letter ${letter}` : "Hidden letter"}
			className={`capitalize border-0 border-b bg-[#323232] w-10 h-10 border-[#F9F4DA] flex justify-center items-center text-lg font-bold ${
				letterMissed ? "text-red-500" : "text-green-500"
			}`}>
			{display && letter}
		</span>
	);
}
