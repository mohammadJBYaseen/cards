import React from "react";

function Joke(props) {
    return(
        <div>
            <h3 style={{display : !props.question ?"none":"block"}} type="text" >{props.question}</h3>
            <h2 type="text" >{props.punchLine}</h2>
        </div>
    );
}

export default Joke;