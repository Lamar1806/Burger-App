import React, {Components} from "react";
//JavaScript Higher Order Functions & Arrays
//forEach
//filter
//map
//sort
//reduce
class PlayGround extends Components{
    state = {
        companies = [
            {name:"Company 1", category: "Finance", start: 1981, end: 2003},
            {name:"Company 2", category: "Tech", start: 2003, end: 2005},
            {name:"Company 3", category: "Medical", start: 1970, end: 2050},
            {name:"Company 4", category: "Auto", start: 2000, end: 2010},
            {name:"Company 5", category: "Fighting", start: 1981, end: 2100},
        ],
        ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32],
        string1 = "Hi",
        string2 = "iH",
    }

    canDrink = () => {
        
    }
    
    render(){
        return(
            <div>

            </div>
        );
    }
}

export default PlayGround;