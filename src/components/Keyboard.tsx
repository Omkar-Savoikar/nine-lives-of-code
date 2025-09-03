import Key from "./Key";

interface KeyboardProps {
	currentWord: string;
	guessedLetters: string[];
	isGameOver: boolean;
	handleKeyClick: (letter: string) => void;
}

export default function Keyboard({ currentWord, guessedLetters, isGameOver, handleKeyClick }: KeyboardProps) {
	const letters = "qwertyuiopasdfghjklzxcvbnm";
	return (
		<div className="flex flex-row flex-wrap justify-center gap-1.5 w-md mx-auto">
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
