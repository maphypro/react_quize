import React from 'react';
import Content from './Content/Content.js'
import Sidebar from './Sidebar/Sidebar.js';
import './Main.scss';

const Main =  (props) => {

    return (
        <main className={'main'}>
            <Sidebar />
            <Content />
        </main>
    )
}

export default Main;