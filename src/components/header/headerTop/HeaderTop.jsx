import cls from "./HeaderTop.module.scss";
// import { ReactComponent as Logo } from '../../img/logo/logo-dark.svg';
import { ReactComponent as PinSVG } from "../../../assets/icons/pin.svg";
import { ReactComponent as ClockSVG } from "../../../assets/icons/clock.svg";
import { ReactComponent as MailSVG } from "../../../assets/icons/mail.svg";
import { ReactComponent as PhoneSVG } from "../../../assets/icons/phone.svg";
// import { HeaderSocial } from "../headerSocial/HeaderSocial";
import { useResize } from "../../../hooks/useRessize";
import { NavLink } from "react-router-dom";
import { SvgText } from "../../../shared/SvgText/SvgText";
import { Layout } from "../../../shared/layout/Layout";

export const HeaderTop = () => {
  const resize560 = useResize(570);
  return (
    <div className={cls.headerTop}>
      <Layout>
        <div className={cls.headerTopWrapper}>
          <div className={cls.headerBlock}>
            <SvgText
              Svg={PinSVG}
              text={
                "г. Уфа, Республика Башкортостан, г. Уфа, ул. Солнечногорская, 12"
              }
              textStyle={cls.headerText}
            />
            <SvgText
              Svg={ClockSVG}
              text={"Ежедневно с 10:00 до 19:00"}
              textStyle={cls.headerText}
            />
          </div>
          <div className={cls.headerBlock}>
            <a href="mailto: info@stroydom-proekt.pro">
              <SvgText
                Svg={MailSVG}
                text={"info@stroydom-proekt.pro"}
                textStyle={cls.headerText}
                nowrap
              />
            </a>
            {/* <HeaderSocial /> */}
          </div>
          <div className={cls.headerBlock}>
            <a href="tel: +73472570039">
              <SvgText
                Svg={PhoneSVG}
                text={"+7 (347) 257-00-39"}
                textStyle={cls.headerText}
                nowrap
              />
            </a>
            <a href="tel: +79870389565">
              <SvgText
                Svg={PhoneSVG}
                text={"+7 (987) 038-95-65"}
                textStyle={cls.headerText}
                nowrap
              />
            </a>
          </div>
        </div>
      </Layout>
    </div>
  );
};
