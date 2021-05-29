import React from 'react'; 
import {Grid, Image} from 'semantic-ui-react'

const MainComponent = () =>{
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
