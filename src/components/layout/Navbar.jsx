import React from 'react'
export default function Navbar() {
    return (
        <>
            <nav>
                <div id="title">Crea<span>to</span></div>
                <button id="open" onClick={() => {
                    console.log("hiiii");
                    let menu = document.getElementById("menu");
                    menu.style.right = "-15px";
                    document.getElementById("menf").style.display = "block";

                }} >
                    <i><i class="fa-solid fa-list"></i></i></button>
                    <button id='menf' onClick={() => {
                        console.log("hiiii");
                        let menu = document.getElementById("menu");
                        menu.style.right = "-320px";
                        document.getElementById("menf").style.display = "none";
                    }}></button>
                <ul id='menu'>
                    <li id="intil">Crea<span>to</span></li>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Features</li>
                    <li>Team</li>
                    <li>Portfolio</li>
                    <li>Review</li>
                    <li>Pricing</li>
                    <li id="incon">Contact Us</li>
                </ul>
                <div id="cont">Contact Us</div>
            </nav>

        </>
    )
}
