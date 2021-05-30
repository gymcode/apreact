import React from 'react'; 
import {Grid} from 'semantic-ui-react'
import {gql, useQuery} from "@apollo/client"
import PostCards from '../../components/PostCards'

const GetPost = gql 
`
    {
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

    const {loading, data: {getPosts: posts} } = useQuery(GetPost)

    console.log(posts)
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
                      <h1>Loading posts .... </h1>
                  ) : (
                     posts && posts.map((items)=> (
                        <Grid.Column>
                            <PostCards username={items.username} body={items.body} />
                        </Grid.Column>
                     ))
                  )}
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default MainComponent
