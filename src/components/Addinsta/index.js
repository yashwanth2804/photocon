import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Button,Form,TextArea ,Modal,Image} from 'semantic-ui-react';
import * as actionCreators from '../../actions/index';
import './Addinsta.css';

class index extends Component {


  state = {
    imageUrl: '',
    uploading: false,
    modalOpen: false,
    infoUpdate: ''
  }

  // changing state of modal
  handleOpen = () => this.setState({ modalOpen: true })

  // changing state of modal
  handleClose = () => this.setState({ modalOpen: false })

  // change state.infoUpdate value while typing 
  handleOnchange = (e) => {
    
    this.setState({ infoUpdate: e.target.value })

  }

  // sets the state.imageUrl with the selected image url  
  fileChangedHandler = (event) => {
    const file = event.target.files[0];
    this.setState({ ...this.state, imageUrl: URL.createObjectURL(file), uploading: true })
  }

  /// upload handler 
  uploadHandler = () => {
    //close the modal
    this.handleClose();
    this.props.imgUploadWithInfo(this.state.imageUrl, this.state.infoUpdate);
    this.setState({ imageUrl: '',infoUpdate:'' })

  }

  render() {
    return (
      <Modal size='small' dimmer={"blurring"} trigger={<Button inverted color='purple' onClick={this.handleOpen} >Share something</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>
          <div className="upload-btn-wrapper">
            <button className="btn">Upload Image</button>
            <input type="file" onChange={this.fileChangedHandler} />

          </div>

        </Modal.Header>

        <Modal.Content image>
          <Image wrapped size='medium' src={this.state.imageUrl} />
          <Modal.Description  className="descriptionTxtArea">
            
           <Form>
           <TextArea onChange={event => this.handleOnchange(event)}
             className="" autoHeight placeholder='Add some info here'
             style={{ minWidth: "10rem", width: "100%" }} />

         </Form>
           
           
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {(this.state.uploading === false) ? (
            <Button content='Post !' disabled onClick={this.uploadHandler} danger />
          ) : (
              <Button content='Post !' onClick={this.uploadHandler} primary />
            )}

        </Modal.Actions>

      </Modal>
 
    )
  }
}


const mapDispathToProps = (dispatch) => {
  return ({
     // calling the action `uploadImageAndInfo` to dispatch an action.
    imgUploadWithInfo: (url,info) => { dispatch(actionCreators.uploadImageAndInfo(url,info)) }

  });
}
export default connect(null, mapDispathToProps)(index);
