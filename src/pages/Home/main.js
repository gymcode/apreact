import {React} from 'react'; 
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

    const {loading, data, error} = useQuery(GetPost)

    console.log(data)
    return(
        <div style={{paddingTop: 30}}>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <div>dads</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div>dads</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div>dads</div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default MainComponent
