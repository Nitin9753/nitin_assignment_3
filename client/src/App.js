import { useEffect, useState } from 'react';
import './App.css';
import Spinner from './component/Spinner';
import Layout from './component/Layout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterUser from './component/RegisterUser';

function App() {
    // const [isLoading, setIsLoading]=useState(true);
    // useEffect(()=>{
    //   setTimeout(()=>{
    //     setIsLoading(false);
    //   }, 1000);
    // })
    return ( <
        div className = "App" >
        <
        BrowserRouter basename = '/' >
        <
        Routes > { /* ROuting for webpage */ } <
        Route path = "/"
        element = { < Layout / > }
        /> <
        Route path = "/add-user"
        element = { < RegisterUser / > }
        /> <
        /Routes> <
        /BrowserRouter> <
        /div>
    );
}

export default App;