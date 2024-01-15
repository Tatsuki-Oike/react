import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RouterApp from "./RouterApp"
import Home from "./Home"
import Page from "./Page"
import Param from "./Param"
import Query from "./Query"
import Navigate from "./Navigate"

const routesLink = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RouterApp />}>
            <Route path="" element={<Home/>}/>
            <Route path="page" element={<Page/>}/>
            <Route path="param/:id" element={<Param/>}/>
            <Route path="query" element={<Query/>}/>
            <Route path="navigate" element={<Navigate/>}/>
        </Route>
    )
)

export default routesLink