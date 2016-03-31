import React, { Component, PropTypes } from 'react'
import CommentsList from './CommentsList';

class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { title, text, comments } = this.props.article;
        var body = null;

        if (this.state.isOpen){
            if (comments && comments.length){
                body = (
                    <section>
                        {text}
                        <CommentsList comments={ comments }/>
                    </section>
                );
            } else {
                body = <section>{text}</section>;
            }
        }

        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                { body }
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
