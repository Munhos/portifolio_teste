import React, { useState } from 'react'
import './css/SegundoBloco.css'

//IMAGENS
import FundoSite1 from "../images/FundoSite1.png"
import FundoSite2 from "../images/FundoSite2.png"
import FundoSite3 from "../images/FundoSite3.png"

const SegundoBloco = () => {
  return (
    <div id='ContainerSegBloco'>
        <div id="ContainerCarrosselSegBloco">
          <div id="ContainerLabelSegBloco">
            <label className='LabelSegBloco' htmlFor="RadioSegBloco1"></label>
            <label className='LabelSegBloco' htmlFor="RadioSegBloco2"></label>
            <label className='LabelSegBloco' htmlFor="RadioSegBloco3"></label>
          </div>

          <div id="ContainerImagensSegBloco">
            <input type="radio" name="RadioSegBloco" id="RadioSegBloco1" className="InputRadioSegBloco" defaultChecked/>
            <input type="radio" name="RadioSegBloco" id="RadioSegBloco2" className="InputRadioSegBloco" />
            <input type="radio" name="RadioSegBloco" id="RadioSegBloco3" className="InputRadioSegBloco" />

            <a href="#" id='LinkSegBloco'><img src={FundoSite1} alt="FundoSite1" id='Img1SegBloco'/></a>
            <a href="#"><img src={FundoSite2} alt="FundoSite2" /></a>
            <a href="#"><img src={FundoSite3} alt="FundoSite3" /></a>
          </div>
        </div>
        
    </div>
  )
}

export default SegundoBloco