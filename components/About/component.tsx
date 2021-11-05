import React from 'react';
import a from "../../styles/about.module.css";
import me from "../../public/images/me.png";
const About = () => {
    return (
        <div className={a.about}>
            <div className={a.cont}>
                <div className={a.about_info}>
                    <ul>
                        <li>
                            Hi there! My name is Yerlan. I am a web developer with 2 years experience. Now in <a href="https://alabs.team/"><span>a</span>labs.team</a>
                        </li>
                        <li>4-year CS student at SDU</li>
                        <li>I love to draw and shoot atomospheric  videos on my phone  </li>
                    </ul>
                </div>
                <div className={a.about_img}>
                    <img src={me.src} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default About;