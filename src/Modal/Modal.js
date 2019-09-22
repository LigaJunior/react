import React from 'react'

const Modal = ({ identifier, title, body, btnPrimary, btnSecondary }) => (
    <div className="modal fade" id={identifier} tabIndex="-1" role="dialog" aria-labelledby={identifier + "Title"} aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id={identifier + "Title"}>{title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div style={{padding:'20px'}}>
                    {body}
                </div>
            </div>
        </div>
    </div>
)

Modal.defaultProps = {
    body: (
        <div className="modal-body">
            ...
        </div>
    ),
    btnPrimary: "Salvar",
    btnSecondary: "Cancelar"
}

export default Modal