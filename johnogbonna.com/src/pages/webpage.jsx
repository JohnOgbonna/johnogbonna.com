import coverPhoto from '../assets/photos/self/coverphoto.JPG'; 
import './webpage.scss';
import NavBar from '../tools/navbar/navbar' 
import Home from './sections/home'


function Webpage() {
    return (
        <div className="Webpage">
            <img src={coverPhoto} className="coverPhoto" id="coverPhoto" /> 
            <NavBar/> 
            <div className="displaySection">
            <Home/>
            </div>
        </div>
    );
}

export default Webpage;