import React, {Component} from 'react';
import './BurgerDisplay.css';

class BurgerDisplay extends Component{
    ingredients = () => {
        var list = this.props.ingredients.map((x) => {
            var templist = [];
            for(var i = 0; i < x.count; i++){               
                let key = Math.floor((Math.random() * 100) + 1);
                templist[i] = <li key={key} className={x.name}></li>
            }                         
            console.log(templist); 
            return templist;
        });  

        if((list[0].length === 0) && (list[1].length === 0) && (list[2].length === 0) && (list[3].length === 0)){
            let key = Math.floor((Math.random() * 100) + 1);
            list = <p key={key}>Please start adding Ingredients</p> 
        }   

        return list; 
    } 
    render(){ 
        return (
            <div className="BurgerSection">
                <div className="burgerSection"></div>
                <div className="BreadTop"></div>
                    
                {this.ingredients()}  
                
                <div className="BreadBottom"></div>
            </div>           
       );
    };
}

export default BurgerDisplay;