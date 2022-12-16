import React from "react";
import DefaultLayout from "./DefaultLayout";

class New extends React.Component{
    render(){
        return (
            <DefaultLayout>
                <h1>New</h1>
                <form action="/logs" method="POST">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" />
                    <br />
                    <label htmlFor="entry">Log: </label>
                    <textarea name="entry" id="entry" cols="30" rows="10"></textarea>
                    <br />
                    <label htmlFor="shipIsBroken">Ship Is Broken</label>
                    <input type="checkbox" name="shipIsBroken" id="shipIsBroken" />
                    <br />
                    <input type="submit" value="Post Log" />
                </form>
                <a href="/logs">Back</a>
            </DefaultLayout>
        )
    }
}

export default New