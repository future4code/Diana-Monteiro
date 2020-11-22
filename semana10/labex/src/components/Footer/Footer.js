import React from "react";
import logo from "../../assets/logo2.png";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import {
  DivFooter,
  SectionLinks,
  SectionLogo,
  DivMedias,
  DivTop,
  DivBottom,
  Copyright,
  ImgLogo,
  ImgMedia,
  LinkImg,
  Link,
  Title,
  Adress,
} from "./styled";

const Footer = () => {
  return (
    <DivFooter>
      <DivTop>
        <SectionLogo>
          <ImgLogo src={logo} />
          <Adress>
            34th Ave, Hawthorne, California, EUA, 11106. <br />
            +1 (800) 123 45 45
          </Adress>
        </SectionLogo>
        <SectionLinks>
          <Title>Developer</Title>
          <Link href="https://github.com/DiaMont30" target="_blank">
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/diana-monteiro-b8565510b/"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5521965795557"
            target="_blank"
          >
            Whatsapp
          </Link>
        </SectionLinks>
        <SectionLinks>
          <Title>Social</Title>
          <Link href="https://facebook.com/" target="_blank">
            Facebook
          </Link>
          <Link href="https://twitter.com/login?lang=pt" target="_blank">
            Twitter
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            Instagram
          </Link>
        </SectionLinks>
      </DivTop>

      <DivBottom>
        <DivMedias>
          <LinkImg href="https://twitter.com/login?lang=pt" target="_blank">
            <ImgMedia src={twitter} />
          </LinkImg>
          <LinkImg href="https://www.instagram.com/" target="_blank">
            <ImgMedia src={instagram} />
          </LinkImg>
          <LinkImg href="https://facebook.com/" target="_blank">
            <ImgMedia src={facebook} />
          </LinkImg>
        </DivMedias>
        <div>
          <Copyright>
            <Link href="https://github.com/DiaMont30" target="_blank">
              Diana Monteiro
            </Link>{" "}
            © 2020. ALL RIGHTS RESERVED.
          </Copyright>
        </div>
      </DivBottom>
    </DivFooter>
  );
};

export default Footer;
