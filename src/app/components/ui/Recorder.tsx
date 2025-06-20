import { useState, useEffect, useCallback } from "react";
import Button from "./Button";
import { FaRegCircleStop } from "react-icons/fa6";

const formatTime = (seconds: number) => {
	const h = (seconds / 3600) | 0;
	const m = ((seconds % 3600) / 60) | 0;
	const s = seconds % 60;

	const hh = h < 10 ? "0" + h : h;
	const mm = m < 10 ? "0" + m : m;
	const ss = s < 10 ? "0" + s : s;

	return `${h > 0 ? `${hh}:` : ""}${mm}:${ss}`;
};

const Recorder = () => {
	const [isRecording, setIsRecording] = useState<boolean>(false);
	const [timer, setTimer] = useState<number>(0);

	useEffect(() => {
		if (!isRecording) return setTimer((timer) => (timer ? 0 : timer));

		const interval = setInterval(() => setTimer((timer) => timer + 1), 1000);
		return () => clearInterval(interval);
	}, [isRecording]);

	const startRecording = useCallback(() => setIsRecording(true), []);
	const stopRecording = useCallback(() => setIsRecording(false), []);

	return (
		<div className="flex justify-center space-x-4 w-full">
			{!isRecording ? (
				<Button
					className="w-full justify-center gap-2"
					onClick={startRecording}
					title="Start Recording"
				>
					<svg
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.7917 17.75C12.5819 17.75 14.2988 17.0388 15.5647 15.773C16.8305 14.5071 17.5417 12.7902 17.5417 11C17.5417 9.20979 16.8305 7.4929 15.5647 6.22703C14.2988 4.96116 12.5819 4.25 10.7917 4.25C9.00148 4.25 7.28459 4.96116 6.01872 6.22703C4.75285 7.4929 4.04169 9.20979 4.04169 11C4.04169 12.7902 4.75285 14.5071 6.01872 15.773C7.28459 17.0388 9.00148 17.75 10.7917 17.75ZM10.7917 0.5C4.99269 0.5 0.291687 5.201 0.291687 11C0.291687 16.799 4.99269 21.5 10.7917 21.5C16.5907 21.5 21.2917 16.799 21.2917 11C21.2917 5.201 16.5907 0.5 10.7917 0.5ZM1.79169 11C1.79169 6.02975 5.82144 2 10.7917 2C15.7619 2 19.7917 6.02975 19.7917 11C19.7917 15.9703 15.7619 20 10.7917 20C5.82144 20 1.79169 15.9703 1.79169 11Z"
							fill="#DC143C"
						/>
					</svg>
					<span>Record</span>
				</Button>
			) : (
				<button
					className={`flex items-center gap-2 justify-center text-base border border-[#dc143c] bg-[#dc143c] py-1 px-4 rounded-md w-full`}
					onClick={stopRecording}
					title="Stop Recording"
				>
					<FaRegCircleStop className="text-2xl" />
					{formatTime(timer)}
				</button>
			)}
		</div>
	);
};

export default Recorder;
