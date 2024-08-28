import Image from "next/image";
import BeanOne from "@/components/icons/bean-01.svg";
import BeanTwo from "@/components/icons/bean-02.svg";
import BeanThree from "@/components/icons/bean-03.svg";
import BeanFour from "@/components/icons/bean-04.svg";

export function Hero() {
	return (
		<section
			id="hero"
			className="w-full relative mt-32 mb-16  justify-center items-center">
			<h1 className="text-5xl leading-snug capitalize font-bold text-center">
				Exploring Coffee, One Brew at a Time:<br></br>Your Guide to Everything
				Coffee
			</h1>
			<p className="text-2xl text-center">
				Dive into the rich flavors, stories, and culture of coffee. <br /> Brew,
				learn, and share your coffee journey with us.
			</p>
			<Image
				aria-hidden
				src={BeanOne}
				alt="bean icon"
				className="absolute bottom-0 left-0 -z-50"
			/>
			<Image
				aria-hidden
				src={BeanTwo}
				alt="bean icon"
				className="absolute bottom-0 right-0 -z-50"
			/>
			<Image
				aria-hidden
				src={BeanThree}
				alt="bean icon"
				className="absolute -top-40 right-0 -z-50"
			/>
			<Image
				aria-hidden
				src={BeanFour}
				alt="bean icon"
				className="absolute -top-40 left-0 -z-50"
			/>
		</section>
	);
}
