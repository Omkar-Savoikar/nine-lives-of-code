interface KeyProps {
	letter: string;
	currentWord: string;
	guessedLetters: string[];
	isGameOver: boolean;
	handleKeyClick: (letter: string) => void;
}

export default function Key({ letter, currentWord, guessedLetters, handleKeyClick, isGameOver }: KeyProps) {
	function getBackgroundColor() {
		if (guessedLetters.includes(letter)) {
			if (currentWord.includes(letter.toLowerCase())) {
				return "bg-green-500";
			} else {
				return "bg-red-500";
			}
		}
		return "bg-amber-500";
	}

	return (
		<button
			className={`w-10 h-10 ${getBackgroundColor()} border border-[#D7D7D7] rounded cursor-pointer capitalize`}
			disabled={isGameOver}
			aria-disabled={guessedLetters.includes(letter)}
			aria-label={`Letter ${letter}`}
			onClick={() => handleKeyClick(letter)}>
			{letter}
		</button>
	);
}
