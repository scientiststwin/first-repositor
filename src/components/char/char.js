import React from 'react';


const Char = (props)=>{

    let styles = {
        display: 'inline-block',
        padding : '16px',
        margin : '16px',
        textAlign : 'center',
        border : '1px solid black'
    }
    console.log("[char.js] ")
    console.log( props)
    return(
        <p style={styles} onClick={props.which}>
            {props.ch}
        </p>
    )

}


export default Char;

