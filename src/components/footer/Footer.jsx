import cls from "./Footer.module.scss";
import { Layout } from "../../shared/layout/Layout";
// import { FooterMenuBlock } from './footerComponents/FooterMenuBlock';
// import { FooterCategoryBlock } from './footerComponents/FooterCategoryBlock';
import { FooterPriceListBlock } from "./footerComponents/FooterPriceListBlock";
import { FooterContactsBlock } from "./footerComponents/FooterContactsBlock";
import { FooterMainBlock } from "./footerComponents/FooterMainBlock";
import { FooterBottom } from "./footerComponents/footerBottom";
import { FooterOutside } from "./footerComponents/FooterOutside";
import { FooterMap } from "./footerComponents/footerMap";

import { ReactComponent as PhoneSVG } from "../../assets/icons/phone.svg";
import { ReactComponent as MailSVG } from "../../assets/icons/mail.svg";
import { HeaderSocial } from "../../components/header/headerSocial/HeaderSocial";
import { FooterRekvizit } from "./footerComponents/FooterRekvizit";

export const Footer = () => {
  return (
    <div className={cls.footer}>
      <Layout>
        <div className={cls.footer__wrapper}>
          {/* <FooterMainBlock /> */}
          {/* <FooterMenuBlock />
                    <FooterCategoryBlock /> */}
          {/* <FooterPriceListBlock /> */}
          {/* <FooterContactsBlock /> */}

          <div className={cls.ContactsPage__contacts}>
            <h3>Пункт выдачи документов:</h3>
            <p>г. Уфа, ул.Красина, 21, офис 103</p>
            <h3>Всегда ответим:</h3>
            <div className={cls.ContactsPage__contacts}>
              <div className={cls.ContactsPage__phone}>
                <PhoneSVG />
                <a href="tel:+79196090700">+7 (919) 60 90 700</a>
              </div>
              <div className={cls.ContactsPage__mail}>
                <MailSVG />
                <a href="mailto: info@kvantexpert.ru">info@kvantexpert.ru</a>
              </div>
            </div>

            <div className={cls.ContactsPage__social}>
              <h4>Мы в соц. сетях:</h4>
              <HeaderSocial />
            </div>
          </div>
          <FooterMap />
        </div>
        {/* <FooterBottom /> */}
        <FooterRekvizit />
        <FooterOutside />
      </Layout>
    </div>
  );
};
