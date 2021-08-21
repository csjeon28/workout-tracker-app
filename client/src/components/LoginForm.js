// import React, { useState } from 'react'
// import { Button, ButtonContainer, FormField, Input } from '../styles'

// const LoginForm = ({ onLogin }) => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [errors, setErrors] = useState([])
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     })
//       .then((resp) => {
//         setIsLoading(false)
//         if (resp.ok) {
//           resp.json()
//             .then((user) => onLogin(user))
//         }
//         else {
//           resp.json()
//             .then((error) => setErrors(error.errors))
//         }
//       })
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <FormField>
//         <Label htmlFor="username">Username</Label>
//         <Input
//           type="text"
//           id="username"
//           autoComplete="off"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </FormField>
//       <FormField>
//         <Label htmlFor="password">Password</Label>
//         <Input
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </FormField>
//       <FormField>
//         <Button variant="fill" color="primary" type="submit">
//           {isLoading ? "Loading..." : "Login"}
//         </Button>
//       </FormField>
//       <FormField>
//         {errors.map((err) => (
//           <Error key={err}>{err}</Error>
//         ))}
//       </FormField>
//     </form>
//   );
// }

// export default LoginForm
