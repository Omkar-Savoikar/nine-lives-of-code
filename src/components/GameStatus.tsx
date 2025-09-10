import { memo } from "react";
import { getFarewellText } from "../lib/farewell";
import { languages } from "../lib/languages";

interface GameStatusProps {
	isGameOver: boolean;
	isGameWon: boolean;
	wrongGuessCount: number;
}

function GameStatus({ isGameOver, isGameWon, wrongGuessCount }: GameStatusProps) {
	return (
		<section
			aria-live="polite"
			role="status">
			{isGameOver ? (
				isGameWon ? (
					<div
						className={
							"bg-green-500 w-sm mx-auto text-[#F9F4DA] flex flex-col justify-center items-center mt-5 rounded"
						}>
						<p className="text-xl">You win!</p>
						<p className="text-lg">Well done! 🎉</p>
					</div>
				) : (
					<div
						className={
							"bg-red-500 w-sm mx-auto text-[#F9F4DA] flex flex-col justify-center items-center mt-5 rounded"
						}>
						<p className="text-xl">Game over!</p>
						<p className="text-lg">You lose. Better start learning assembly! 😭</p>
					</div>
				)
			) : wrongGuessCount > 0 ? (
				<div className="bg-blue-500 w-sm mx-auto text-[#F9F4DA] flex flex-col justify-center items-center mt-5 rounded">
					<p className="text-xl">Try again!</p>
					<p className="text-lg">{getFarewellText(languages[wrongGuessCount - 1].name)}</p>
				</div>
			) : (
				<div className="invisible mt-5">
					<p className="text-xl">You win!</p>
					<p className="text-lg">You lose. Better start learning assembly! 😭</p>
				</div>
			)}
		</section>
	);
}

export default memo(GameStatus);
