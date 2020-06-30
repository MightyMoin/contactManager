import React from 'react'

function Error() {
    return (
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%'}}>
            <h1 className="display-4"><span className="text-danger">404</span> Page Not Found </h1>
            <p className="lead" >Sorry that page doesnot exist</p>
            <a href="/"> Click here to redirect to Homepage</a>
        </div>
    )
}
export default Error;