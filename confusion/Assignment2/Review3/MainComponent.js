import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes.js';
import { COMMENTS } from '../shared/comments.js';
import { LEADERS } from '../shared/leaders.js';
import { PROMOTIONS } from '../shared/promotions.js';
import { Route, Redirect, Switch } from 'react-router-dom';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        }
    };

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={ this.state.dishes.find(dish => dish.featured) }
                    leader = { this.state.leaders.find(leader => leader.featured) }
                    promotion = { this.state.promotions.find(promo => promo.featured) }
                />
            )
        }
        const MenuPage = () => <Menu dishes={ this.state.dishes } />;
        const DishdetailPage = ({ match }) => {
            return (
                <DishDetail
                    selectedDish={ this.state.dishes.find(dish => dish.id === parseInt(match.params.dishId, 10)) }
                    comments={ this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10)) }
                />
            )
        }
        const ContactPage = () => <Contact />
        const AboutPage = () => {
            return (
                <About
                    leaders={ this.state.leaders }
                />
            )
        }  

        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/home" component={ HomePage } />
                    <Route exact path="/menu" component={ MenuPage } />
                    <Route path="/menu/:dishId" component={ DishdetailPage } />
                    <Route path="/contact" component={ ContactPage } />
                    <Route path="/about" component={ AboutPage } />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
};
