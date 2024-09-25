import { Part } from "./Part";


export const Content = () => {

    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <section>
            <Part part={part1} exerciseQuantity={exercises1} />
            <Part part={part2} exerciseQuantity={exercises2} />
            <Part part={part3} exerciseQuantity={exercises3} />
            {/* {
                parts.map((item, index) => (
                    <p key={index}>
                        {item.part} {item.exercises}
                    </p>
                ))
            } */}
        </section>
    );

};
