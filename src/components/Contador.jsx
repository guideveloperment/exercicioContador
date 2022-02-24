import React, {useState} from 'react'

function Contador(props){

    const [numero, setNumero] = useState(props.numero)

    const incremento = () => {
        if(numero >= props.limiteMax) {
            alert("Não é possível valor maior que 5")
            return 

        }

        setNumero(numero + 1)
    }
    const decremento = () => {
        if(numero == props.limiteMin) {
            alert("Não é possível valor menor que 0")
            return
        }
        setNumero(numero - 1)
    }

    return (
            <>
            
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button>
            
             </>

        
    )
}

export default Contador

