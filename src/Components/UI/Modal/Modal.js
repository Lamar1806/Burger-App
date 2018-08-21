import React from "react";
import "./Modal.css"; 
import BackDrop from "../Backdrop/Backdrop.js"
import Aux from "../../Hoc/Auxx.js"

var Modal = (props) => {
    var display = (ingredients) => {
        return( 
            <ul>
             {ingredients.map((x) => {
                 let key = Math.floor((Math.random() * 10000) + 1);
                 return <li className="Ingredientsli" key={key}><span className="Ingredientsspan">{x.name}</span> {x.count}</li>
              })
             } 
         </ul>); 
    }
    var style = {transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'}
    var Backdropstyle = {display: props.show ? 'block' : 'none'}
    return (
        <Aux>
            <BackDrop display={Backdropstyle}/> 
            <div style={style} className="Modal">                       
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <br/>
                {display(props.ingredients)}
                <br/><br/>
                Total: {props.price}
                <br/>
                <a onClick={props.clicked} href="/">Cancel</a> <a href="/" onClick={props.clicked}>Continue</a>
            </div>   
        </Aux>    
    );
}

export default Modal;
