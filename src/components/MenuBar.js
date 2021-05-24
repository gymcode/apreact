import React from 'react'; 
import {Menu, Segment} from 'semantic-ui-react';  
import {Link} from 'react-router-dom'

const MenuBar = ()=>{

    const [activeItem, setActiveItem] = React.useState('')

    const handleClick = ((e, {name})=> setActiveItem(name))

    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item 
                    name='home' 
                    active={activeItem === "home"}
                    onClick = {handleClick}
                    as = {Link}
                    to = {'/'}
                    />
                <Menu.Menu position="right">
                    <Menu.Item 
                        name='login' 
                        active={activeItem === "login"}
                        onClick = {handleClick}
                        as  = {Link}
                        to = {'/login'}
                        />
                    <Menu.Item 
                        name='register' 
                        active={activeItem === "register"}
                        onClick = {handleClick}
                        as = {Link}
                        to = {'/register'}
                         />
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default MenuBar