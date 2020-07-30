import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./Comment.jsx";
import ModalBox from "./ModalBox.jsx";
import icon from "../assets/images/user-icon.png";
import deep from "../assets/images/deep.jpg";
import "../assets/scss/post.scss";

const mapStateToProps = (state) => {
  return { comments: state.comments };
};
class Post extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.comments.length !== +this.prevProps) {
      localStorage.setItem("comments", this.props.comments);
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
      show: false,
      count:0
    };
  }

  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };
  _handleClick() {
    this.setState({
      showComments: !this.state.showComments,
    });
  }
  incrementLike() {
    this.setState({
      count:this.state.count+1,
    })
  }

  render() {
    let {count}=this.state;
    /*   const comments = this._getComments(); */
    let commentNodes;
    let buttonText = "Show Comments";

    if (this.state.showComments) {
      buttonText = "Hide Comments";
      commentNodes = <List />;
    }
    return (
      <React.Fragment>
        <div className="post1p">
          <img src={deep} />
          <h4 className="comment-count">
            {/*  {this._getCommentsTitle(comments.length)} */}
          </h4>
          <button className="add-comment-button" onClick = {this.incrementLike.bind(this)}>
    <i className="fa fa-thumbs-up" aria-hidden="true"></i>Like {count}
          </button>
          <button
            className="add-comment-button"
            onClick={(e) => {
              this.showModal();
            }}
          >
            <i className="fa fa-comments" aria-hidden="true"></i>Comment
          </button>
         
          <button
            className="show-comment-button"
            id="comment-reveal"
            onClick={this._handleClick.bind(this)}
          >
            {buttonText}
          </button>

          <div>
            <div>{commentNodes}</div>
          </div>
        </div>
        <ModalBox onClose={this.showModal} show={this.state.show} />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Post);
