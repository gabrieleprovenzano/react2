import { useEffect, useState } from "react"
import User from "./User"

const Users = () => {
const [users , setUsers] = useState([])

    useEffect(()=>{
        const fetchData = async() => {
            const res = await fetch('http://localhost:5000/api/oggetti');
            const json = await res.json()
            setUsers(json);
        }

        fetchData()
    }, [])

  return (
    <div>
        {users.map((user)=>(
            <User key={user.id} user={user}/>
        ))}
    </div>
  )
}

export default Users