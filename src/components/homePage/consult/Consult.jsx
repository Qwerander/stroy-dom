import { Layout } from "../../../shared/layout/Layout";
import cls from "./consult.module.scss";

export const Consult = () => {
  return (
    <div className={cls.Consult}>
      <Layout>
        <div className={cls.consultationBlock}>
          <div className={cls.content}>
            <p className={cls.text}>
              Вам необходима консультация по строительству дома? Произвести
              расчет или подобрать оптимальный вариант?
            </p>
            <p className={cls.text}>
              Наш менеджер с радостью поможет вам с этим!
            </p>
          </div>
          <button className={cls.button} type="button">
            Позвонить
          </button>
        </div>
      </Layout>
    </div>
  );
};
