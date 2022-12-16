import React from "react";
import DefaultLayout from "./DefaultLayout";

class Show extends React.Component{
    render(){
        const { log } = this.props;
        const date = log.updatedAt.toDateString();
        return (
            <DefaultLayout>
                <h1>Show</h1>
                <div>
                    <h2>{log.title}</h2>
                    <p>{date}</p>
                    <p>Ship Status: { log.shipIsBroken ? `Broken` : `Running`}</p>
                    <p>{ log.entry }</p>
                    <a href={`/logs/${log.id}/edit`}>Edit Log</a>
                </div>
                <a href="/logs">Back</a>
            </DefaultLayout>
        )
    }
}

export default Show