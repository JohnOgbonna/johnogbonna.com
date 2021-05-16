import coverPhoto from '../assets/photos/self/coverphoto.JPG'; 
import './webpage.scss';
import NavBar from '../tools/navbar/navbar'

function Webpage() {
    return (
        <div className="Webpage">
            <img src={coverPhoto} className="coverPhoto" id="coverPhoto" /> 
            <NavBar/> 
        </div>
    );
}

export default Webpage;