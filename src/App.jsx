import React from 'react'
import Home from './pages/Home'
import Events from './pages/Events'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import RouteLayout from './Layout/RouteLayout'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Login from './pages/Login'
import { Navigate } from 'react-router-dom'
const App = () => {
  
  
  const router = createBrowserRouter(createRoutesFromElements(
  
    <Route path='/' element={ <RouteLayout/> }>
      <Route index element={ <Home/> }></Route>
      <Route path='Events' element={ <Events/> }></Route>
      <Route path='Team' element={ <Team/> }></Route>
      <Route path='Gallery' element={ <Gallery/> }></Route>
      <Route path='login' element={<Login/>}></Route>



    </Route>
    
    
  ))
  
  return <RouterProvider router={router} />


}
export default App