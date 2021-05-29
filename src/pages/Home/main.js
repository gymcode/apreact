import React from 'react'; 
import {Grid, Image} from 'semantic-ui-react'
import {gql, useQuery} from "@apollo/client"

const GetPost = gql 
`
    query{
        getPosts {
            id
            body
            createdAt
            username
            likes {
                username
            }
            comments {
                id
                username
                createdAt   
            }
        }
    }
`

const MainComponent = () =>{

    const {loading, data: {getPosts}, error} = useQuery(GetPost)

    console.log(getPosts)
    return(
        <div style={{paddingTop: 30}}>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <div>Recent Posts</div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  {loading ? (
                      <h1>Loading posts ... </h1>
                  ) : (
                     getPosts && getPosts.map((items)=> (
                        <Grid.Column>
                            <h2>{items.body}</h2>
                        </Grid.Column>
                     ))
                  )}
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default MainComponent
