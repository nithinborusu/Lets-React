import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestroMenu from './components/RestroMenu'

import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'



const AppList = ()=>{
    return (
        <div className='App'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppList/>,
        children:[
            {
                path:"/home",
                element:<Main/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestroMenu/>
            }
        ],
        errorElement:<Error/>
    },
    // {
    //     path:"/about",
    //     element: <About/>,
    // },
    // {
    //     path:"/contact",
    //     element: <Contact/>,
    // },
])

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<RouterProvider router={appRouter}/>);

