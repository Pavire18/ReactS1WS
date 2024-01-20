import logo from './TheValley.png';
import CustomImage from '../CustomImage/CustomImage';
import CustomLink from '../CustomLink/CustomLink';
import './CustomHeader.css';

const CustomHeader = () =>{


    return (
        <header className="header">
        <div className="header__links1">
            <CustomLink link="https://es-es.facebook.com/" text="Facebook" />
            <CustomLink link="https://www.instagram.com/" text="Instagram"/>
            <CustomLink link="https://twitter.com/" text="Twitter"/>
        </div>
        <CustomImage src={logo} />
        <div className="header__links2">
            <CustomLink link="https://create-react-app.dev/docs/getting-started" text="Docu React"/>
            <CustomLink link="https://thevalley.es/" text="Ir a The Valley" type="button"/>
        </div>
      </header>
    )
}

export default CustomHeader;