import { useSelector } from "react-redux"

export const Home = ()=>{
    const data = useSelector(state=>state.authReducer.data)
    console.log(data)
    const userName = Object.values(data).map(item=>item.email)
    return <h1>Hello {userName}</h1>
}