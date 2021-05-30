import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const PostCards = ({body, createdAt, username})=>{
    return (
        <Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header>{username}</Card.Header>
                    <Card.Meta>{createdAt}</Card.Meta>
                    <Card.Description>
                    {body}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                    </div>
                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default PostCards