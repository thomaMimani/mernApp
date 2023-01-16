import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { AnimatedRoutes } from './UI/AnimatedRoutes';

function App() {
  const data = useSelector(state => state.authReducer.data)
  const [isLogin, setIsLogin] = useState()

  useEffect(() => {
    let dataValue = Object.values(data)
    setIsLogin(dataValue.length > 0 ? true : false)
  }, [data])

  return (
    <>
      {
        isLogin &&
        <Navigation />
      }

     <AnimatedRoutes/>
    </>
  );
}

export default App;