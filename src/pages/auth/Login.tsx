import {useState } from 'react'
import {useUsers} from '../../state/user'

import './auth.css'

export default function Login() {
    const[email, setEmail] = useState("")
    const[pass, setPass] = useState("")
    const users = useUsers()

    console.log ('users test',users)

    const handleEmail = (event: any) =>{
      console.log("event", event.target.value)
      setEmail(event.target.value)
    }
  
    const handlePass = (e: any) => {
      console.log("event", e.target.value)
      setPass(e.target.value)
    }
  
    const login = async () => {
      console.log(email, pass)
      //sending to server
      const result = await fetch("http://34.219.113.221/auth/login",{
        method:"POST",
        body:JSON.stringify({
          email:email,
          password:pass
        })
      })
      console.log('login res', result)
    }
  
    return (
      <div className="page center">
        <form className="form-container">
          <h1 className="title">Login</h1>
          <input value={email} onChange={handleEmail} type="email" autoComplete="email" placeholder="email" className="auth-input" />
          <input value={pass} onChange={handlePass} type="password" autoComplete="password" placeholder="password" className="auth-input" />
          <button onClick={login} type="button" className="auth-button">Login</button>
        </form>
      </div>
    )
  }