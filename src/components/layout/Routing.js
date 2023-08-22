import { Route, Routes } from 'react-router-dom';
import  React from 'react';
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import News from "../pages/News";
import NewsDetails from "../pages/NewsDetails";

const Routing = () => {
    return <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/home"  element={<Home/>} />
        <Route exact path="/about"  element={<About/>} />
        <Route exact path="/contact"  element={<Contact/>} />
        <Route exact path="/news"  element={<News/>} />
        <Route exact path="/news/:id"  element={<NewsDetails/>} />
        <Route path="*" element={<div>404 not found</div>} />

    

        {/* <Route  exact path={'/about'} >
            <About/>
        </Route>
        <Route  exact path={'/news'} >
            <News/>
        </Route>
        <Route  exact path={'/news/:id'} >
            <NewsDetails/>
        </Route>

        <Route exact path={'/contact'} >
            <Contact/>
        </Route> */}
   
    </Routes>
}

export  default  Routing;
