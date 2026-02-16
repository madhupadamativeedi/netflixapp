import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import SigninAndLogin from './components/SigninAndLogin'
import Browse from './pages/Browse'

function App() {

  const router = createBrowserRouter([{
    path:'/', element:<SigninAndLogin/>},
    {path:"/browse", element:<Browse/> }
  
  ])

  return (
   <div className=''>
    <RouterProvider router={router}/>
   </div>
  )
}

export default App
