import React, {Component} from 'react';

class CommentsList extends Component {
    state = {
        isExpanded: false
    };

    render(){
        const buttonText = this.state.isExpanded ? 'Hide comments' : 'Show comments';

        return (
            <div>
                { this.getComments() }
                <a href="" onClick={ this.expandCommentsHandler }>{ buttonText }</a>
            </div>
        );
    }

    getComments(){
        if (!this.state.isExpanded){
            return null;
        }

        const comments = this.props.comments.map((comment) =>{
            return <li key={ comment.id }>{ comment.text }</li>;
        });

        return (
            <ul>
                { comments }
            </ul>
        );
    }

    expandCommentsHandler = (e) =>{
        e.preventDefault();

        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }
}

export default CommentsList;
