import React from 'react'; 
import {Menu, Segment} from 'semantic-ui-react';  

const MenuBar = ()=>{

    const [activeItem, setActiveItem] = React.useState('')

    function handleClick(e, {name}){ 

    }

    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item 
                    name='home' 
                    active={setActiveItem('home')}
                    onClick={handleClick}
                    />
                <Menu.Menu position="right">
                    <Menu.Item 
                        name='login' 
                        active={setActiveItem('login')}
                        onClick={handleClick}
                        />
                    <Menu.Item 
                        name='register' 
                        active={setActiveItem('register')}
                        onClick={handleClick}
                         />
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default MenuBar