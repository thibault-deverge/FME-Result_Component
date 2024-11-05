import Result from "../Result/Result";
import Summary from "../Summary/Summary";
import data from "../../data/data.json";

function App() {
	return (
		<main>
			<Result data={data} />
			<Summary data={data} />
		</main>
	);
}

export default App;
