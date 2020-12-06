import React from "react";
import {
  DivFooter,
  ImgMedia,
  DivImg,
  DivTop,
  DivText,
  Copyright,
  Link,
} from "./styled";

const Footer = () => {
  return (
    <DivFooter>
      <DivTop>
        <DivText>
          <Link href="https://github.com/DiaMont30" target="_blank">
            Desenvolvedora: Diana Monteiro
          </Link>
        </DivText>
        <DivImg>
          <a href="https://github.com/DiaMont30" target="_blank">
            <ImgMedia src="https://www.flaticon.com/svg/static/icons/svg/270/270808.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/diana-monteiro-b8565510b/"
            target="_blank"
          >
            <ImgMedia src="https://www.flaticon.com/svg/static/icons/svg/270/270798.svg" />
          </a>
        </DivImg>
      </DivTop>
      <Copyright>Copyright © 2020</Copyright>
    </DivFooter>
  );
};

export default Footer;
