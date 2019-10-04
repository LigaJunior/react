import React from 'react'
//jsxOptional covers any jsxComponent besides text input
const Form = ({ identifier, submitFunction, jsxOptional, inputs, btnPrimary, btnSecondary }) => (
    <form>
        {jsxOptional &&
            [
                jsxOptional
            ]
        }
        {inputs &&
            inputs.map((input, index) =>
                <div key={index} className="form-group">
                    <label htmlFor={identifier + "Input" + input.name}>{input.name}</label>
                    <input id={identifier + "Input" + input.name} type={input.type} className="form-control" placeholder={"Digite aqui para o item " + input.name.toLowerCase()} />
                </div>
            )}
        <div className="btn-group col-md-12">
            {btnSecondary.active &&
                [
                    <button key={"btnSecondary"} type="button" className="btn btn-secondary" data-dismiss="modal">{btnSecondary.text}</button>
                ]
            }
            {btnPrimary.active &&
                [
                    <button key={"btnPrimary"} onClick={submitFunction} type="button" className="btn btn-primary">{btnPrimary.text}</button>
                ]
            }
            
            
        </div>
    </form>
)

Form.defaultProps = {
    body: (<div></div>),
    btnPrimary: { text: "Salvar", active:true },
    btnSecondary: { text: "Cancelar", active:true }
}

export default Form