import React, {useState, useEffect} from 'react'
import '../Ifoodcounter/Ifoodcounter.css'

export default function Ifoodcounter() {
  
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

    useEffect(()=>{
        //console.log(`o estilo do botao atual é: ${buttonStyle}`) e alterar [buttonStyle]
        document.getElementById("mnpoeda").innerHTML = 2.50 * value;
    },[value])

    function down(){
        if (value <= 1) {
            setButtonStyle("counter-button-minus-desactive")
        }

        if (value > 0) {
            setValue(value - 1)
        }
    }

    function up(){
        setButtonStyle("counter-button-minus-active")
        setValue(value + 1)
    }

    return (
    <div className="countex-wrapper">
        <button
            className={buttonStyle}
            onClick={down}
        >
            -
        </button>
        <p>{value}</p>
        <button
            className="counter-button-plus-active"
            onClick={up}
        >
            +
        </button>
        <button id="moeda">0</button>
    </div>
  )
}
