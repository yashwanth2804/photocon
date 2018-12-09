import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Button, Icon, Label, Grid,Form,TextArea ,Modal,Image} from 'semantic-ui-react';
import * as actionCreators from '../../actions/index';

class index extends Component {


  state = {
    imageUrl: '',
    uploading: false,
    modalOpen:false
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  fileChangedHandler = (event) => {
    const file = event.target.files[0];
    this.setState({ ...this.state, imageUrl: URL.createObjectURL(file), uploading: true })


    console.log(URL.createObjectURL(file))

    console.log(this.state.imageUrl);
    //this.setState({ ...this.state , uploading:true})

  }
  uploadHandler = () => {
    //close the modal
    this.handleClose();
    console.log(this.state.imageUrl);
    this.props.imgUpload(this.state.imageUrl);
    this.setState({ imageUrl: '' })

  }

  render() {
    return (


      <Modal size='small' trigger={<Button inverted color='purple' onClick={this.handleOpen} >Share something</Button>}
      open={this.state.modalOpen}
        onClose={this.handleClose}
       
      >
      <Modal.Header>
      <div className="upload-btn-wrapper">
      <button className="btn">Upload a file</button>
      <input type="file" onChange={this.fileChangedHandler} />

       </div>
      
      </Modal.Header>

      <Modal.Content image>
        <Image wrapped size='medium' src={this.state.imageUrl} />
        <Modal.Description>
        <Form>
        <TextArea className="description" autoHeight placeholder='Try adding multiple lines' style={{ minHeight: 100 ,width:"150%"}} />
      </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
      {(this.state.uploading === false) ? (
        <Button content='Post !' disabled onClick= {this.uploadHandler} danger />
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
    //  byNow: (pId) => { dispatch(actionCreators.buyNow(pId)) },

    imgUpload: (url) => { dispatch(actionCreators.uploadImage(url)) }

  });
}
export default connect(null, mapDispathToProps)(index);
