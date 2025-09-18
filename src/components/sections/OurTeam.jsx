import React from 'react'
import team1 from "../../assets/team1.svg";
import team2 from "../../assets/team2.svg";
import team3 from "../../assets/team3.svg";

export default function OurTeam() {
  return (
     <div id="ourteam">
            <div id="team">
                <div id="teamup">OUR TEAM</div>
                We make the <br/>magic happen every day
            </div>
            <div id="ourhead">
                <div class="person">
                    <div id="p1"><img src={team1} alt=""/></div>
                    <div id="ps1">MIKE WONG <span>DESIGNER</span> </div>
                </div>
                <div class="person">
                    <div id="p2"><img src={team3} alt=""/></div>
                    <div id="ps2">MARIA ZURICH <span>CEO</span> </div>
                </div>
                <div class="person">
                    <div id="p3"><img src={team2} alt=""/></div>
                    <div id="ps3">MARGARET ZAVALA<span>DESIGNER</span> </div>
                </div>
            </div>
        </div>
  )
}
