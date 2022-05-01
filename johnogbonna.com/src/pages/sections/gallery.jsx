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
import self_photo9 from '../../assets/photos/self/self_photo9.jpg'
import other_photo1 from '../../assets/photos/other/other_photo1.jpeg'
import other_photo2 from '../../assets/photos/other/other_photo2.jpg'
import other_photo3 from '../../assets/photos/other/other_photo3.jpg'
import dropDownArrow from '../../tools/other/scroll_arrow.svg'
import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import closeButton from '../../tools/other/closeIcon.svg';

function Gallery(props) {
    let categories = ['All', 'Grad', 'Family', 'Self', 'Other']
    let params = useParams();
    let navigate = useNavigate();
    let [category, setCategory] = useState(categories.includes(params.photoCategory) ? params.photoCategory : 'All');
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
            picture: self_photo9,
            category: 'Self'
        },
        {
            picture: self_photo7,
            category: 'Self'
        },
        {
            picture: fam_photo1,
            category: 'Family'
        },
        {
            picture: fam_photo2,
            category: 'Family'
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
            picture: other_photo3,
            category: 'Other'
        },
        {
            picture: self_photo8,
            category: 'Self'
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
            picture: other_photo1,
            category: 'Other'
        },
        {
            picture: other_photo2,
            category: 'Other'
        },

    ]
    let gradPhotos = photos.filter(photo => photo.category === 'Grad')
    let familyPhotos = photos.filter(photo => photo.category === 'Family')
    let selfPhotos = photos.filter(photo => photo.category === 'Self')
    let otherPhotos = photos.filter(photo => photo.category === 'Other')

    return (
        <div className="Gallery" id="section">
            <h2 className={`section_header${props.theme.color}`} >Gallery</h2>
            <div className='Gallery__selector' onClick={() => setSelecting(!selecting)}>
                <h2 className={`section_header${props.theme.color}`} id='galleryHeader'>{`${category} Photos`}</h2>
                <div className={`scrollArrowBackground${props.theme.color}`} id='galleryArrowBackground'> <img className={'mainSectionArrow'} id={`galleryArrow${selecting ? 'Expanded' : ''}`} src={dropDownArrow} alt='dropDownArrow' />
                </div>
            </div>
            <ul className={`Gallery__selector-box${selecting ? 'Active' : ''}`}>
                <li className={`Gallery__selector-box--item${props.theme.color}`} onClick={() => {
                    switchCategory('All')
                    navigate('/Gallery/All');
                }}>All Photos</li>
                <li className={`Gallery__selector-box--item${props.theme.color}`} onClick={() => {
                    switchCategory('Grad')
                    navigate('/Gallery/Grad');
                }}>Grad Photos</li>
                <li className={`Gallery__selector-box--item${props.theme.color}`} onClick={() => {
                    switchCategory('Family')
                    navigate('/Gallery/Family');
                }}>Family Photos</li>
                <li className={`Gallery__selector-box--item${props.theme.color}`} onClick={() => {
                    switchCategory('Self')
                    navigate('/Gallery/Self')
                }
                }>Self Photos</li>
                <li className={`Gallery__selector-box--item${props.theme.color}`} onClick={() => {
                    switchCategory('Other')
                    navigate('/Gallery/Other')
                }
                }>Other Photos</li>
            </ul>
            <div className='Gallery__photos'>
                {category === 'All' ?
                    photos.map((image, index) => {
                        return (
                            <div className='photoBox'>
                                <img className='photogrid__photo' src={image.picture} onClick={() => setupLargeView(photos, index)} alt='all display' />
                            </div>
                        )
                    })
                    : null}
                {category === 'Grad' ?
                    gradPhotos.map((image, index) => {
                        return (
                            <div className='photoBox'>
                                <img className='photogrid__photo' src={image.picture} onClick={() => setupLargeView(gradPhotos, index)} alt='grad display' />
                            </div>
                        )
                    })
                    : null}
                {category === 'Family' ?
                    familyPhotos.map((image, index) => {
                        return (
                            <div className='photoBox'>
                                <img className='photogrid__photo' src={image.picture} onClick={() => setupLargeView(familyPhotos, index)} alt='family display' />
                            </div>
                        )
                    })
                    : null}
                {category === 'Self' ?
                    selfPhotos.map((image, index) => {
                        return (
                            <div className='photoBox'>
                                <img className='photogrid__photo' src={image.picture} alt='self display' onClick={() => setupLargeView(selfPhotos, index)} />
                            </div>
                        )
                    })
                    : null}
                {category === 'Other' ?
                    otherPhotos.map((image, index) => {
                        return (
                            <div className='photoBox'>
                                <img className='photogrid__photo' src={image.picture} onClick={() => setupLargeView(otherPhotos, index)} alt='other display' />
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
                            <div className='scrollArrowBackground' id={`galleryArrowBackgroundLarge${props.theme.color}`}><img id='galleryArrowLeft' src={dropDownArrow} alt='arrow right' onClick={() => setLargeViewIndex(largeViewIndex - 1)} />
                            </div>
                            : null}
                        <div className='largeView__close' onClick={(e) => {
                            disableLargeView()
                        }}><img className='largeView__close-icon' src={closeButton} alt='close' /></div>
                        <div className='largeView__picture-background'>
                            <img className='largeView__picture-photo' src={largeViewPhotos[largeViewIndex].picture} alt='selected display' />
                        </div>
                        {largeViewIndex + 1 < largeViewPhotos.length ?
                            <div className='scrollArrowBackground' id={`galleryArrowBackgroundLarge${props.theme.color}`}>
                                <img id='galleryArrowRight' alt='arrow right' src={dropDownArrow} onClick={() => setLargeViewIndex(largeViewIndex + 1)} />
                            </div>
                            : null}
                    </div>
                </div>

                : null}

        </div>
    )
}
export default Gallery;