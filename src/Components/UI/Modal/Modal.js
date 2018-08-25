import React from "react";
import "./Modal.css"; 
import BackDrop from "../Backdrop/Backdrop.js"
import OrderSummary from "../../Burger/OrderSummary/OrderSummary.js";
import Spinner from "../Spinner/Spinner"
import Aux from "../../Hoc/Auxx.js"

var Modal = (props) => {    
    var style = {transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'}
    var Backdropstyle = {display: props.show ? 'block' : 'none'}

    var display = (props) => {
        if(props.show && (props.loading === false) && (props.error = false)){
            return (
                <OrderSummary 
                    ingredients={props.ingredients}
                    price={props.price} 
                    cancel={props.cancel}
                    continue={props.continue}/>
            );
        }
        if(props.show && (props.loading === true) && (props.error = false)){
            return <Spinner /> 
        }
        if(props.error){
            return (
                <p>Something Went Wrong</p>
            );
        }
    } 
    
    return (
        <Aux>
            <BackDrop display={Backdropstyle}/> 
            <div style={style} className="Modal">   
                {display(props)}
            </div>   
        </Aux>    
    );
}

export default Modal;
