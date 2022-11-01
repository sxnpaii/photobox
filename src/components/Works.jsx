import React from 'react'
// images
import works1 from '../img/works img/works_01.png';
import works2 from '../img/works img/works_02.png';
import works3 from '../img/works img/works_03.png';
import works4 from '../img/works img/works_04.png';
import works5 from '../img/works img/works_05.png';
import works6 from '../img/works img/works_06.png';
import works7 from '../img/works img/works_07.png';
import works8 from '../img/works img/works_08.png';
import works9 from '../img/works img/works_09.png';

function Works(props) {
    return (
        <>
            <section className="innerWorks">
                <div className="leftCol ">
                    <div className="cards" data-aos="fade-up-right" data-aos-offset="460">
                        <img src={works1} alt="" />
                        <div className="text">
                            <span>01/</span>
                            <h2>{props.works1Descp}</h2>
                        </div>
                    </div>
                    <div className="cards" data-aos="fade-up-right" data-aos-offset="460">
                        <img src={works4} alt="" />
                        <div className="text">
                            <span>04/</span>
                            <h2>{props.works4Descp}</h2>
                        </div>
                    </div>
                    <div className="cards" data-aos="fade-up-right" data-aos-offset="460">
                        <img src={works7} alt="" />
                        <div className="text">
                            <span>07/</span>
                            <h2>{props.works7Descp}</h2>
                        </div>
                    </div>
                </div>
                <div className="centerCol " >
                    <div className="cards"  data-aos="fade-up" data-aos-offset="460">
                        <img src={works2} alt="" />
                        <div className="text">
                            <span>02/</span>
                            <h2>{props.works2Descp}</h2>
                        </div>
                    </div>
                    <div className="cards"  data-aos="fade-up" data-aos-offset="460">
                        <img src={works5} alt="" />
                        <div className="text">
                            <span>05/</span>
                            <h2>{props.works5Descp}</h2>
                        </div>
                    </div>
                    <div className="cards"  data-aos="fade-up" data-aos-offset="320">
                        <img src={works8} alt="" />
                        <div className="text">
                            <span>08/</span>
                            <h2>{props.works8Descp}</h2>
                        </div>
                    </div>
                </div>
                <div className="rightCol" >
                    <div className="cards"  data-aos="fade-up-left" data-aos-offset="460">
                        <img src={works3} alt="" />
                        <div className="text">
                            <span>03/</span>
                            <h2>{props.works3Descp}</h2>
                        </div>
                    </div>
                    <div className="cards" data-aos="fade-up-left" data-aos-offset="460">
                        <img src={works6} alt="" />
                        <div className="text">
                            <span>06/</span>
                            <h2>{props.works6Descp}</h2>
                        </div>
                    </div>
                    <div className="cards" data-aos="fade-up-left" data-aos-offset="460">
                        <img src={works9} alt="" />
                        <div className="text">
                            <span>09/</span>
                            <h2>{props.works9Descp}</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Works;
