import { useState, type ReactNode } from "react";

export default function Tab({
	data,
	onChange = () => {},
	init = data[0].value,
}: {
	data: {
		children: ReactNode;
		value: string;
	}[];
	onChange: (value: string) => void;
	init?: string;
}) {
	const [active, setActive] = useState(init);

	return (
		<div className="border border-[#176F79] bg-[radial-gradient(circle,_transparent,_#176F7999)] py-1 px-3 rounded-lg flex flex-wrap">
			{data.map((d, i) => (
				<button
					type="button"
					key={i}
					onClick={() => {
						onChange(d.value);
						setActive(d.value);
					}}
					className={`${
						active === d.value
							? "bg-gradient-to-b from-[#CDDB8E] via-[#dab24a] to-[#CDDB8E] rounded-full text-black"
							: ""
					} text-sm px-4 py-1`}
					title={d.value}
				>
					{d.children}
				</button>
			))}
		</div>
	);
}
