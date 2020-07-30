import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal, { closeStyle } from "simple-react-modal";
import { addComment } from "../redux/reducer";
import uuidv1 from "uuid";
import "../assets/scss/modal.scss";

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
  };
};

class ModalBox extends React.Component {
  constructor(){
    super()
this.state={

}
  }
  initialValues() {
    return {
      file: "",
      body: "",

    }
  }


  validate(values) {

    const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    let errors = {};

    if (!regexp.test(values.file)) {
      errors.file = "Url is invalid";
      errors.button="please correct url before submit";
      this.setState({
        isError:true
      })

    }else {}
  

    return errors;    
  }


  

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  onSubmit(values) {
    let body = values.body;
    let fileUpload =   values.file;
    let initialComment = new Date().getTime();
    const id = uuidv1();
    this.props.addComment({ body, id, initialComment,fileUpload });
    this.onClose();
  }
  render() {
    let {isError}=this.state;
    let { values,valid, errors } = this.state; 

   
    return (
      <>
        <Modal
          closeOnOuterClick={true}
          show={this.props.show}
          transitionSpeed={1000}
        >
          <div className="modalStyle">
             <Formik
                initialValues={this.initialValues()}
                validate={this.validate.bind(this)}
                onSubmit={this.onSubmit.bind(this)} 
                > 
          {
                  props => (
                    <Form > <span style={closeStyle} onClick={this.onClose.bind(this)}>
                X
              </span>
              <div>ADD COMMENT</div>
              <hr></hr>
              <div className="form-group">
                      <Field
                          type="text"
                          name="file"
                          placeholder="Enter url"
                          className={`form-control ${props.errors.file ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="file"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group ">
                        <Field
                          type="text"
                          name="body"
                          placeholder="Enter message"
                          className={`form-control ${props.errors.body ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="body"
                          className="invalid-feedback"
                        />
                        </div>
                        {isError? <div><button type="submit" disabled className="btn btn-primary btn-block"                           
>
Post                      </button>  <ErrorMessage
                          component="div"
                          name="button"
                          className="invalid-feedback"
                        /></div> : <button type="submit"  className="btn btn-primary btn-block">
Post                      </button> }
                      
                     
              </Form>
                  )
                }
              </Formik>
           
          </div>
        </Modal>
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(ModalBox);
