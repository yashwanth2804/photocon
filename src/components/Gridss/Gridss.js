import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import  Cardss  from '../Cardss/index';
import { connect } from 'react-redux';
import './Grid.css';


class Gridss extends Component {
  render() {
   ///llop through all data and pass to component t show 
 
   const y = this.props.instas.map( (data, idx) => {
    
    return(
        <Cardss instasP={data} id={idx} key={idx} />  
    )
  
  });

 
    return (
      
         <div className="flexClass" >
          {y} 
          
         </div>
    )
  }
}

const mapStateToProps = (state) => {

    return (
        {
            instas: state.instaR.instas
        }
    )
  
  }


export default connect(mapStateToProps, null)(Gridss);

