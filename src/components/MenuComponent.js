import React,{Component} from "react";
import {Card,CardImgOverlay,CardBody,CardImg,CardText,CardTitle} from "reactstrap";
class Menu extends Component{
    constructor(props){

        console.log("Constructor Life cyle for menu compement");
        super(props);
    
    }
    componentDidMount(){
        console.log("componentDidMount Life cyle for menu compement");
    }
render(){
    console.log("render Life cyle for menu compement");

   const menu = this.props.disheList.map((dish) => {  
    return(
     <div key={dish.id} className="col-12 col-md-5 m-1">
        
        <Card onClick={()=>this.props.onClick(dish.id)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay body className="ml-5">
               <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
     </div>
     
    );   
   });

    return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>

            </div>           
    );
 }
}
export default Menu;