import './section_styles.scss'
import fam_photo8 from '../../assets/photos/family/fam_photo8.jpg'
import fam_photo9 from '../../assets/photos/family/fam_photo9.jpg'
import grad_photoHS1 from '../../assets/photos/grad/grad_photoHS1.jpg'
import other_pic1 from '../../assets/photos/other/other_pic1.jpeg'
import grad_photo4 from '../../assets/photos/grad/grad_photo4.jpg'
import grad_photo1 from '../../assets/photos/grad/grad_photo1.jpg'
import self_photo8 from '../../assets/photos/self/self_photo8.jpg'
import brainstation_logo from '../../assets/logos/brainstation_logo.png'
import { useEffect } from "react";
import { useState } from 'react';

function About(props) {

    useEffect(() => {
        if (props.scroll) {
            window.scrollTo(0, props.scroll)
        }
        console.log(props.scroll)
    }, [])
    // useEffect(()=> {
    //     return () => {
    //         props.setScrollPosition('About', window.scrollY) 
    //         console.log('return', props.scroll, )
    //     };
    // }, []) 


    return (
        <div className="About" id="section">
            {/* <h2 className="mainSectionHeader">About Me</h2> */}
            <div className="section" id="Bio">
                <h3 className={`section_header${props.theme.color}`}>Bio</h3>
                <div className="section_paragraphWrapper">
                    <p className="section_paragraph" id='aboutParagraph'>
                        I was born on February 10th, 1997 in a town called Warri, located in southern Nigeria. I lived my first six years in Nigeria, coming moving permanently to Canada in September of 2003. I lived in Calgary, Alberta most of my Canadian life, and two of my siblings were born here. </p>
                    <div className="section_paragraph-images">
                        <figure className="section_paragraph-image--about">
                            <img className="sectionImage" id="aboutImage" src={fam_photo8} />
                            <figcaption className={`section_paragraph-caption${props.theme.color}`}>My family at my younger bothers baptism ceremony</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="section_paragraph-images">
                    <figure className="section_paragraph-image--about" id='about_image2'>
                        <img className="sectionImage" id="aboutImage" src={fam_photo9} />
                        <figcaption className={`section_paragraph-caption${props.theme.color}`}>Holding my baby sister when she only a few weeks old</figcaption>
                    </figure>
                </div>
            </div>
            <div className="section_paragraphWrapper">
                <p className="section_paragraph" id='aboutParagraph'>
                    I attended several different schools and eventually graduated St. Francis Highschool in 2014
                        </p>
                <div className="section_paragraph-images">
                    <figure className="section_paragraph-image--about">
                        <img className="sectionImage" id="aboutImage" src={grad_photoHS1} />
                        <figcaption className={`section_paragraph-caption${props.theme.color}`}>Graduating Highschool</figcaption>
                    </figure>
                </div>
            </div>


            <div className="section" id="University">
                <h3 className={`section_header${props.theme.color}`}>University</h3>
                <div className="section_content"></div>
                <div className="section_paragraphWrapper">
                    <div className="section_paragraph-images" id='middleImage'>
                        <figure className="section_paragraph-image--about">
                            <img className="sectionImage" id="aboutImageMiddle" src={other_pic1} />
                            <figcaption className={`section_paragraph-caption${props.theme.color}`}>My group and I holding our final capstone project. We made a model house with a simulated security system that could be conrolled remotely using a cellphone app.  </figcaption>
                        </figure>
                    </div>
                    <p className="section_paragraph" id='aboutParagraphMiddle'>In September of 2014, I began my five-year journey at the University of Ottawa. I enrolled in the Electrical Engineering program. I studied several electricity related aspects such as electromagnetism, circuit theory and circuit building, control and digital systems, wireless and telecommunication systems and more. I also dabbled in other subjects such as calculus, physics, linear algebra/systems, and even psychology and philosophy for a semester as electives. In my final year, I chose to specialize in telecomunications, due to my interest in technology such as cell phones and transmitter/receiver systems used in everyday such as Wi-Fi and Bluetooth. Between labs, assignments, individual/group projects, there was always something to do to keep busy!</p>
                </div>
                <div className="section_paragraphWrapper">
                    <p className="section_paragraph" id='aboutParagraph'>In November of 2019, I officially graduated from the University of Ottawa, earning my Bachelors of Applied science and ending my five-year long journey!</p>
                    <div className="section_paragraph-images">
                        <figure className="section_paragraph-image--about">
                            <img className="sectionImage" id="aboutImage" src={grad_photo4} />
                            <figcaption className={`section_paragraph-caption${props.theme.color}`}>Walking the stage during my graduation ceremony</figcaption>
                        </figure>
                        </div>
                    </div>
                    <figure className="section_paragraph-image--about">
                        <img className="sectionImage" id="aboutImage" src={grad_photo1} />
                        <figcaption className={`section_paragraph-caption${props.theme.color}`}>Posing for the camera with my (then) new university degree</figcaption>
                    </figure>

            </div>
            <div className="section" id="After University">
                <div className="section_content">
                    <h3 className={`section_header${props.theme.color}`}>After University</h3>
                    <div className="section_paragraphWrapper">
                        <p className="section_paragraph" id='aboutParagraph'>After 5 years of university life, I was very welcoming to a change in pace. I began working as a sales associate at Virgin Mobile, in Orleans Ontario, close to Ottawa. I intended to work here until I got employed in a field related to what I studied in university, but I enjoyed this job so much that I stayed working at Virgin for over a year. I learned several practical skills, including how to speak to customers, and how to conduct myself in a sales environment. I even had the opportunity to work from home in the online sales department during the covid-19 lockdowns that temporarily closed all of our stores. All in all, working at Virgin mobile was a very positive experience. I enjoyed the work, got to speak with several interesting people, made new friends, and had learned practical, real life skills, a nice contrast to the mostly theory-based and limited hands on experience of university. </p>
                        <div className="section_paragraph-images">
                            <figure className="section_paragraph-image--about">
                                <img className="sectionImage" id="aboutImage" src={self_photo8} />
                                <figcaption className={`section_paragraph-caption${props.theme.color}`}>Selfie I took, working at Virgin Mobile</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section" id="Learning Software Development">
                <div className="section_content">
                    <h3 className={`section_header${props.theme.color}`}>Learning Software Development</h3>
                    <div className="section_paragraphWrapper" id="brainstation">
                        <p className="section_paragraph" id='aboutParagraphLogo'>As the lockdowns extended further, the situation gave me time to think about what I wanted to do long-term. I realized that although university was a valuable life experience, I wasn’t necessarily interested in working as an electrical engineer. I remembered that I took a university course that involved coding in C, and I actually enjoyed the process of creating new software programs. In addition to this, I became aware of the opportunities in software development, particularly web development. I spoke to my cousin, who himself had learned software development over the recent years, and we came to the conclusion that the current lockdown situation provided me with a great opportunity to further learn how to code. I decided to attend BrainStation’s Web-Development bootcamp, offered remotely due to the lockdown. In a few months, I learned several web development skills and frameworks, ranging from HTML and CSS to collaborative development using Jira and Github and more! <a href="/">Learn more about my skills here!</a></p>
                        <div className="section_paragraph-images">
                            <figure className="section_paragraph-image--about">
                                <img className="sectionImage" id="aboutImageLogo" src={brainstation_logo} />
                                <figcaption className={`section_paragraph-caption${props.theme.color}`}>BrainStation's logo. <a href="/">Visit BrainStations' website!</a></figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About;