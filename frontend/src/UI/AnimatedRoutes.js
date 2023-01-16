import { Route, Routes, useLocation } from "react-router-dom"
import { Login } from "../components/Login/Login"
import { Home } from "../pages/Home"

import { AnimatePresence } from 'framer-motion'

export const AnimatedRoutes = (props) => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </AnimatePresence>
    )
}