import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react'

export default class Comments extends Component {




    render() {



        const cmts = this.props.comments.map( (s,index) => {
            return (
                <Comment key={index}>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'> User </Comment.Author>
                        
                        <Comment.Text>{s}</Comment.Text>

                    </Comment.Content>
                </Comment>
            )


        })

        return (
            <div>
                <Comment.Group>

                    {cmts}
                    
                </Comment.Group>
                
            </div>
        )
    }
}
