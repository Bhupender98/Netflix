import React from 'react';
import Card from "./Card";
import Sdata from './Sdata';
function nSeries(item) {
    return(
        <Card 
            img = {item.img}
            tag={item.tag}
            titles={item.title}
         />
    )
}
const Cards = () =>{
    // console.log(Sdata[0].tag);
    return(
        <div className="cards">
            {/* <Card img = {Sdata[0].img} tag={Sdata[0].tag} titles={Sdata[0].title}/>
            <Card img = {Sdata[1].img} tag={Sdata[1].tag} titles={Sdata[0].title}/>
            <Card img = {Sdata[2].img} tag={Sdata[2].tag} titles={Sdata[0].title}/>
            <Card img = {Sdata[3].img} tag={Sdata[3].tag} titles={Sdata[0].title}/>
            <Card img = {Sdata[4].img} tag={Sdata[4].tag} titles={Sdata[0].title}/> */}
            {Sdata.map(nSeries)}   
           
        </div>
    )
}
export default Cards;