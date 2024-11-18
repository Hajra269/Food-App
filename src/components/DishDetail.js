import React, { Component } from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle} from "reactstrap";

class DishDetail extends Component {
    constructor(props){
    super(props);
    // this.state = {
    //     specificdish:this.props.renderDish
    // }
    }
    oncheck(){
       console.log(this.props.myDish,"renderDish")
    }
    onrenderDish(dish){

      if(dish != null){
        return (
          <>
        <div className='container'>
          <div className='col-12 col-md-5 m-1'>
              <Card>
                  <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
                  <CardBody>
                      <CardTitle heading>{dish.name}</CardTitle>
                      <CardText description>{dish.description}</CardText>
                  </CardBody>
              </Card>
            </div>
          </div>
           <div className='container'>
              <div className='col-12 col-md-5 m-1'>
              <h1>{dish.Comment}</h1>
               <p>{dish.name}</p>

               <p>{dish.commit1}</p> 
               <p>{dish.author1}</p> 

               <p>{dish.commit2}</p> 
               <p>{dish.author2}</p> 

               <p>{dish.commit3}</p> 
               <p>{dish.author3}</p> 

               <p>{dish.commit4}</p> 
               <p>{dish.author4}</p> 

               <p>{dish.commit5}</p> 
               <p>{dish.author5}</p> 
              </div>
             </div>
           
          </>
        );
      }
      else{
        return 
        (
          <div>nothing</div>
        );
      }
  }

    
  render() {
    const { myDish } = this.props;
    console.log(myDish,"renderrrr");
    return (
    
          <div className="row">
              {this.onrenderDish(myDish)}
          </div>
    )
  }
}
export default DishDetail;