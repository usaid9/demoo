import React from 'react'
import group from "../../assets/Group 19768.png";
import arrow from "../../assets/Arrow.svg";

export default function Features() {
    return (
        <div id="feature">
            <div id="fleft">
                <div id="fup">
                    THE <div>FEATURE</div><br /> OF DESIGN <br />STARTS HERE
                </div>
                <div id="fmid">
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in with the release Letraset.
                </div>
                <button id="flearn">Learn More</button>
                <button id="fteam">Creato Team</button>
                <img src={arrow} id="farrow" alt="" />
            </div>
            <div id="fright">
                <img src={group} alt="" />
            </div>
        </div>
    )
}
