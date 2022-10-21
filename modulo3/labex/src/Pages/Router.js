import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AdmHomePage from "./AdmHomePage"
import HomePage from "./HomePage"

function Router(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router