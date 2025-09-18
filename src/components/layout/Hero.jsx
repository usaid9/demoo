import React from 'react'
import screenshot1 from "../../assets/Screenshot 2025-07-17 191256.png";
import screenshot2 from "../../assets/Screenshot 2025-07-17 191230.png";
import whoweare from "../../assets/icon_whoweare.svg";
import whatwedo from "../../assets/icon_whatwedo.svg";
import ourteam from "../../assets/icon_ourteam.svg";
export default function Hero() {
  return (
    <section id="top">

        <div id="upbod">
            <div id="uptex1">
                IF YOU CAN
            </div>
            <div id="upmid">
                <div>IMAGINE IT</div>
            </div>
            <div id="uptex2">
                WE CAN MAKE IT
            </div>
            <div id="downtex">
                <div>
                    We are a creative design agency located in the city of San Francisco, California.
                </div>
            </div>
            <div id="upbut">
                <button id="but1">
                    Learn More
                </button>
                <button id="but2">
                    Contact Us
                </button>
            </div>
            <div id="animgs">
                <img id="img1" src={screenshot1} alt=""/>
                <img id="img2" src={screenshot2} alt=""/>
            </div>
            <div id="twomid">
                <div><img src={whoweare} alt=""/>Who We Are</div>
                <div><img src={whatwedo} alt=""/>What We Do</div>
                <div><img src={ourteam} alt=""/>Our Team &nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
        </div>
    </section>
  )
}
