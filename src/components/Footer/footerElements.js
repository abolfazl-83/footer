import styled, {css} from 'styled-components';
import {ImFacebook2 , ImInstagram} from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

export const footerItemTitles = css`
    margin-bottom : 2rem;
    font-weight : 550;
    position : relative;
    width : fit-content;
    font-size : 2.5rem;
    padding-bottom : 0.6rem;
    text-transform : capitalize;

    &::after{
        content : '';
        width : 50%;
        position : absolute;
        bottom : 0;
        left : 50%;
        transform : translate(-50% , -50%);
        background : orange;
        height : 3px;
    }
`;
export const footerItemItems = css`
    margin-bottom : 1rem;
    font-size : 1.6rem;
    font-weight : 450;
    transition : all 0.3s;
    text-transform : capitalize;
    transition-timing-function : linear;
    
    &:hover{
        cursor: pointer;
        color : orange;
        transform : matrix(1.1, 0, 0, 1.1, 0 ,-1);
    }
`;


export const PrivacyContainerItems = css`
    margin-bottom : 1rem;
    font-size : 1.6rem;
    font-weight : 450;
    transition : all 0.3s;
    text-transform : capitalize;
    transition-timing-function : linear;
    &:hover{
        cursor: pointer;
        transform : matrix(1.1, 0, 0, 1.1, 0 ,-1);
        color : orange;
    }
`;

export const FooterContainer = styled.section`
    width : 100%;
    max-height : 1100px;
    background : #3d74f5;
    padding : 2rem 0;
`;
export const Logo = styled.h1`
    text-transform : uppercase;
    font-weight : 500;
    letter-spacing :  0.50rem;
    color : white;
    text-align : center;
`;


export const FooterContentContainer = styled.div`
    width : 100%;
    color : white;
    padding : 4rem 3.5rem;
    display : grid;
    grid-template-columns  : 1fr 1fr;
    grid-template-rows : 1fr 1fr;
    grid-column-gap : 4.5rem;
    grid-row-gap : 2rem;
    justify-items : center;

    @media only screen and (min-width : 768px) {
        grid-template-columns : repeat(4 , 1fr);
        grid-template-rows : 1fr;
    }
`;

export const FooterSection = styled.div`

`;

export const FooterItemTitle = styled.h2`
    ${footerItemTitles};
`;
export const FooterItemName = styled.p`
    ${footerItemItems};
`;
export const SocialMediaItem = styled.div`
    display : flex;
    flex-direction : row;
    transition : all 0.2s;
    transition-timing-function : linear;
    &:hover{
        color : orange;
        transform : matrix(1.1, 0, 0, 1.1, 0 ,-1);
    }
`;
export const SocialMediaName = styled.p`
    ${footerItemItems};
    margin-left : 1rem;
`;

export const FacebookIcon  = styled(ImFacebook2)`

`;
export const InstagramIcon  = styled(ImInstagram)`

`;
export const EmailIcon  = styled(MdEmail)`

`;

export const PrivacyContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    color : white;
`;
export const Privacy = styled.p`
    ${PrivacyContainerItems};
`;
export const Terms = styled.p`
    ${PrivacyContainerItems};
`;
