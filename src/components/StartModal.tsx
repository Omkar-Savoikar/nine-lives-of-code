import { useEffect, useRef } from "react";
import Example from "/docs/demo.gif";

interface StartModalProps {
	startNewGame: () => void;
}

export default function StartModal({ startNewGame }: StartModalProps) {
	const startButtonRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		if (startButtonRef.current) {
			startButtonRef.current.focus();
		}
	}, []);

	return (
		<div className="absolute top-1/2 left-1/2 -translate-1/2 bg-white w-3/4 max-w-4xl pt-10 pb-5 rounded text-black z-10 flex flex-col items-center overflow-y-scroll">
			<p className="text-center font-extrabold text-3xl mb-5">Welcome to WordQuest</p>
			<div className="flex flex-col lg:flex-row justify-center">
				<div className="flex justify-center items-center w-4/5 mx-auto">
					<img
						className="w-4/5 mx-auto"
						alt="Game example image"
						src={Example}
					/>
				</div>
				<div className="w-4/5 flex flex-col items-center justify-center px-5 mx-auto">
					<p className="text-left w-full font-bold mt-2">Instructions:</p>
					<ol className="list-decimal">
						<li>At the start, the secret word is shown as empty blanks.</li>
						<li>Use the on-screen keyboard (or your physical keyboard on desktop) to guess letters.</li>
						<li>Correct guess → the key turns green and the letter fills in the blanks.</li>
						<li>Wrong guess → the key turns red and you loose a life.</li>
						<li>You start with one free hint. For an extra hint, click the 💡 bulb icon.</li>
						<li>A timer is running → try to guess the word as quickly as possible</li>
						<li>
							The game ends when:
							<ul className="list-disc pl-6">
								<li>All letters are guessed → you win 🎉</li>
								<li>All 9 languages vanish → you lose 💀</li>
							</ul>
						</li>
					</ol>
					<div
						className="sr-only"
						aria-live="polite"
						role="status">
						Welcome to WordQuest In the above screen empty blanks resemble the word. Click on the keys on
						the keyboard to guess the letters. On correct guess, the letter will be displayed in the empty
						blanks and the key will become green. On wrong guess, the key will turn green.
					</div>
				</div>
			</div>
			<button
				ref={startButtonRef}
				className="bg-blue-500 text-white p-2 rounded mt-5 cursor-pointer"
				type="submit"
				onClick={startNewGame}>
				Start Game
			</button>
		</div>
	);
}
