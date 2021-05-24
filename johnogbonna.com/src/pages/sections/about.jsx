import './section_styles.scss'
import fam_photo8 from '../../assets/photos/family/fam_photo8.jpg'
import fam_photo9 from '../../assets/photos/family/fam_photo9.jpg' 
import grad_photoHS1 from '../../assets/photos/grad/grad_photoHS1.jpg'

function About() {
    return (
        <div className="About" id="section">
            <div className="section" id="bio">
                <div className="section_content">
                    <h3 className="section_header">Bio</h3>
                    <div className="section_paragraph">
                        <p className="section_paragraph-text">
                            I was born on February 10th, 1997 in a town called Warri, located in southern Nigeria. I lived my first six years in Nigeria, coming moving permanently to Canada in September of 2003. I lived in Calgary, Alberta most of my Canadian life, and two of my siblings were born here. </p>
                        <div className="section_paragraph-images">
                            <figure className="section_paragraph-image">
                                <img className="section_paragraph-photo" src={fam_photo8}/> 
                            <figcaption className="section_paragraph-caption">My family at my younger bothers baptism ceremony</figcaption>    
                            </figure>
                        </div> 
                        <div className="section_paragraph-images">
                            <figure className="section_paragraph-image">
                                <img className="section_paragraph-photo" src={fam_photo9}/> 
                            <figcaption className="section_paragraph-caption">Holding my baby sister when she only a few weeks old</figcaption>    
                            </figure>
                        </div>
                    </div>
                    <div className="section_paragraph">
                        <p className="section_paragraph-text">
                            I attended several different schools and eventually graduated St. Francis Highschool in 2014
                        </p> 
                        <div className="section_paragraph-images">
                            <figure className="section_paragraph-image">
                                <img className="section_paragraph-photo" src={grad_photoHS1}/> 
                            <figcaption className="section_paragraph-caption">Graduating Highschool</figcaption>    
                            </figure>
                        </div>
                    </div>


                </div> 
                <div className="section_content">

                </div>
            </div>

        </div>
    )

}

export default About;