import React from 'react'; 
import {Menu, Segment} from 'semantic-ui-react';  

const MenuBar = ()=>{

    const [activeItem, setActiveItem] = React.useState('')

    const handleClick = (()=> console.log("jjjjjjj"))

    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item 
                    name='home' 
                    active={activeItem === "home"}
                    onClick = {}
                    />
                <Menu.Menu position="right">
                    <Menu.Item 
                        name='login' 
                        active={activeItem === "login"}
                        
                        />
                    <Menu.Item 
                        name='register' 
                        active={activeItem === "register"}
                        
                         />
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default MenuBar