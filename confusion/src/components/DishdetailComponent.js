import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class CommentForm extends Component {
   constructor (props) {
      super(props);
   }

   render () {
      return (
         <div></div>
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
             <Button outline onClick={CommentForm} type="submit"><span className="fa fa-pencil"></span> Submit Comment</Button>
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
