import React from 'react';
import './styles/App.scss';
import Header from "../widgets/Header/ui/Header";
import AppRouter from "./providers/routers/ui/AppRouter";

function App() {
    return (
        <>
            <Header/>
            <div className="content">
                <AppRouter/>
            </div>
        </>

    );
}

export default App;
