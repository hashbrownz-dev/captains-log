import React from "react";

class DefaultLayout extends React.Component{
    render(){
        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Captain's Log</title>
                    <link rel="stylesheet" href="/css/app.css" />
                </head>
                <body>
                    <main>
                        {this.props.children}
                    </main>
                </body>
            </html>
        )
    }
}

export default DefaultLayout