import { Route, Routes } from 'react-router-dom'
import { Archive, Home, Login, Signup, Trash } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/archive' element={<Archive />}></Route>
      <Route path='/trash' element={<Trash />}></Route>
    </Routes>
  )
}
