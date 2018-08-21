import React, {Component} from "react";
//JavaScript Higher Order Functions & Arrays
//forEach
//filter
//map
//sort
//reduce
class PlayGround extends Component{
    state = {
        companies: [
            {name:"Company 1", category: "Finance", start: 1981, end: 2003},
            {name:"Company 2", category: "Tech", start: 2003, end: 2005},
            {name:"Company 3", category: "Medical", start: 1970, end: 2050},
            {name:"Company 4", category: "Auto", start: 2000, end: 2010},
            {name:"Company 5", category: "Fighting", start: 1981, end: 2100},
        ],
        ages: [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32],
        string1: "Dal",
        string2: "mar",
    } 
     
    arrayToObjnect = () => {
        var obj;
        var array = [['key', 12], ['name', 'Dalmar'],['age', 24]];
        obj = array.reduce((obj, [key, value], index, array)=> {
            obj[key]= value;
            return obj;    
        },{});
        console.log(obj);
    }

    filterTest = () => {
        var log;
        log = this.state.companies.filter((x) => x.start > 2000);
        console.log(log);
    }
    sortAges = () => {
        var sorted;
        sorted = this.state.ages.sort((a, b) => a-b);
        console.log(sorted);
    }

    strTest = () => {
        var str1 = this.state.string1;
        var str2 = this.state.string2;
        var combine = str1 + str2;
        console.log(combine.split('')
        .reverse()
        .reduce((str, a) => str+a),'');
    }
    objToArray = () => {
        var obj = this.state.companies[0];
        var arr = [];
        // arr = Object.values(obj) ;
        // arr = Object.keys(obj);
        // arr = Object.entries(obj);
        // arr = Object.keys(obj).Values;
        // arr = Array.from(obj);
        // arr = obj.map((x) => obj[x]);
        arr = Object.entries(obj).reduce((acc, [key, value], index, array) => {
            acc.push(key);
            acc.push(value);
            return acc;
        },[]);
        // arr = Object.entries(obj).map(x => x[0] + ' ' + x[1]);
        console.log(arr); 
    }
    average = () => {
        var arr = [1.9, 12.8, 80];
        return arr.reduce((acc, val, i, arr) => {
            var average = 0;
            var total = acc + val;
            if(i === (arr.length - 1)){
                average = total/arr.length;
            }
            return average;
        }, 0);
    }

    app = () => {
        // console.log('Can Drink');
        // this.strTest();
        this.objToArray();   
        // this.filterTest(); 
        // this.sortAges();    
        // this.arrayToObjnect();
    }
    
    render(){
        return(
            <div>                
                {this.app()}
            </div>
        );
    }
}

export default PlayGround;