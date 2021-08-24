// import { useState } from 'react'
// import Errors from './Errors'

// const CreateWorkout = ({ handleCreateWorkout, errors }) => {

//     const [state, setState] = useState({})

//     const onChange = (e) => {
//         const { name, value } = e.target
//         setState({ ...state, [name]: value })
//     }

//     const onSubmit = (e) => {
//         e.preventDefault()

//         const config = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify(state)
//         }

//         fetch('/workouts', config)
//             .then(resp => resp.json())
//             // .then(data => console.log(data))
//             .then(data => handleCreateWorkout(data))
//     }

//     return (
//         <div>
//             <Errors errors={errors} />
//             <form onSubmit={onSubmit}>
//                 <label>Date:</label>
//                 <input onChange={onChange} name='date' type='text' />
//                 <br />
//                 <label>Weight:</label>
//                 <input onChange={onChange} name='weight' type='text' />
//                 <br />
//                 <input type='submit' value='Create Workout' />
//             </form>
//         </div>
//     )
// }

// export default CreateWorkout