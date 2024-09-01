import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Browse from './Pages/Browse/Browse.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import Project from './Pages/Project/Project.jsx'
import UserProfile from './Pages/UserProfile/UserProfile.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="Browse" element={<Browse />} />
      <Route path="Login" element={<Login />}/>
      <Route path="Project" element={<Project />}/>
      <Route path="UserProfile" element={<UserProfile />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
