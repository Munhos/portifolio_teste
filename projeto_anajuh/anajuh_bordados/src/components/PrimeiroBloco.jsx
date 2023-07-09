import React from 'react'
import "./css/PrimeiroBloco.css"

const PrimeiroBloco = () => {
  return (
    <div id='container'>
        <div id="opcoes_header">
            <div id='limitador_header'>
              <div>LOGO</div>
              <ol>
                  <li className='op_lista'>Menu Principal <div></div></li>
                  <li className='op_lista'>Produtos <div></div></li>
                  <li className='op_lista'>Sobre Mim <div></div></li>
              
              </ol>
            </div>
        </div>
    </div>
  )
}

export default PrimeiroBloco