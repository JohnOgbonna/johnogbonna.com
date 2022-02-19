import './section_styles.scss'
import fam_photo1 from '../../assets/photos/family/fam_photo1.jpg'
import fam_photo2 from '../../assets/photos/family/fam_photo2.jpg'
import fam_photo3 from '../../assets/photos/family/fam_photo3.jpg'
import fam_photo4 from '../../assets/photos/family/fam_photo4.jpg'
import fam_photo5 from '../../assets/photos/family/fam_photo5.jpg'
import fam_photo6 from '../../assets/photos/family/fam_photo6.jpg'
import fam_photo7 from '../../assets/photos/family/fam_photo7.jpg'
import fam_photo8 from '../../assets/photos/family/fam_photo8.jpg'
import fam_photo9 from '../../assets/photos/family/fam_photo9.jpg'
import grad_photoHS1 from '../../assets/photos/grad/grad_photoHS1.jpg'
import grad_photo1 from '../../assets/photos/grad/grad_photo1.jpg'
import grad_photo2 from '../../assets/photos/grad/grad_photo2.jpg'
import grad_photo3 from '../../assets/photos/grad/grad_photo3.jpg'
import grad_photo4 from '../../assets/photos/grad/grad_photo4.jpg'
import self_photo1 from '../../assets/photos/self/self_photo1.jpg'
import self_photo2 from '../../assets/photos/self/self_photo2.jpg'
import self_photo3 from '../../assets/photos/self/self_photo3.jpg'
import self_photo4 from '../../assets/photos/self/self_photo4.jpg'
import self_photo5 from '../../assets/photos/self/self_photo5.JPG'
import self_photo6 from '../../assets/photos/self/self_photo6.jpg'
import self_photo7 from '../../assets/photos/self/self_photo7.jpg'
import self_photo8 from '../../assets/photos/self/self_photo8.jpg'
import other_pic1 from '../../assets/photos/other/other_pic1.jpeg'
import dropDownArrow from '../../tools/other/drop-down-arrow.svg'
import { useState } from "react";

function Gallery(props) {
    let [category, setCategory] = useState('All');
    let [selecting, setSelecting] = useState(false)
    let [largeViewIndex, setLargeViewIndex] = useState(null)
    let [largeViewPhotos, setLargeViewPhotos] = useState(null)
    function switchCategory(category) {
        setCategory(category);
        setSelecting(false);
    }
    function setupLargeView(images, index) {
        setLargeViewIndex(index)
        setLargeViewPhotos(images)
    }
    function disableLargeView() {
        setLargeViewIndex(null)
        setLargeViewPhotos(null)
    }

    let photos = [
        {
            picture: fam_photo1,
            category: 'Family'
        },
        {
            picture: fam_photo2,
            category: 'Family'
        },
        {
            picture: fam_photo3,
            category: 'Family'
        },
        {
            picture: fam_photo4,
            category: 'Family'
        },
        {
            picture: fam_photo5,
            category: 'Family'
        },
        {
            picture: fam_photo6,
            category: 'Family'
        },
        {
            picture: fam_photo7,
            category: 'Family'
        },
        {
            picture: fam_photo8,
            category: 'Family'
        },
        {
            picture: fam_photo9,
            category: 'Family'
        },
        {
            picture: grad_photoHS1,
            category: 'Grad'
        },
        {
            picture: grad_photo1,
            category: 'Grad'
        },
        {
            picture: grad_photo2,
            category: 'Grad'
        },
        {
            picture: grad_photo3,
            category: 'Grad'
        },
        {
            picture: grad_photo4,
            category: 'Grad'
        },
        {
            picture: self_photo1,
            category: 'Self'
        },
        {
            picture: self_photo2,
            category: 'Self'
        },
        {
            picture: self_photo3,
            category: 'Self'
        },
        {
            picture: self_photo4,
            category: 'Self'
        },
        {
            picture: self_photo5,
            category: 'Self'
        },
        {
            picture: self_photo6,
            category: 'Self'
        },
        {
            picture: self_photo7,
            category: 'Self'
        },
        {
            picture: self_photo8,
            category: 'Self'
        },
        {
            picture: other_pic1,
            category: 'other'
        },
    ]
    let gradPhotos = photos.filter(photo => photo.category === 'Grad')
    let familyPhotos = photos.filter(photo => photo.category === 'Family')
    let selfPhotos = photos.filter(photo => photo.category === 'Self')

    return (
        <div className="Gallery" id="section">
            <h2 className="mainSectionHeader" >Gallery</h2>
            <div className='Gallery__selector'>
                <h2 className='Gallery__selector-text'>{`${category} Photos`}</h2>
                <img className='mainSectionArrow' src={dropDownArrow} alt='dropDownArrow' onClick={() => setSelecting(!selecting)} />
            </div>
            {selecting ?

                <div className='Gallery__selector-box'>
                    <ul className='Gallery__selector-box--list'>
                        <li onClick={() => switchCategory('All')}>All Photos</li>
                        <li onClick={() => switchCategory('Grad')}>Grad Photos</li>
                        <li onClick={() => switchCategory('Family')}>Family Photos</li>
                        <li onClick={() => switchCategory('Self')}>Self Photos</li>
                    </ul>
                </div> : null}
            <div className='Gallery__photos'>
                {category === 'All' ?
                    photos.map((image, index) => {
                        return (
                            <div className='photoBox'>
                                <img className='photogrid__photo' src={image.picture} onClick={() => setupLargeView(photos, index)} />
                            </div>
                        )
                    })
                    : null}
                {category === 'Grad' ?
                    gradPhotos.map((image, index) => {
                        return (
                            <div className='photoBox'>
                                <img className='photogrid__photo' src={image.picture} onClick={() => setupLargeView(gradPhotos, index)} />
                            </div>
                        )
                    })
                    : null}
                {category === 'Family' ?
                    familyPhotos.map((image, index) => {
                        return (
                            <div className='photoBox'>
                                <img className='photogrid__photo' src={image.picture} onClick={() => setupLargeView(familyPhotos, index)} />
                            </div>
                        )
                    })
                    : null}
                {category === 'Self' ?
                    selfPhotos.map((image, index) => {
                        return (
                            <div className='photoBox'>
                                <img className='photogrid__photo' src={image.picture} onClick={() => setupLargeView(selfPhotos, index)} />
                            </div>
                        )
                    })
                    : null}
            </div>
            {largeViewPhotos && largeViewIndex > -1 ?

                <div className='largeView' onClick={(e) => {
                    e.preventDefault();
                    if (e.target === e.currentTarget) {
                        disableLargeView()
                    }
                }}>
                    <div className='largeView__picture' onClick={(e) => {
                        e.preventDefault();
                        if (e.target === e.currentTarget) {
                            disableLargeView()
                        }
                    }}>
                        {largeViewIndex - 1 > -1 ?
                            <img className='arrowLeft' src={dropDownArrow} onClick={() => setLargeViewIndex(largeViewIndex - 1)} />
                            : null}
                        <div className='largeView__picture-background'>
                            <img className='largeView__picture-photo' src={largeViewPhotos[largeViewIndex].picture} alt='picture' />
                        </div>
                        {largeViewIndex + 1 < largeViewPhotos.length ?
                            <img className='arrowRight' src={dropDownArrow} onClick={() => setLargeViewIndex(largeViewIndex + 1)} /> : null}
                    </div>
                </div>

                : null}

        </div>
    )
}
export default Gallery;