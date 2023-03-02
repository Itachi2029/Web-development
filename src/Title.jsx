import React from "react";
import Buttons from "./Buttons";

export function Title(props){
    return (<>
   
          
               
               <div className="alert alert-dark" role="alert">
                    <h5 style={{color:'black'}}>{props.value} </h5>
              </div>
               
            </>);
}