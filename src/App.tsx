import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css'
import {Notes} from "./pages/Notes";
import {NoteInfo} from "./pages/NoteInfo";
import PageWrapper from "./pages/PageWrapper";
import {NotFound} from "./pages/NotFound";


function App() {
    return (
        <div className='app-wrapper'>
            <header className='app-header'/>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/notes" />}
                    />
                    <Route path="/" element={<PageWrapper/>}>
                        <Route path="notes" element={<Notes/>}/>
                        <Route path="note/:noteId" element={<NoteInfo/>}/>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;
