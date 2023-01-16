import { Avatar, Card, CardMedia, Typography } from "@mui/material"
import { Box } from "@mui/system"
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from "react-redux"
import { useState } from "react";
import { motion } from "framer-motion";


export const Home = () => {
    const data = useSelector(state => state.authReducer.data)
    const values = Object.values(data)[0]
    const username = values.username

    const [profilePic, setProfilePic] = useState(false)



    return <motion.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Card sx={{ width: '90%' }}>
                <CardMedia
                    sx={{
                        cursor: 'pointer'
                    }}
                    component="img"
                    height="194"
                    image="https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg"
                    alt="Paella dish"
                ></CardMedia>
                <Avatar 
                onMouseOver={()=>setProfilePic(true)}
                onMouseOut = {()=> setProfilePic(false)}
                sx={{
                    mx: 'auto',
                    border: '6px solid',
                    width: 170, zIndex: '1',
                    top: '-50px',
                    position: 'relative',
                    height: 170,
                    cursor: 'pointer'

                }}>
                    {profilePic &&
                    <motion.div
                    initial={{opacity:0}}
                    whileHover={{opacity:1}}
                    whileTap={{ scale: 0.8 }}
                    exit={{opacity:0}}
                    >
                        <Box sx={{ textAlign: 'center' }}>
                            <AddIcon sx={{ fontSize: '42px' }} />
                            <p>Profile picture</p>
                        </Box>
                    </motion.div>
                    }
                </Avatar>
                <Typography sx={{ textAlign: 'center' }} variant='h3'>{username}</Typography>
            </Card>
        </Box>
    </motion.div>
}