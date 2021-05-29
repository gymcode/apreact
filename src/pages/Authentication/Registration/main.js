import React from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react'

const AuthComponent = ()=>{
    return(
        <div style={{paddingLeft: "30%", paddingRight: "30%", marginTop: "5%"}}>
            <div style={{fontSize: "2rem", paddingBottom: 30, paddingTop: 30}}>
                Register User
            </div>
            <form>
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </form>
        </div>
    )
}

export default AuthComponent