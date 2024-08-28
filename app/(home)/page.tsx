import { ArticlesContainer } from "@/components/articles";
import { Hero } from "@/components/hero";
import { SearchBar } from "@/components/search";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
			<Hero />
			<section id="search" className="mt-4 mb-8 flex justify-end w-full">
				<SearchBar />
			</section>
			<ArticlesContainer />
		</main>
	);
}
