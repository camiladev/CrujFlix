import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button';



function Menu({disabletag,buttonMenuW, buttonMenuL}) {
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="MamaFlix Logo" />
            </Link>

            <Button disabletag={disabletag} buttonMenuW={buttonMenuW} buttonMenuL={buttonMenuL} as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>

        </nav>
    );
}

export default Menu; 