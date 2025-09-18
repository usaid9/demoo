import React from 'react'

import webdeign from "../../assets/web-design.svg";
import ecommerce from "../../assets/e-commerce.svg";
import responsive from "../../assets/responsive-design.svg";
import creative from "../../assets/creative.svg";
import support from "../../assets/freindly-support.svg";
export default function Ourfeatures() {
  return (
    <div id="ourfeatures">
            <div id="feahead">
                <div>OUR FEATURES</div>TONS OF AWESOME FEATURES
            </div>
            <div id="feaimgs">
                <div class="fimgs">
                    <img src={webdeign} alt=""/>WEB DESIGN
                </div>
                <div class="fimgs">
                    <img src={ecommerce} alt=""/>E-COMMERCE
                </div>
                <div class="fimgs">
                    <img src={responsive} alt=""/>RESPONSIVE<br/>DESIGN
                </div>
                <div class="fimgs">
                    <img src={creative} alt=""/>CREATIVE DESIGN
                </div>
                <div class="fimgs">
                    <img src={support} alt=""/>FRIENDLY SUPPORT
                </div>
            </div>
        </div>
  )
}
