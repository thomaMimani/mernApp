import { CardContent, TextField, CardActions, Card, Button } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { redirect, useNavigate } from "react-router-dom"
import { authApi, createUserAsync } from "../../redux/auth"
export const Login = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)
    const dispatch = useDispatch()
    const api = useSelector(state => state.authReducer.api)

    const [emailS, setEmailS] = useState()
    const [usernameS, setUsernameS] = useState()
    const [passwordS, setPasswordS] = useState()
    const data = useSelector(state => state.authReducer.data)
    console.log(data)
    if (!isLogin) {
        dispatch(authApi(`http://localhost:4000/api/user/signUp`))
    } else {
        dispatch(authApi(`http://localhost:4000/api/user/login`))
    }

    const loginHandler = () => {
        let data;
        if (!isLogin) {
            data = {
                username: usernameS,
                password: passwordS,
                email: emailS
            }
        } else {
            data = {
                password: passwordS,
                email: emailS
            }
        }

        dispatch(createUserAsync({ api, data }))

        return navigate("/home")

    }


    return (
        <Card
            sx={{ width: '60%', m: 'auto', maxWidth: '450px' }}
        >
            <h1 style={{ textAlign: 'center' }}>{isLogin ? 'Login' : 'SignUn'}</h1>
            <CardContent>
                {!isLogin &&
                    <TextField onChange={(e) => setUsernameS(e.target.value)} sx={{ width: '100%', my: 1 }} label={'Username'} ></TextField>
                }
                <TextField onChange={(e) => setEmailS(e.target.value)} sx={{ width: '100%', my: 1 }} label={'Email'} ></TextField>
                <TextField onChange={(e) => setPasswordS(e.target.value)} sx={{ width: '100%', my: 1 }} type={'password'} label={'Password'}></TextField>
            </CardContent>
            <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <Button size='large' sx={{ my: '1px', width: '150px', borderRadius: 20 }} onClick={loginHandler} variant='contained' >{isLogin ? 'Register' : 'Create'}</Button>
                <Button size='small' sx={{ my: '1px', width: '250px', borderRadius: 20 }} onClick={() => setIsLogin(!isLogin)} variant='text' >{isLogin ? 'Create account' : 'Have account? Login'}</Button>
            </CardActions>
        </Card>
    )
}