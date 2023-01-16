import { CardContent, TextField,Box, CardActions, Card, Button } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { authApi, createUserAsync } from "../../redux/auth"
export const Login = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)
    const dispatch = useDispatch()
    const api = useSelector(state => state.authReducer.api)

    const [errorState, setErrorState] = useState()
    const [emailS, setEmailS] = useState()
    const [usernameS, setUsernameS] = useState()
    const [passwordS, setPasswordS] = useState()
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

        dispatch(createUserAsync({ api, data })).then(data => {

            try {
                if (data.error) {
                    throw data.error
                }
                return navigate("/home")
            } catch (error) {
                setErrorState(error.message)
            }
        })
    }


    return (
        <Box sx={{ height: '100vh' }}>

            <Card
                sx={{ width: '60%', m: 'auto',my:'100px', maxWidth: '450px', minWidth: '300px' }}
            >
                <h1 style={{ textAlign: 'center' }}>{isLogin ? 'Login' : 'SignUn'}</h1>
                <div style={{ textAlign: 'center' }}>{errorState}</div>
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
        </Box>
    )
}