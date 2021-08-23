import CreateWorkout from './CreateWorkout'
import WorkoutDate from './WorkoutDate'

const Workouts = ({ workouts }) => {

    const workoutList = workouts.map(w => <WorkoutDate key={w.id} workout={w} />)

    return (
        <div>
            <h3>Here are your workouts</h3>
            {workoutList}
            <CreateWorkout />
        </div>
    )
}
export default Workouts

// import { Link } from 'react-router-dom'
// import CreateWorkout from './CreateWorkout'
// import styled from 'styled-components'

// const Workouts = ({ workouts }) => {

//     return (
//         <section>
//             {workouts.length > 0 ? (
//                 workouts.map((workout, index) => (
//                     <div id={workout.id} key={index}>{workout.date}{workout.weight}</div>
//                 ))
//             ) : (
//                 <>
//                     <h2>No Workouts Found</h2>
//                     <button as={Link} to='/workouts/new'>
//                         Create Workout
//                     </button>
//                 </>
//             )}
//         </section>
//     )
// }

// const Wrapper = styled.section`
//   max-width: 800px;
//   margin: 40px auto;
// `;



// export default Workouts

// import { useState, useEffect } from 'react'
// import CreateWorkout from './CreateWorkout'

// const Workouts = () => {

//     const [workouts, setWorkouts] = useState([])

//     useEffect(() => {
//         fetch('/workouts')
//             .then(resp => resp.json())
//             // .then(data => setWorkouts(data.workouts))
//             .then(data => console.log(data.workouts))
//     }, [])

//     const renderWorkouts = () => {
//         return workouts.map((workout, index) => <div id={workout.id} key={index}>{workout.date}{workout.weight}</div>)
//     }

//     return (
//         <div>
//             <CreateWorkout />
//             {renderWorkouts()}
//         </div>
//     )
// }

// export default Workouts