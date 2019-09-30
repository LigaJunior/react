import React, { Component } from 'react'

class Modal extends Component {
    render (){
        return (
            <div className="modal fade" id={this.props.identifier} tabIndex="-1" role="dialog" aria-labelledby={this.props.identifier + "Title"} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={this.props.identifier + "Title"}>{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div style={{padding:'20px'}}>
                            {this.props.body}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Modal.defaultProps = {
    title:"Novo modal",
    body: (
        <div className="modal-body">
            ...
        </div>
    )
}

export default Modal