/* eslint-disable react/prop-types */
import styles from "./SummaryItem.module.scss";

function SummaryItem({ item }) {
	const categoryClass = styles[item.category.toLowerCase()];

	return (
		<div className={`${styles.item} ${categoryClass}`}>
			<img src={item.icon} alt="" />
			<p>{item.category}</p>
			<p>
				<span>{item.score}</span> / 100
			</p>
		</div>
	);
}

export default SummaryItem;
