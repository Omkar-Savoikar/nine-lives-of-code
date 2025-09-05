import type { ChipType } from "../types/ChipType";

interface ChipProps {
	lost: boolean;
	chip: ChipType;
}

export default function Chip({ chip, lost }: ChipProps) {
	const chipStyle = {
		backgroundColor: chip.backgroundColor,
		color: chip.color,
	};

	return (
		<div
			className={`relative rounded p-2 ${lost ? "opacity-50" : ""}`}
			style={chipStyle}>
			<span>{chip.name}</span>
			{lost && (
				<span className="absolute top-1/2 left-1/2 -translate-1/2">💀</span>
				// <span className="absolute flex items-center justify-center h-full w-full top-0 left-0">💀</span>
			)}
		</div>
	);
}
