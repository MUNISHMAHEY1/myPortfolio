import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="banner-error">
          <h1>Page not Found (Status 404)</h1>
          <hr/>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Back to Home Page
            </Button>
          </Link>
        </div>
    )
}

export default Error;
