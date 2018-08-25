import React, {Component} from 'react';
import Aux from "../../Hoc/Auxx";
import BurgerDisplay from "../BurgerDisplay/BurgerDisplay.js"; 
import Modal from "../../UI/Modal/Modal.js";
import "./BurgerControls.css";

import axios from "../../../axios-order.js"
 
class BurgerControls extends Component{
    state = {
        ingredients: [
          {name: 'Salad', count: 0, price: 1.20},
          {name: 'Bacon', count: 0, price: .50},
          {name: 'Cheese', count: 0, price: .75},
          {name: 'Meat', count: 0, price: .50}, 
        ],
        price: 0,
        purchasing: false,
        loading: false,
        error: true,
    }     
    less = (event) =>  {
        var id = event.target.id;
        
        var ingredient = this.state.ingredients.find(x => x.name === id); 
        if(ingredient.count !== 0){
            ingredient.count = ingredient.count -1;
        }
        var tempArray = this.state.ingredients;
        var index = tempArray.findIndex(x => x.name === id);
        tempArray.splice(index, 1, ingredient);

        this.setState({
            ingredients: tempArray
        });
    }
    more = (event) =>  { 
        var id = event.target.id;
        
        var ingredient = this.state.ingredients.find(x => x.name === id); 
        if(ingredient.count <= 2){
            ingredient.count = ingredient.count + 1;
        }
        var tempArray = this.state.ingredients;
        var index = tempArray.findIndex(x => x.name === id);
        tempArray.splice(index, 1, ingredient);

        this.setState({
            ingredients: tempArray
        }); 
    }
    calcPrice = () => {
        var prices = this.state.ingredients.map((x) => x.count * x.price);
        return prices.reduce((acc, val) => {
            acc = acc + val;
            return parseFloat(acc); 
        },0); 
    }
    
    displayControls = (ingredients) => {        
        var controls = ingredients.map((x) => {
            let key = Math.floor((Math.random() * 10000) + 1);
            return (
                <div  key={key} className="BuildControl">                    
                    <label  className="Label">{x.name}</label>
                    <button onClick={this.less} id={x.name} className="Less" value="x">Less</button>
                    <button onClick={this.more} id={x.name}className="More">More</button>                    
                </div>
            );
        });
        return controls;
    }
    purchaseCancelHandler = (event) => {
        event.preventDefault();    
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Dalmar Brooks',
                address:{
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: '2 day shipping'
        }

        axios.post('/orders.json', order).then((response) => {
            this.setState({loading: false});
            this.setState({purchasing: false});
            console.log(response);
        }).catch((e) => {
            console.log('Something went wrong :( \n' + e);
        });        
    }

    render(){
        return (
            <Aux>
                <Modal show={this.state.purchasing} price={this.calcPrice()} ingredients={this.state.ingredients}
                         modalClosed={this.purchaseCancelHandler} cancel={(event) => this.purchaseCancelHandler(event)}
                         continue={(event) => this.purchaseContinueHandler(event)} loading={this.state.loading}
                         error={this.state.error}/>

                <BurgerDisplay ingredients={this.state.ingredients}/>
                <div className ="BuildControls">
                    <p>Total Price: {this.calcPrice()}</p>
                    {this.displayControls(this.state.ingredients)}
                    <button className="OrderButton" onClick={() => this.setState({purchasing: true})}>Order Now</button>
                </div>
            </Aux> 
        );
    }
}

export default BurgerControls;