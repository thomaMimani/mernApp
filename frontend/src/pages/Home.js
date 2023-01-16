import { useSelector } from "react-redux"

export const Home = ()=>{
    const data = useSelector(state=>state.authReducer.data)
    console.log(data)
    const values = Object.values(data)[0]
    const username = values.username
    console.log(values)
    

    return<>
     <h1>Hello {username}</h1>
    </>
}