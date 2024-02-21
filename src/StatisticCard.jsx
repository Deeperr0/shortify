import { startTransition } from "react";

export default function StatisticCard(props) {
	const { statisticsData } = props;
	var titleClass = statisticsData.title.toLowerCase();
	titleClass = titleClass.replace(/\s+/g, "-");
	return (
		<div className={`statistic-card ${titleClass}`}>
			<div className="statistic-icon">{statisticsData.img}</div>
			<h3 className="statistic-card-title">{statisticsData.title}</h3>
			<p className="statistic-card-text">{statisticsData.text}</p>
		</div>
	);
}
