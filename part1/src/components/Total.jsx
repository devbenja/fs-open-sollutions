

export const Total = ({ parts }) => {

    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <section>
            <p>Number of exercises {totalExercises}</p>
        </section>
    );

};
