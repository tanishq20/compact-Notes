import { Route, Routes } from 'react-router-dom'
import { Error404 } from '../components'
import { Archive, Home, Login, Notes, Signup, Trash } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/notes' element={<Notes />}></Route>
      <Route path='/archive' element={<Archive />}></Route>
      <Route path='/trash' element={<Trash />}></Route>
      <Route path='*' element={<Error404 />}></Route>
    </Routes>
  )
}
