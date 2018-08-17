import React, {Component} from 'react';
import Aux from "../../Hoc/Auxx";
import BurgerDisplay from "../BurgerDisplay/BurgerDisplay.js"; 
import "./BurgerControls.css";

class BurgerControls extends Component{
    state = {
        ingredients: [
          {name: 'Salad', count: 2, price: .20},
          {name: 'Bacon', count: 0, price: .50},
          {name: 'Cheese', count: 0, price: .1},
          {name: 'Meat', count: 0, price: .50}
        ],
        price: 0 
    }     
    less = (event) =>  {
        var id = event.target.id;
        
        var ingredient = this.state.ingredients.find(x => x.name === id); 
        if(ingredient.count != 0){
            ingredient.count = ingredient.count -1;
        }
        var tempArray = this.state.ingredients;
        var index = tempArray.findIndex(x => x.name === id);
        tempArray.splice(index, 1, ingredient);

        this.setState({
            ingredients: tempArray
        });
        console.log(id);
        // console.log(ingredient);
        // console.log(index);
        // console.log(tempArray) ;
    }
    more = (event, ingredient) =>  { 
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
            return acc + val;
        }); 
    }
    average = () => {
        var arr = [1.9, 12.8, 80];
        return arr.reduce((acc, val, i, arr) => {
            var average = 0;
            var total = acc + val;
            if(i == (arr.length - 1)){
                average = total/arr.length;
            }
            return average;
        }, 0);
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
    render(){
        return (
            <Aux>
                <BurgerDisplay ingredients={this.state.ingredients}/>
                <div className ="BuildControls">
                    <p>{this.average()}</p> 
                    <p>Total Price: {this.calcPrice()}</p>
                    {this.displayControls(this.state.ingredients)}
                </div>
            </Aux> 
        );
    }
}

export default BurgerControls;