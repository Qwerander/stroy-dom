import cls from "./icons.module.scss";
import { ReactComponent as WhatsApp } from "../../assets/icons/watsup.svg";
// import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Viber } from "../../assets/icons/youtube.svg";
import { ReactComponent as Phone } from "../../assets/icons/vk.svg";

export const Icons = () => {
  return (
    <div className={cls.floatingContainer}>
      <div className={cls.iconsWrapper}>
        <a
          href="https://wa.me/yournumber"
          className={cls.iconLink}
          aria-label="WhatsApp"
        >
          <WhatsApp className={cls.icon} />
        </a>
        {/* <a
          href="tg://resolve?domain=yourusername"
          className={cls.iconLink}
          aria-label="Telegram"
        >
          <Telegram className={cls.icon} />
        </a> */}
        <a
          href="viber://chat?number=yournumber"
          className={cls.iconLink}
          aria-label="Viber"
        >
          <Viber className={cls.icon} />
        </a>
        <a href="tel:+yournumber" className={cls.iconLink} aria-label="Phone">
          <Phone className={cls.icon} />
        </a>
      </div>
    </div>
  );
};
