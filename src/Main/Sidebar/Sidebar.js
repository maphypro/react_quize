import React from 'react';
import './Sidebar.scss';

const Sidebar =  (props) => {
    return (
        <aside className={'sidebar'}>
            <nav className={"nav-menu"}>
                <button className={'nav-menu_item nav-menu_profile'} >Profile</button>
                <button className={'nav-menu_item nav-menu_messages'} >Messages</button>
                <button className={'nav-menu_item nav-menu_news'} >News</button>
                <button className={'nav-menu_item nav-menu_music'} >Music</button>
                <button className={'nav-menu_item nav-menu_settings'} >Settings</button>
            </nav>
        </aside>
    )
}

export default Sidebar;