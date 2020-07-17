import React ,{ useEffect } from 'react';
import Person from '../person';

const persons = (props) => {

    

    all_persons = props.persons.map( (per , index) => {
        return (
            <Person
            name={per.name}
            lastname={per.lastname} 
            />
        )
    })

    return (
        {
            all_persons   
        }
    )
}

export default persons;

