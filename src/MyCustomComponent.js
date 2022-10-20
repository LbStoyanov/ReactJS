//First import modules/dependacies form React
import React from "react";

//Create the component logic in a function
const MyCustomComponent = () =>{

    
    return (
        <div className="MyCustomComponent">
        <p>Javascript frameworks</p>
        <hr/>

        <ul>
            <li>
                ReactJS
            </li>

            <li>
                AngularJS
            </li>

            <li>
                VueJS
            </li>
        </ul>
    </div>
    
    )
    
}

//Export the component in order to be reusable from the another components in the application

export default MyCustomComponent;