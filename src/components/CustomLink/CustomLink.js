
import CustomButton from '../CustomButton/CustomButton';
import './CustomLink.css';

const CustomLink = (props) => {

    return props.type==="button" ?
    <CustomButton link={props.link} text={props.text}/> :
    <a href={props.link} className="link" target="_blank">{props.text}</a>
}


export default CustomLink;