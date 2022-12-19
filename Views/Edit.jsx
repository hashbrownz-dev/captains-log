import React from "react";
import DefaultLayout from "./DefaultLayout";

class Edit extends React.Component{
    render(){
        const { log } = this.props;
        return (
            <DefaultLayout>
                <h1>Edit</h1>
                <form action={`/logs/${log.id}/?_method=PUT`} method="POST">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" defaultValue={log.title} />
                    <br />
                    <label htmlFor="entry">Log: </label>
                    <textarea name="entry" id="entry" cols="30" rows="10" defaultValue={log.entry}></textarea>
                    <br />
                    <label htmlFor="shipIsBroken">Ship Is Broken</label>
                    <input type="checkbox" name="shipIsBroken" id="shipIsBroken" defaultChecked={log.shipIsBroken ? true : false} />
                    <br />
                    <input type="submit" value="Post Log" />
                </form>
                <a href="/logs">Back</a>
            </DefaultLayout>
        )
    }
}

export default Edit