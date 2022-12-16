import React from "react";
import DefaultLayout from "./DefaultLayout";

class Index extends React.Component{
    render(){
        const { logs } = this.props;
        return (
            <DefaultLayout>
                <h1>Index</h1>
                <a href="/logs/new">Create Log</a>
                <ul>
                    {logs.map( log => {
                        return(
                            <li>
                                <a href={`/logs/${log.id}`}>{log.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </DefaultLayout>
        )
    }
}

export default Index