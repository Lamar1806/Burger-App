import React, {Component} from 'react';
import Aux from "../../Hoc/Aux.js";
import BurgerDisplay from "../BurgerDisplay/BurgerDisplay.js"; 
import "./BurgerControls.css";

class BurgerControls extends Component{
    state = {
        ingredients: [
          {name: 'Salad', count: 2},
          {name: 'Bacon', count: 0},
          {name: 'Cheese', count: 0},
          {name: 'Meat', count: 0}
        ]
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
                    {this.displayControls(this.state.ingredients)}
                </div>
            </Aux> 
        );
    }
}

export default BurgerControls;