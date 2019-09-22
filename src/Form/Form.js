import React from 'react'

const Form = ({identifier,submitFunction,jsxOptional, inputs}) => (
    <form>
        {jsxOptional &&
            [
                jsxOptional
            ]
        }
        {inputs &&
            inputs.map((input, index) => 
            <div key={index} className="form-group">
                <label htmlFor={identifier+"Input"+input.name}>{input.name}</label>
                <input id={identifier+"Input"+input.name} type={input.type} className="form-control" placeholder={"Digite aqui para o item "+input.name.toLowerCase()} />
            </div>
        )}
        <div className="btn-group col-md-12">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button onClick={submitFunction} type="button" className="btn btn-primary">Salvar</button>
        </div>
    </form>
)

Form.defaultProps = {
    body: (<div></div>),
    btnPrimary: "Salvar",
    btnSecondary: "Cancelar"
}

export default Form