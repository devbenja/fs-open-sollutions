import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Total } from "./components/Total";


const App = () => {

	// const now = new Date();
	// const a = 10;
	// const b = 20;

	// const part1 = 'Fundamentals of React'
	// const exercises1 = 10
	// const part2 = 'Using props to pass data'
	// const exercises2 = 7
	// const part3 = 'State of a component'
	// const exercises3 = 14

	const course = 'Half Stack application development';

	const courseParts = [
        { part: 'Fundamentals of React', exercises: 10 },
        { part: 'Using props to pass data', exercises: 7 },
        { part: 'State of a component', exercises: 14 }
    ];

	return (
		<div>
			<Header course={course}/>
			<Content/>
			<Total parts={courseParts}/>
		</div>
	);

};

export default App;

// const Other = ({ name }) => {

// 	return (
// 		<h4>Other Component {name}</h4>
// 	);

// };
