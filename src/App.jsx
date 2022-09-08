import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import ProductDetail from './components/routes/ProductDetail'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import Cart from './components/shared/Cart'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts } from './store/slices/Products.slice'

function App() {

  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const obj = {
  //     firstName: 'Fernando',
  //     lastName: 'Milla',
  //     email: 'fernando.159@gmail.com',
  //     password: 'fernand024',
  //     phone: '1845112748',
  //     role: 'admin'
  //   }
  //   axios.post(URL, obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

  return (
    <div>
      <Header/>
      <Routes >
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </div>
    )
}

export default App
