import React, { Component } from 'react'
import * as actionCreators from '../../actions/index';
import { connect } from 'react-redux';
import './cards.css';
import { Button, Divider,Label ,List ,Modal,Header,Icon} from 'semantic-ui-react'
import  ModelCtr  from '../Model/ModelCtr'


class index extends Component {

    state = {

        liked: false,
        comment: '',
        comments: []
    }

    handleOnchange = (e) => {
        //this.state.commentST(e.target.value);
        this.setState({ comment: e.target.value })

    }

    hndl = () => {
       
        this.setState({ ...this.state, liked: true })
    }



    handleOnkeyPress = (event,timestamp) => {
         console.log(" key pressed"+timestamp);
        // this.setState({...this.state,comment:event.target.value})
        if (event.key === 'Enter') {
            console.log('enter key pressed');
            //get the comment and send 
            this.props.cmt(timestamp,this.state.comment);

            this.setState({ ...this.state, comment: '' });
        }
    }

    render() {

        const id = this.props.id;


        const { timestamp, Image, likes, comments } = this.props.instasP;

       // this.setState({ ...this.state,comments:comments})

        //const  Comments = this.state.comments;
        const noOfComments = comments.length;
        return (

            <div className="ui card">

            



                <div className="content">
                    <div className="right floated meta">{timestamp}</div>
                                         <img className="ui avatar image" src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg" /> Elliot
                     </div>
                <div className="image">
                   

                    <Modal trigger={ <img src={Image}   />} basic size='small'>
            <Header  content='Cinema...' />
            <Modal.Content>
           
            <img src={Image}   />
            </Modal.Content>
            <Modal.Actions>
               
              <Button color='green' inverted>
                 Esc to exit
              </Button>
            </Modal.Actions>
          </Modal>

                </div>
                <div className="content">
                    <span className="right floated">
                        <i className="heart  like icon" />
                        {likes}likes
     </span>
                    <i className="comment icon" />
                    {noOfComments} comments
     </div>
                <div className="extra content">
                    <div className="ui large transparent left icon input">
                        <a onClick={() => {
                            this.props.hit(timestamp);
                            this.hndl();

                        }}  >
                            <i className={"heart icon " + (this.state.liked ? 'liked' : 'ww')}></i></a>

                        <input type="text"
                            value={this.state.comment}
                            onChange={event => this.handleOnchange(event)}
                            onKeyPress={(event) => this.handleOnkeyPress(event,timestamp)}

                            placeholder="Comment[enter to send]" />

                    </div>

                     
                    <Divider />


                    {(noOfComments == 0) ?
                        (<Button inverted color='red' disabled >No comments</Button>) :
                        (
                        
                            <div>
                    <div className="event">
                    <div className="label">
                     
                    </div>
                    <div className="content">
                      <div className="summary">

                      
                      User Commented  
                   
                         
                        <span> <b>{comments[comments.length -1]} </b> </span>
                         
                      
                      </div>
                     
                    </div>
                  </div>
                  <ModelCtr comments = {comments} show={false}/>
                         
                            </div>
                        )
                    }


                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {

//     return (
//         {
//             liked:owm.false
//         }
//     )

//   }


const mapDispathToProps = (dispatch) => {

    return ({

        hit: (timestamp) => {
            console.log("clicked" + timestamp);


            dispatch(actionCreators.hitlike(timestamp))
        },
        cmt : (timestamp,cmtTxt) =>{
            console.log("sending " + timestamp+cmtTxt);
            dispatch(actionCreators.hitComment(timestamp,cmtTxt))

        },


    });
}


export default connect(null, mapDispathToProps)(index);

