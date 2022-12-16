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
                    {logs.map( (log, i) => {
                        return(
                            <li key={i}>
                                <a href={`/logs/${log.id}`}>{log.title}</a><br />
                                <form action={`/logs/${log.id}/?_method=DELETE`} method='POST'>
                                    <input type="submit" value="DELETE" />
                                </form>
                            </li>
                        )
                    })}
                </ul>
            </DefaultLayout>
        )
    }
}

export default Index