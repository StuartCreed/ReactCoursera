import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

   render() {

      function renderComments(commentArray) {
         return (
            commentArray.map((dishComments) => {
               return (
                  /*NEED TO USE BOOTSTRAP STYLES*/
                  <div>
                        <li>{dishComments.comment}</li>
                        <li>-- {dishComments.author}, {dishComments.date}</li>
                  </div>
               );
            })
         )
      }

      return (
         <div className="row col-12">
            <div className="col-12 col-md-5 m-1">
               <Card>
                   <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                   <CardBody>
                     <CardTitle>{this.props.dish.name}</CardTitle>
                     <CardText>{this.props.dish.description}</CardText>
                   </CardBody>
               </Card>
             </div>
             <div className="col-12 col-md-5 m-1">
                  <h4>Comments</h4>
                  <ul className="list-unstyled">
                     {renderComments(this.props.dish.comments)}
                  </ul>
             </div>
         </div>
      );
   }
}

export default DishDetail;
