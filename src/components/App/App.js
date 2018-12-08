import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Container , Button , Icon, Label ,Grid } from 'semantic-ui-react';
import Navbarcomponent from '../Navbarcomponent/index';
import GridExampleDividedNumber from '../Gridss/Gridss';
import * as actionCreators from '../../actions/index';
class App extends Component {
  

state ={
  imageUrl:'',
  uploading:false
}

  async componentDidMount() {
    
    const uri = `./insta.json`;
    // this.props.dispatch(actionCreators.phoneFetchAPI(uri));
    console.log("component dispatch")
    this.props.onLoad(uri);
  }
  fileChangedHandler = (event) => {
    const file = event.target.files[0];
    this.setState({...this.state,imageUrl:URL.createObjectURL(file),uploading:true})

    
    console.log(URL.createObjectURL(file))
   
    console.log(this.state.imageUrl);
    //this.setState({ ...this.state , uploading:true})

  }
  uploadHandler = () =>{
    console.log(this.state.imageUrl);
    this.props.imgUpload(this.state.imageUrl);

  }
  render() {
    return (
      <div className="App">
      <Navbarcomponent/>
      <Container  >
      
     <div className="ff">
     <div className="fname">
     <div className="upload-btn-wrapper">
     <button className="btn">Upload a file</button>
     <input type="file" onChange={this.fileChangedHandler}/>
    
   </div>
     </div>

     <div className="fname">
     {console.log(this.state.uploading)}
     { ( this.state.uploading === false)  ? (
      <Button content='Post !' disabled onClick={this.uploadHandler} primary />
     ) : (
      <Button content='Post !' onClick={this.uploadHandler} primary />
     ) }
     
     
     </div>
     
     </div>
    
     
     

    <div className="f"> <GridExampleDividedNumber/> </div>
        
        </Container>
      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => {
  return ({
    //  byNow: (pId) => { dispatch(actionCreators.buyNow(pId)) },
    onLoad: (uri) => { dispatch(actionCreators.tweetsFetchAPI(uri)) },
    imgUpload : (url) => { dispatch(actionCreators.uploadImage(url))  }

  });
}
export default connect(null, mapDispathToProps)(App);
