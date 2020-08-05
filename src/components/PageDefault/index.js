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
    width: 50%; /*mobile 100% descktop 50% */

    @media(max-width: 800px){
        width: 100%;
    }

    ${({ paddingAll }) => css `
        padding: ${paddingAll};
    `}

    
`;

function PageDefault({ children, paddingAll}) {
    return (
        <>
            <Menu />
                <Main paddingAll = {paddingAll}>
                    {children}
                </Main>
                
            <Footer />

        </>
        
    );
}

export default PageDefault;