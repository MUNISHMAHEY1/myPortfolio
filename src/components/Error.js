import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

function Error() {
    return (

        <Card >
      <CardContent>
          Page Not Found (Status 400)
      </CardContent>
      <CardActions>
        <Link to="/"><Button size="small">Back Home</Button></Link>
      </CardActions>
    </Card>
        // <div>
        //     <div className="ui placeholder segment">
        //     <div className="ui icon header">
        //         <i className="bug icon"></i>
        //         Page Not Found (Status 404)
        //     </div>
        //     <Link to="/"><button style={{color:"blue"}}>Return Home</button></Link>
        //     </div>
        // </div>
    )
}

export default Error;
