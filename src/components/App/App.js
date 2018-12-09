import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Container , Button , Icon, Label ,Grid } from 'semantic-ui-react';
import Navbarcomponent from '../Navbarcomponent/index';
import Addinsta from '../Addinsta/index';
import GridExampleDividedNumber from '../Gridss/Gridss';
import * as actionCreators from '../../actions/index';
class App extends Component {
  


  async componentDidMount() {
    
    const uri = `./insta.json`;
    // this.props.dispatch(actionCreators.phoneFetchAPI(uri));
    console.log("component dispatch")
    this.props.onLoad(uri);
  }
  
  render() {
    return (
      <div className="App">
      <Navbarcomponent/>
      <Container  >
      <Addinsta/>
      

     <GridExampleDividedNumber/>  
        </Container>
      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => {
  return ({
    //  byNow: (pId) => { dispatch(actionCreators.buyNow(pId)) },
    onLoad: (uri) => { dispatch(actionCreators.tweetsFetchAPI(uri)) }
   

  });
}
export default connect(null, mapDispathToProps)(App);
