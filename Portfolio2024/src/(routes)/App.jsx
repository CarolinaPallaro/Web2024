
import React from 'react'
import {  NavBar, } from '../components/index';
import { SocialNav } from '../components/index';
import { Outlet } from 'react-router-dom';

// import { BodyPage } from '../components/index';


function App() {
 
  return (
    <>

    <div className='App flex min-h-[100vh] h-full bg-no-repeat justify-center bg-neutral-900 '> 

    <SocialNav />

    <Outlet />
   
    <NavBar />
    </div>

   
    
    </>
    
    
  );
}

export default App;

