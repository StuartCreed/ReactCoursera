import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';

class Main extends Component {

   constructor(props) {
     super(props);
        this.state = {
          dishes: DISHES,
          selectedDish: null
     };
   }

   onDishSelect(dishId) {
       this.setState({ selectedDish: dishId});
       console.log(dishId);
   }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div>
           <Menu dishes={this.state.dishes} onClick={(hello) => this.onDishSelect(hello)}/>
           <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
         </div>
      </div>
    );
  }
}

export default Main;
