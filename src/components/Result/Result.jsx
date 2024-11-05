import styles from "./Result.module.scss";

/* eslint-disable react/prop-types */
function Result({ data }) {
	const averageRate = data.reduce((acc, item) => acc + item.score, 0) / data.length;

	let message;
	if (averageRate >= 80) {
		message = "Excellent";
	} else if (averageRate >= 50) {
		message = "Great";
	} else {
		message = "Needs Improvement";
	}

	return (
		<div className={styles.result}>
			<h2>Your Result</h2>
			<div className={styles.resultStats}>
				<p>{averageRate.toFixed(0)}</p>
				<p>of 100</p>
			</div>
			<div>
				<p className={styles.grade}>{message}</p>
				<p className={styles.performance}>
					Your performance exceeds{" "}
					{averageRate >= 80 ? "80%" : averageRate >= 50 ? "55%" : "less than 50%"} of the
					people conducting the test here!
				</p>
			</div>
		</div>
	);
}

export default Result;
