import { Tweet } from "react-tweet";

export const twitterEmbed = (props: any) => {
	if (!props.id) {
		return;
	}
	return (
		<div className="custom-tweet">
			<Tweet id={props.id} />
		</div>
	);
};
