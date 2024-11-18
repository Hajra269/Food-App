import React from 'react'
import { Navbar,NavbarBrand} from 'reactstrap';
import { DISHES } from './shared/Dishes';
import Menu from './MenuComponent';
import DishDetail from "./DishDetail";    
import '../App.css';

class MainComponent extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    dishes:DISHES,
    selectedDish: null,
  }
    console.log(this.state.dishes,"dishessss");
  }

  onDishselect(dishId){
    this.setState({ selectedDish: dishId })
    console.log(this.state.selectedDish,"helllo");
}
  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href="/">Denim Fabric</NavbarBrand>
          </div>
        </Navbar>
        <Menu disheList={this.state.dishes} 
         onClick={(dishId)=>{this.onDishselect(dishId)}}
        />
        <DishDetail myDish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default MainComponent;
