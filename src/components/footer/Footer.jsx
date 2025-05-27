// Footer.jsx
import React from "react";
import cls from "./Footer.module.scss";
import { Layout } from "../../shared/layout/Layout";

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <Layout>
        <div className={cls.container}>
          <div className={cls.contacts}>
            <h3 className={cls.title}>Контакты</h3>
            <address className={cls.address}>
              <p>630591 г. Уфа, Республика</p>
              <p>Санис-восточная, 12</p>
              <p>Ежедневно с 10:00 до 19:00</p>
              <p>
                <a href="mailto:info@attoyolom-praekt.pro" className={cls.link}>
                  info@attoyolom-praekt.pro
                </a>
              </p>
            </address>

            <div className={cls.phones}>
              <p>
                <a href="tel:+73472576039" className={cls.link}>
                  +7 (347) 257-60-39
                </a>
              </p>
              <p>
                <a href="tel:+79870389565" className={cls.link}>
                  +7 (987) 038-95-65
                </a>
              </p>
            </div>
          </div>

          <div className={cls.actions}>
            <button className={cls.checkButton}>Позвонить</button>
          </div>
        </div>
      </Layout>
      <Layout>
        <div className={cls.copyright}>
          <p>2025 Строй Дом Проект</p>
        </div>
      </Layout>
    </footer>
  );
};
