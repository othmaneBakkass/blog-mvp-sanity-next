import { bungee } from "@/app/(home)/layout";
import { Image } from "next-sanity/image";

function Article() {
	return (
		<>
			<a
				className="group w-min flex flex-col bg-sandy-beach-200 focus:outline-none rounded-2xl border-[4px] border-black  [box-shadow:0px_4px_0px_0px_rgb(0,0,0)] p-2"
				href="#">
				<div className="w-[402px] h-[320px] object-cover rounded-2xl relative overflow-hidden ">
					<Image
						className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
						src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Blog Image"
						fill
					/>
				</div>

				<div className="pt-4">
					<p className="text-sm font-medium">May, 1st 2024</p>
					<h3 className={`${bungee.className} capitalize font-medium text-xl`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
						non?
					</h3>
				</div>
				<p className="mt-1 text-neutral-800 line-clamp-3">
					*Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
					voluptas, quos dolorem blanditiis eum totam facilis quisquam quasi
					enim nobis veniam alias quidem, dolorum iusto omnis, aperiam autem
					modi ullam.
				</p>
				<div className="mt-2 flex flex-wrap gap-2">
					<span className="[box-shadow:0px_4px_0px_0px_rgb(0,0,0)] py-1.5 px-3  text-xs sm:text-sm rounded-xl bg-pink-400 border border-black font-medium">
						Discovery
					</span>
				</div>
			</a>
		</>
	);
}

export function ArticlesContainer() {
	return (
		<section
			className="w-full gap-4 flex justify-center items-stretch flex-wrap"
			id="articles">
			<Article />
			<Article />
			<Article />
		</section>
	);
}
