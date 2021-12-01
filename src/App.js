import React from 'react'
import Header from './Header/Header.js';
import Main from "./Main/Main";
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <div className={'App'}>
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;
