import ReactConfetti from "react-confetti";

export default function Loss() {
	return (
		<ReactConfetti
			numberOfPieces={1000}
			recycle={false}
			colors={["#555", "#888", "#aaa"]}
			drawShape={(ctx) => {
				ctx.beginPath();
				ctx.arc(0, 0, Math.random() * 3 + 2, 0, 2 * Math.PI); // small circles
				ctx.fillStyle = ["#333", "#555", "#777"][Math.floor(Math.random() * 3)];
				ctx.fill();
			}}
		/>
	);
}
