import React from "react"

const Filho = ({peso, altura}) => {

    function IMC ({peso, altura}){return peso/(altura*altura)}

    function Mensagem (IMC){
        if(IMC({peso, altura}) < 18){
            return <h3>Abaixo do peso</h3>
        } else if(IMC({peso, altura}) > 25){
            return <h3>Acima do peso</h3>
        } else {
            return <h3>Peso ideal</h3>
        }
    }

    let imc = IMC ({peso, altura})
    let msg = Mensagem(IMC)

    return <div>
        <h2>IMC: {imc} </h2>
        {msg}
    </div>
}

export default Filho