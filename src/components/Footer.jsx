import React from 'react'
// sources
import logo from '../img/Logo.svg';
export default function Footer() {
    return (
        <div>
            <section className="innerFooter">
                <a href="#!">
                <img src={logo} alt="" />
                PHOTOBOX
                </a>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>works</li>
                </ul>
                <p>ALL RIGHT RESERVED</p>
            </section>
        </div>
    )
}
