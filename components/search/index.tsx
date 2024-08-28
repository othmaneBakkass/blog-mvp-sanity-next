import { bungee } from "@/app/(home)/layout";

export function SearchBar() {
	return (
		<form>
			<label className={`text-sm mr-2 ${bungee.className}`}>
				Search for blogs:
			</label>
			<input
				type="search"
				className="bg-transparent transition-all duration-300 ease-in-out focus:border-cyan-400 focus:[box-shadow:0px_2px_0px_0px_rgb(34,211,238)] hover:border-cyan-400 hover:[box-shadow:0px_2px_0px_0px_rgb(34,211,238)] placeholder:text-neutral-700 w-96 border-4 rounded-full border-black  [box-shadow:0px_2px_0px_0px_rgb(0,0,0)] "
				placeholder="searching..."
			/>
		</form>
	);
}
