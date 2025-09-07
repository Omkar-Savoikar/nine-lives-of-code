import Example from "/docs/demo.gif";

interface StartModalProps {
	startNewGame: () => void;
}

export default function StartModal({ startNewGame }: StartModalProps) {
	return (
		<div className="absolute top-1/2 left-1/2 -translate-1/2 bg-white w-3/4 pt-10 pb-5 rounded text-black z-10 flex flex-col items-center overflow-y-scroll">
			<p className="text-center font-extrabold text-3xl mb-5">Welcome to Nine Lives of Code</p>
			<div className="flex flex-row justify-center">
				<div className="flex justify-center items-center w-3/5">
					<img
						className="w-3/4 mx-auto"
						alt="Game example image"
						src={Example}
					/>
				</div>
				<div className="w-2/5 flex flex-col items-center justify-center px-5">
					<p className="text-left w-full font-bold">Instructions:</p>
					<ol className="list-decimal">
						<li>
							In the example, empty blanks are displayed at start to resemble the word. Click on the keys
							on the keyboard to guess the letters.
						</li>
						<li>
							On correct guess, the letter will be displayed in the empty blanks and the key will become
							green.
						</li>
						<li>On wrong guess, the key will turn red.</li>
					</ol>
					<div
						className="sr-only"
						aria-live="polite"
						role="status">
						Welcome to Nine Lives of Code In the above screen empty blanks resemble the word. Click on the
						keys on the keyboard to guess the letters. On correct guess, the letter will be displayed in the
						empty blanks and the key will become green. On wrong guess, the key will turn green.
					</div>
				</div>
			</div>
			<button
				className="bg-blue-500 text-white p-2 rounded mt-5 cursor-pointer"
				type="submit"
				onClick={startNewGame}>
				Start Game
			</button>
		</div>
	);
}
