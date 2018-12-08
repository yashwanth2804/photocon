import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import Comments from '../Comment/Comments'
export default class ModelCtr extends Component {
  state = { modalOpen: false}

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
        <Modal     dimmer={"inverted"} trigger={<Button  disabled={this.props.show} inverted color='blue' size='mini'>Show Comments</Button>}>
        <Modal.Header>Comments</Modal.Header>
        <Modal.Content image scrolling>
       { (this.props.comments !== null) ? (<Comments  comments ={this.props.comments}  />) : (<div>"no comment"</div>) } 
           
        </Modal.Content>
      
      </Modal>
    )
  }
}
