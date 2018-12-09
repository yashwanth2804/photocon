import React, { Component } from 'react'
import  Cards  from '../Cards/index';
import { connect } from 'react-redux';
import './Grid.css';


class Grids extends Component {
  render() {
    
    /// Iterating over every insta object in the redux stores `state`   
    const cards = this.props.instas.map((data, idx) => {

      return (
        // passing every object to  component `Cards` , to generate basic template  
        <Cards instasP={data}  key={idx} />
      )

    });

    return (

      <div className="flexClass" >
        {cards}

      </div>
    )
  }
}

const mapStateToProps = (state) => {

    // mapping the redux store state to component state, so it will will accessed without employing component props

    return (
        {
            instas: state.instaR.instas
        }
    )
  
  }


export default connect(mapStateToProps, null)(Grids);

