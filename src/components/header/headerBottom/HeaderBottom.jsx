import cls from "./HeaderBottom.module.scss";
import { Layout } from "../../../shared/layout/Layout";
import { NavLink } from "react-router-dom";
import { NavBar } from "../nav/NavBar";
import { ReactComponent as LogoSVG } from "../../../assets/logo.svg";

export const HeaderBottom = () => {
  return (
    <div className={cls.headerBottom}>
      <Layout>
        <div className={cls.headerWrap}>
          <div className={cls.headerInner}>
            <NavLink to="/">
              <LogoSVG className={cls.headerLogo} />
            </NavLink>

            <NavBar />
          </div>
        </div>
      </Layout>
    </div>
  );
};
