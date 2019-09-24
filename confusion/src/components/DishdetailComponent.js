import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

   render() {

      return (
         <div>
            <Card>
                <CardImg top src={this.props.dishSelection.image} alt={this.props.dishSelection.name} />
                <CardBody>
                  <CardTitle>{this.props.dishSelection.name}</CardTitle>
                  <CardText></CardText>
                </CardBody>
                {this.props.dishSelection.comments[0].comment}
            </Card>
         </div>
      );
   }
}

export default DishDetail;
