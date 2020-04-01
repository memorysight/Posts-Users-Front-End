// import React, { Component } from 'react';
// import Navbar from '../Navbar/Navbar';
// import axios from 'axios';
// import {withRouter} from 'react-router-dom';
// import './Kitchens.css';

//  class PostDetails extends Component {
//     state={
//         kitchens:[],
//         selectedItems:[]
//      }

//      handleSelectItem =(item)=>()=>{
       
//         this.setState({
//             selectedItems : [...this.state.selectedItems, item]
//         })

//      }

//     componentDidMount(){
       
//          axios.get('http://localhost:8080/app-api/items')
//         .then(({data})=>{
     
        
//         const foundKitchens = [];
//         data.forEach((item)=>{
//             // console.log(item.kitchens)
//             item.kitchens.forEach(kitchen=>{
            
//                 if(kitchen.kitchenId===parseInt(this.props.match.params.id)){
                    
//                     foundKitchens.push(item)
//                 }
               
               
//             })

//         })


//         this.setState({
//             kitchens: foundKitchens
//         })
//         })
//     }
//     render() {
//         console.log(this.state.selectedItems)
        
//         return (
//             <div >
//                 <Navbar />
//                 <h3 >{this.state.kitchens.name}</h3>
//                 {this.state.kitchens.map(kitchen=>{
//                     return <p className="kitchen-details heading">{kitchen.name}: {kitchen.price}<button className = "button4" onClick={this.handleSelectItem({name: kitchen.name, price: kitchen.price})}>Select Item</button></p>
//                 })}

//                 <div className="heading">
//                     <h2 >Shopping Cart</h2>
//                    <hr></hr>
//                     {this.state.selectedItems.map((item, i)=>{
//                         console.log("item",item);
//                         return  <p><span>{item.name}</span> :
//                         <span>{item.price}</span></p>
//                     })}
//                 </div>

//             </div>
//         )
//     }
// }
// export default withRouter(KitchenDetails);
