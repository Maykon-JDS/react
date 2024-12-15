// import React, {Fragment} from "react";

export default function bomDia(props){

    let component = [
        <h1 key='h1'>Bom dia {props.nome}!</h1>, 
        <h2 key='h2'>Até breve!</h2>
    ]

    return component;

}

// export default function bomDia(props){

//     let component = 
//     <Fragment>
//         <h1>Bom dia {props.nome}!</h1> 
//         <h2>Até breve!</h2>
//     </Fragment>

//     return component;

// }