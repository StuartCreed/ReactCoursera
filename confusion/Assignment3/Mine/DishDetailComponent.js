import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader,
   ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
   constructor (props) {
      super(props);
      this.state = {
        isModalOpen: false
      };

      this.toggleModal = this.toggleModal.bind(this);
   }

   toggleModal() {
    this.setState({
       isModalOpen: !this.state.isModalOpen
    });
   }

   handleSubmit(values) {
       console.log('Current State is: ' + JSON.stringify(values));
       alert('Current State is: ' + JSON.stringify(values));
       // event.preventDefault();
   }

   render () {
      return (
         <React.Fragment>
         <Button outline onClick={this.toggleModal} type="submit"><span className="fa fa-pencil"></span> Submit Comment</Button>

         <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
             <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
             <ModalBody>
               <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                  <FormGroup>
                     <Label htmlFor="rating">Rating</Label>
                     <Control.select model=".rating" name="rating"
                        className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                     </Control.select>
                  </FormGroup>
                  <FormGroup>
                     <Label htmlFor="author">Your Name</Label>
                     <Control.text model=".author" id="author" name="author"
                        placeholder="Your Name"
                        className="form-control"
                        validators={{
                           required, minLength: minLength(3), maxLength: maxLength(15)
                        }}
                     />
                     <Errors
                        className="text-danger"
                        model=".author"
                        show="touched"
                        messages={{
                             required: 'Required ',
                             minLength: 'Must be greater than 3 characters',
                             maxLength: 'Must be 15 characters or less'
                        }}
                     />
                  </FormGroup>
                  <FormGroup>
                     <Label htmlFor="comment">Comment</Label>
                     <Control.textarea model=".comment" id="comment" name="comment"
                         rows="6"
                         className="form-control" />
                  </FormGroup>
                  <Button type="submit" value="submit" color="primary">Submit</Button>
               </LocalForm>
             </ModalBody>
         </Modal>
         </React.Fragment>
      )
   }
}

function RenderComments({comments}){

        if(comments==null){
            return(
               <div>empty</div>
            )
        }

       const cmt=comments.map(comment => {
         return(
             <li key={comment.id}>
                 <p>{comment.comment}</p>
                 <p>- {comment.author},
                 &nbsp; {new Intl.DateTimeFormat('en-US',{
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit'
                 }).format(new Date(comment.date))}
                 </p>
             </li>
         )
     })
     return(
         <div className='col-12 col-md-5 m-1'>
             <h4>Comments</h4>
             <ul className='list-unstyled'>
                 {cmt}
             </ul>
             <CommentForm />
         </div>
     )
    }

function RenderDish({dish}){
        if(dish!=null){
            return(
             <div className='col-12 col-md-5 m-1'>
             <Card >
              <CardImg width="100%" src={dish.image} alt={dish.name} />
               <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
            </div>
            )
       }
         else{
             return(<div></div>)
        }
    }

const DishDetail = (props) => {

        const dish=props.dish
        const commentsLog=props.comments;
        console.log("dishis")
        console.log(dish);
        console.log("commentsLog")
        console.log(commentsLog);

        if(dish===null){
            return (<div>empty</div>)
        }

        return (
           <div className="container">
                <div className="row">
                   <Breadcrumb>
                        <BreadcrumbItem>
                           <Link to='/menu'>
                               Menu
                           </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                      <div className="col-12">
                         <h3>{props.dish.name}</h3>
                         <hr />
                      </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
           </div>
        )

    }

export default DishDetail;
