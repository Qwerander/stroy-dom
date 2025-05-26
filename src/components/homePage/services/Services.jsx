import cls from "./Services.module.scss";
import dom1 from "../../../assets/img/dom/dom1.webp";
import dom2 from "../../../assets/img/dom/dom2.webp";
import dom3 from "../../../assets/img/dom/dom3.webp";
import dom4 from "../../../assets/img/dom/dom4.webp";
import dom5 from "../../../assets/img/dom/dom5.webp";
import dom6 from "../../../assets/img/dom/dom6.webp";
import dom7 from "../../../assets/img/dom/dom7.webp";
import dom8 from "../../../assets/img/dom/dom8.webp";
import dom9 from "../../../assets/img/dom/dom9.webp";
import { Layout } from "../../../shared/layout/Layout";

const towns = [
  {
    img: dom1,
    title: "Монолитные дома хай-тек"
  },
  {
    img: dom2,
    title: "Дома из бруса"
  },
  {
    img: dom3,
    title: "Дома из кирпича"
  },
  {
    img: dom4,
    title: "Дома из бревна"
  },
  {
    img: dom5,
    title: "Каркасные дома"
  },
  {
    img: dom6,
    title: "Дома из пеноблоков"
  },
  {
    img: dom7,
    title: "Дома из СИП-панелей"
  },
  {
    img: dom8,
    title: "Дома из термобруса"
  },
  {
    img: dom9,
    title: "Дома из газобетона"
  }
];

export const Services = ({ toggleIsOpenForm }) => {
  // const [isOpen, toggleIsOpen] = useState(false);

  return (
    <Layout>
      <div className={cls.Services} id="services">
        {towns.map((t, i) => {
          return (
            <div className={cls.ServicesBlock} key={i}>
              <h3>{t.title}</h3>
              <img src={t.img} alt={t.title} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
