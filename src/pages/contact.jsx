import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
    margin: 0 10%;
    height: 85vh;
    position: relative;
    display:flex;
    justify-content:center;
    align-items: center;
    background: #e5e6e8;
    flex-direction: column;
`;

const IconContainer = styled.div`
    display: flex;
`;

const IconWrapper = styled.a`
    padding: 2rem;
    font-size: 4rem;
    margin: 2rem;
    color: #aaa;

    &:hover {
        color: #333;
    }
`;

const Facebook = styled(IconWrapper)`
    &:hover {
        color: #4267b2;
    }
`

const Instagram = styled(IconWrapper)`
    &:hover {
        color: #DFA39C;
    }
`

const Youtube = styled(IconWrapper)`
    &:hover {
        color: #ED3833;
    }
`
const Email = styled.div`
    font-size: 1.5rem;
`;

const Contact = styled.h1`
    font-size: 3rem;
    color: #aaa;
`;

const ContactPage = () => (
    <PageWrapper>
        <Contact>Contact Us</Contact>
        <IconContainer>
            <Facebook href="https://www.facebook.com/thepartyonhighstreet">
                <i className="fa fa-facebook"></i>
            </Facebook>
            <Instagram href="https://www.instagram.com/thepartyonhighstreet">
                <i className="fa fa-instagram"></i>
            </Instagram>
            <Youtube href="https://www.youtube.com/user/partyonhighstreet/videos">
                <i className="fa fa-youtube"></i>
            </Youtube>
        </IconContainer>
        <Email>thepartyonhighstreet@hotmail.com</Email>
    </PageWrapper>
);

export default ContactPage;