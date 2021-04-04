import React from 'react';
import {
    FooterContainer,
    Logo,
    FooterContentContainer,
    FooterSection,
    FooterItemTitle,
    FooterItemName,
    SocialMediaItem,
    SocialMediaName,
    FacebookIcon,
    InstagramIcon,
    EmailIcon,
    PrivacyContainer,
    Privacy,
    Terms
} from './footerElements';


const Footer = () => {
    return (
        <FooterContainer>
            <Logo>pexlez</Logo>
            <FooterContentContainer>
                <FooterSection>
                    <FooterItemTitle>about us</FooterItemTitle>
                    <FooterItemName>story</FooterItemName>
                    <FooterItemName>clients</FooterItemName>
                    <FooterItemName>testiomonials</FooterItemName>
                </FooterSection>
                <FooterSection>
                    <FooterItemTitle>services</FooterItemTitle>
                    <FooterItemName>marketing</FooterItemName>
                    <FooterItemName>consulting</FooterItemName>
                    <FooterItemName>development</FooterItemName>
                    <FooterItemName>design</FooterItemName>
                </FooterSection>
                <FooterSection>
                    <FooterItemTitle>contact us</FooterItemTitle>
                    <FooterItemName>united states</FooterItemName>
                    <FooterItemName>united kingdom</FooterItemName>
                    <FooterItemName>austrialia</FooterItemName>
                    <FooterItemName>support</FooterItemName>
                </FooterSection>
                <FooterSection>
                    <FooterItemTitle>Social</FooterItemTitle>
                    <SocialMediaItem>
                        <FacebookIcon></FacebookIcon>
                        <SocialMediaName>facebook</SocialMediaName>
                    </SocialMediaItem>
                    <SocialMediaItem>
                        <InstagramIcon></InstagramIcon>
                        <SocialMediaName>instagram</SocialMediaName>
                    </SocialMediaItem>
                    <SocialMediaItem>
                        <EmailIcon></EmailIcon>
                        <SocialMediaName>email</SocialMediaName>
                    </SocialMediaItem>
                </FooterSection>
            </FooterContentContainer>
            <PrivacyContainer>
                <Privacy>privacy policy | &nbsp;</Privacy>
                <Terms>terms & conditions</Terms>
            </PrivacyContainer>
        </FooterContainer>
    );
};

export default Footer;