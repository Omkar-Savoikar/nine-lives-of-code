import { useState } from "react";

import ReactConfetti from "react-confetti";
import { languages } from "../lib/languages";
import { getRandomWord } from "../lib/words";
import ChipsContainer from "./ChipsContainer";
import GameStatus from "./GameStatus";
import Keyboard from "./Keyboard";
import Loss from "./Loss";
import StartModal from "./StartModal";
import Timer from "./Timer";
import Word from "./Word";

export default function Main() {
	const [currentWord, setCurrentWord] = useState(getRandomWord());
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
	const [isModalVisible, setIsModalVisible] = useState(true);
	const [isHintVisible, setIsHintVisible] = useState(false);

	const word = currentWord.word;
	const hint1 = currentWord.hint1;
	const hint2 = currentWord.hint2;

	const wrongGuessCount = guessedLetters.filter((letter) => !word.includes(letter)).length;
	const isGameWon = word.split("").every((letter) => guessedLetters.includes(letter));
	const isGameLost = wrongGuessCount >= languages.length - 1;
	const isGameOver = isGameWon || isGameLost;

	function toggleModalVisibility() {
		setIsModalVisible((prev) => !prev);
	}

	function toggleHintVisibility() {
		setIsHintVisible((prev) => !prev);
	}

	function startNewGame() {
		setCurrentWord(getRandomWord());
		setGuessedLetters([]);
		setIsHintVisible(false);
		toggleModalVisibility();
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
			{isModalVisible && <div className="absolute w-full h-full z-10 top-0 left-0 bg-black"></div>}
			{isModalVisible && <StartModal startNewGame={startNewGame} />}
			<GameStatus
				isGameOver={isGameOver}
				isGameWon={isGameWon}
				wrongGuessCount={wrongGuessCount}
			/>
			<ChipsContainer
				wrongGuessCount={wrongGuessCount}
				languages={languages}
				numGuessesLeft={languages.length - 1 - wrongGuessCount}
				hint1={hint1}
				hint2={hint2}
				isHintVisible={isHintVisible}
				toggleHintVisibility={toggleHintVisibility}
			/>
			<Word
				currentWord={word}
				guessedLetters={guessedLetters}
				numGuessesLeft={languages.length - 1 - wrongGuessCount}
			/>
			<Keyboard
				handleKeyClick={handleKeyClick}
				guessedLetters={guessedLetters}
				currentWord={word}
				isGameOver={isGameOver}
			/>
			<Timer
				isGameOver={isGameOver}
				resetTrigger={word}
			/>
			<button
				className="cursor-pointer bg-[#11B5E5] border border-[#D7D7D7] w-56 h-10 mx-auto mt-5 rounded px-3 py-1.5 font-semibold text-lg flex items-center justify-center"
				onClick={toggleModalVisibility}
				disabled={isModalVisible}>
				{isGameOver ? "New Game" : "Resatrt"}
			</button>
		</main>
	);
}
