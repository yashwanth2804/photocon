import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Container ,Divider } from 'semantic-ui-react';
import Navbarcomponent from '../Navbarcomponent/index';
import Addinsta from '../Addinsta/index';
import Grids from '../Grids/Grids';
import * as actionCreators from '../../actions/index';
class App extends Component {
  


  async componentDidMount() {
    
    // loading the api from local json file , located at public/insta.json

    const uri = `./insta.json`;
    
    // loading the json to populate state
    this.props.onLoad(uri);
  }
  
  render() {
    return (
      <div className="App">
      {/* Navbar component */}
      <Navbarcomponent/>

      {/* container element */}
      <Container  >
            {/*  Addinsta componet has upload photo ,add info functionalities */}
            <Addinsta/>
            <Divider/>

            {/** Grids component used to iterate over objects available (cards) */}
            <Grids/>  
      </Container>

      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => {
  return ({
    // calling the action `instaFetchAPI` to dispatch an action.
    onLoad: (uri) => { dispatch(actionCreators.instaFetchAPI(uri)) }
   

  });
}
export default connect(null, mapDispathToProps)(App);
