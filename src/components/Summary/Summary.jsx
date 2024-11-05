/* eslint-disable react/prop-types */
import SummaryItem from "../SummaryItem/SummaryItem";
import styles from "./Summary.module.scss";

import reactionIcon from "@/assets/images/icon-reaction.svg";
import memoryIcon from "@/assets/images/icon-memory.svg";
import verbalIcon from "@/assets/images/icon-verbal.svg";
import visualIcon from "@/assets/images/icon-visual.svg";

const icons = {
	"icon-reaction.svg": reactionIcon,
	"icon-memory.svg": memoryIcon,
	"icon-verbal.svg": verbalIcon,
	"icon-visual.svg": visualIcon,
};

function Summary({ data }) {
	const mappedData = data.map((item) => ({
		...item,
		icon: icons[item.icon.split("/").pop()],
	}));

	return (
		<div className={styles.summary}>
			<h2>Summary</h2>
			<div className={styles.itemContainer}>
				{mappedData.map((item) => {
					return <SummaryItem key={item.category} item={item} />;
				})}
			</div>
			<button>Continue</button>
		</div>
	);
}

export default Summary;
