import React, { Component } from 'react';
import './FourColGrid.css';

const FourColGrid = (props) => {
    

   
console.log("these are the kitchens props", props)
    const renderElements = ()=>{
        const gridElements = props.users.map( (element, i)=>{
            console.log("element", element);
            return (
                <div key={i} className = "menu-grid-element" >
                {element}
                </div>
            )
        })
        return gridElements;
    
    }
    
       
        console.log("kitchen 4 col grid props", props);
        return (
            <div className = "menu-grid-content">
                {renderElements()}
               
                
            </div>
        )
    }
export default FourColGrid;
