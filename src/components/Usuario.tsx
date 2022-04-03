import { useState } from "react"

interface User{
  uid:String,
  name:String
}

export const Usuario = () => {

  const [user, setuser] = useState<User>();
  
  const login = () => {
    setuser({
      uid:"ROL123",
      name: "Ramon"
    });
  }


  return (
    <div className="mt-3">Usuario - useState
    <br />
    <button
      onClick={ login } 
      className="btn btn-outline-primary">
      Login
    </button>
    
    {
      (!user)
      ? <pre> No hay usuario </pre>
      : <pre> {JSON.stringify( user )} </pre>
    }
    </div>
  )
}
