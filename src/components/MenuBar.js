import React from 'react'; 
import {Menu, Segment} from 'semantic-ui-react';  

const MenuBar = ()=>{

    const [activeItem, setActiveItem] = React.useState()

    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item name='home' 
                    active={setActiveItem('home')}
                    onClick={handleClick}
                    />
                <Menu.Item name='home' 
                    active={setActiveItem('home')}
                    onClick={handleClick}
                    />
                <Menu.Menu position="right">
                    <Menu.Item/>
                </Menu.Menu>
            </Menu>
        </div>
    )
}