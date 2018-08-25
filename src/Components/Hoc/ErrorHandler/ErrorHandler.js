import React, {Component} from "react";
import Modal from "../../UI/Modal/Modal";
import Aux from "../Auxx";

const ErrorHandler = (WrappedComponent, axios) =>{
    return class extends Component() {
        render() {
            return (
                <Aux>
                    <Modal>Something didn't work!</Modal>
                    <WrappedComponent {...props}/>
                </Aux>
            );
        }
    }
}

export default ErrorHandler;