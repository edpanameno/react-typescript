import React from 'react';
import messageHoc from './Hoc';

// Notice how we are not really exporting this out ... the properties
// to the Messge component are just passed down from the parent comopent
// (in our case this is the App.tsx component).
/*interface IUserMessage  {
    message: string;
    name: string;
    age?: number;
    validation?: (first: string, second: string) => boolean;
}*/


/*const Message = (props: IUserMessage ): any => {
    return(
        <p>{props.name}, {props.message}</p>
    );
}*/

const example = (props: any): any => <p>{props.name}, {props.message}</p>
const Message = messageHoc(example);

export default Message;