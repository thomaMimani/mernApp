import{CardContent,TextField,CardActions,Card,Button} from "@mui/material"
import { useState } from "react"
export const Login = ()=>{
    const [isLogin ,setIsLogin]=useState(true)

    return (
        <Card
        sx={{width:'60%', m:'auto',maxWidth:'450px'}} 
        >
       <h1 style={{textAlign:'center'}}>{isLogin?'Login':'SignUn'}</h1>
        <CardContent>
            {!isLogin &&
             <TextField sx={{width:'100%',my:1}}  label={'Username'} ></TextField>
            }
        <TextField sx={{width:'100%',my:1}}  label={'Email'} ></TextField>
        <TextField sx={{width:'100%',my:1}} type={'password'} label={'Password'}></TextField>
        </CardContent>
        <CardActions sx={{width:'100%', display:'flex',flexDirection:'column'}}>
            <Button size='large'  sx={{ my:'1px', width:'150px',borderRadius:20}} variant='contained' >{isLogin?'Register':'Create'}</Button>
            <Button size='small'  sx={{ my:'1px', width:'250px',borderRadius:20}} onClick={()=>setIsLogin(!isLogin)} variant='text' >{isLogin?'Create account':'Have account? Login'}</Button>
        </CardActions>
    </Card>
     
     )
}