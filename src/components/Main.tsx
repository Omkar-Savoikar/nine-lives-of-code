import { useState } from "react";

import ReactConfetti from "react-confetti";
import { languages } from "../lib/languages";
import { getRandomWord } from "../lib/words";
import ChipsContainer from "./ChipsContainer";
import GameStatus from "./GameStatus";
import Keyboard from "./Keyboard";
import Loss from "./Loss";
import Timer from "./Timer";
import Word from "./Word";

export default function Main() {
	const [currentWord, setCurrentWord] = useState(getRandomWord());
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	const wrongGuessCount = guessedLetters.filter((letter) => !currentWord.includes(letter)).length;
	const isGameWon = currentWord.split("").every((letter) => guessedLetters.includes(letter));
	const isGameLost = wrongGuessCount >= languages.length - 1;
	const isGameOver = isGameWon || isGameLost;

	function resetGame() {
		setCurrentWord(getRandomWord());
		setGuessedLetters([]);
	}

	function handleKeyClick(letter: string) {
		if (guessedLetters.includes(letter)) return;
		setGuessedLetters((prev) => [...prev, letter]);
	}

	return (
		<main className="flex flex-col justify-center">
			{isGameWon && (
				<ReactConfetti
					recycle={false}
					numberOfPieces={1000}
				/>
			)}
			{isGameLost && <Loss />}
			<GameStatus
				isGameOver={isGameOver}
				isGameWon={isGameWon}
				wrongGuessCount={wrongGuessCount}
			/>
			<ChipsContainer
				wrongGuessCount={wrongGuessCount}
				languages={languages}
				numGuessesLeft={languages.length - 1 - wrongGuessCount}
			/>
			<Word
				currentWord={currentWord}
				guessedLetters={guessedLetters}
				numGuessesLeft={languages.length - 1 - wrongGuessCount}
			/>
			<Keyboard
				handleKeyClick={handleKeyClick}
				guessedLetters={guessedLetters}
				currentWord={currentWord}
				isGameOver={isGameOver}
			/>
			<Timer isGameOver={isGameOver} />
			{isGameOver && (
				<button
					className="cursor-pointer bg-[#11B5E5] border border-[#D7D7D7] w-56 h-10 mx-auto mt-5 rounded px-3 py-1.5 font-semibold text-lg flex items-center justify-center"
					onClick={resetGame}>
					New Game
				</button>
			)}
		</main>
	);
}
