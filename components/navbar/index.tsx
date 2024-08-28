import { bungee } from "@/app/(home)/layout";

export function Navbar() {
	return (
		<header className="w-full flex items-center rounded-b-lg [box-shadow:0px_10px_rgb(82_82_82)] justify-center bg-background">
			<p
				className={`${bungee.className} text-foreground my-2 text-2xl font-bold`}>
				Brew Talk
			</p>
		</header>
	);
}
