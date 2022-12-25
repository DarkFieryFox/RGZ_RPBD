import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './component/Header'

import './main.css'
import {SchoolchildPage} from "./component/schoolchilds/SchoolchildsPage";
import {ParentsPage} from "./component/parents/ParentsPage";
import {ProgresssPage} from "./component/progresss/ProgresssPage";
export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/schoolchilds" element={<SchoolchildPage/>} />
                    <Route path="/parent" element={<ParentsPage/>} />
                    <Route path="/progresss" element={<ProgresssPage/>} />
                </Routes>
        </BrowserRouter>
    )
}
