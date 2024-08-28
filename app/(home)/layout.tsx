import { Navbar } from "@/components/navbar";
import { Bungee } from "next/font/google";

export const bungee = Bungee({ weight: "400", subsets: ["latin"] });

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
