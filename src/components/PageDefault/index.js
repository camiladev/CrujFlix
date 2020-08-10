import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled, { css} from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    width: 100%; /*mobile 100% descktop 50% */

    @media(max-width: 800px){
        width: 100%;
    }

    ${({ paddingAll }) => css `
        padding: ${paddingAll};
    `}

    ${({ widthForm }) => css `
        width: ${widthForm}%;
    `}

    
`;

function PageDefault({ children, paddingAll, widthForm, disabletag}) {
    return (
        <>
            <Menu disabletag = {disabletag}></Menu>
                <Main paddingAll = {paddingAll} widthForm= {widthForm} >
                    {children}
                </Main>
                
            <Footer />

        </>
        
    );
}

export default PageDefault;