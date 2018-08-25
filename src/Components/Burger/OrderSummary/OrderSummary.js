import React from "react"
import Aux from "../../Hoc/Auxx.js";

const OrderSummary = (props) => {
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
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <br/>
            {display(props.ingredients)}
            <br/><br/>
            Total: {props.price}
            <br/>
            <a onClick={props.cancel} href="/">Cancel</a> <a href="/" onClick={props.continue}>Continue</a>
        </Aux>
    );
}

export default OrderSummary;

