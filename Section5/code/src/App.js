import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


const AppList = ()=>{
    return (
        <div className='App'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<AppList/>);

