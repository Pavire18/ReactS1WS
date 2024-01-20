import './CustomButton.css';

const CustomButton = (props) =>{
    return <a href={props.link} className="button" target="_blank">{props.text}</a>
}

export default CustomButton;