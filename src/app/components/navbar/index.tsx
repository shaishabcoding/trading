import { IoNotificationsOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import Button from "../ui/Button";
import { openModal } from "../../../redux/features/modal/modalSlice";

export default function Navbar() {
	const path = useAppSelector((state) => state.navigation.currentPath);
	const user = useAppSelector((state) => state.user.user);
	const dispatch = useAppDispatch();

	return (
		<div className="sticky top-0 z-10 flex items-center justify-between gap-4 py-4 px-[40px] text-white bg-[#021c1f]">
			<h1 className="capitalize">{path}</h1>
			<div className="text-2xl flex items-center gap-4">
				{!user && (
					<Button
						onClick={() => dispatch(openModal("Login"))}
						className="px-10"
						title="Login"
					>
						Login
					</Button>
				)}
				<button type="button" title="Notifications">
					<IoNotificationsOutline />
				</button>
				<button type="button" title="Customer Support">
					<TfiHeadphoneAlt />
				</button>
				{user && (
					<button type="button" title={user.name}>
						<img
							src="/tem/profile-pic.png"
							alt="profile"
							className="w-8 aspect-square rounded-full"
						/>
					</button>
				)}
			</div>
		</div>
	);
}
