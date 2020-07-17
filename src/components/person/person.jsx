import React from "react";
import classes from "./person.module.css";
import { Route, Link } from 'react-router-dom';

const Person = (props) => {
    // console.log(props)
    // console.log(props.match.url)
    return (
        <>
            <Link to={props.match.url + '/go' }>
                <div>
                    <div className={classes.main} >
                        <div onClick={props.click} >name : {props.name} </div>
                        <div>last name : {props.lastname} </div><br />
                    </div>
                </div>
            </Link>
            <Route path={props.match.url + '/go'} exact render={() => <h1>Hiiiiiii</h1>} />
        </>
    )

}


export default Person;
