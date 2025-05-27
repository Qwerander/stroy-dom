import { About } from "../../components/homePage/about/About";
import { Construction } from "../../components/homePage/construction/Construction";
import { Consult } from "../../components/homePage/consult/Consult";
import { Faq } from "../../components/homePage/faq/Faq";
import { Hero } from "../../components/homePage/hero/Hero";
import { Services } from "../../components/homePage/services/Services";
import { Layout } from "../../shared/layout/Layout";
import cls from "./HomePage.module.scss";

export const HomePage = ({ toggleIsOpenForm }) => {
  return (
    <>
      <Hero toggleIsOpenForm={toggleIsOpenForm} />
      <Services toggleIsOpenForm={toggleIsOpenForm} />
      <About toggleIsOpenForm={toggleIsOpenForm} />
      <Consult toggleIsOpenForm={toggleIsOpenForm} />
      <Construction toggleIsOpenForm={toggleIsOpenForm} />
      <Faq toggleIsOpenForm={toggleIsOpenForm} />
      {/* <Layout>
        <Expert />
      </Layout>
      <div className={cls.background__program} id="services">
        <Layout>
          <Services />
        </Layout>
      </div>
      <Layout>
        <Audit toggleIsOpenForm={toggleIsOpenForm} />
      </Layout>
      <Layout>
        <div className={cls.ContactsPage} id="contacts">
          <Form toggleIsOpen={() => {}} />
        </div>
      </Layout> */}
    </>
  );
};
