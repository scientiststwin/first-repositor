import React from 'react'


const Validation = (props) => {

    let showMessage = <p>this text is too short !</p>

    if(props.txt.length > 10 )
        showMessage = <p>this text is very long</p>

    return (
        <div>
           {showMessage}
        </div>
    )

}

export default Validation;
