import cls from "./About.module.scss";
import { ReactComponent as Icon1 } from "../../../assets/img/about/about1.svg";
import { ReactComponent as Icon2 } from "../../../assets/img/about/about2.svg";
import { ReactComponent as Icon3 } from "../../../assets/img/about/about3.svg";
import { ReactComponent as Icon4 } from "../../../assets/img/about/about4.svg";
import { Layout } from "../../../shared/layout/Layout";

export const About = ({ toggleIsOpenForm }) => {
  // const [isOpen, toggleIsOpen] = useState(false);

  return (
    <div className={cls.backgroundAbout}>
      <Layout>
        <div className={cls.about}>
          <div className={cls.aboutBlock}>
            <Icon1 />
            <p>Работаем с материнским капиталом</p>
          </div>
          <div className={cls.aboutBlock}>
            <Icon2 />
            <p>Помогаем сэкономить 13% на строительстве</p>
          </div>
          <div className={cls.aboutBlock}>
            <Icon3 />
            <p>Строим дома в кредит и ипотеку</p>
          </div>
          <div className={cls.aboutBlock}>
            <Icon4 />
            <p>Даем скидки на страхование дома</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};
