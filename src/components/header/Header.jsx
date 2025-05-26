import cls from "./Header.module.scss";
import { NavBar } from "./nav/NavBar";
import { Layout } from "../../shared/layout/Layout";
import { Modal } from "../../shared/Modal/Modal";
import { useState } from "react";
// import { ReactComponent as LogoSVG } from "../../assets/icons/homePage/1c-logo.svg";
import { useResize } from "../../hooks/useRessize";
import { NavLink } from "react-router-dom";
import { HeaderTop } from "./headerTop/HeaderTop";
import { HeaderBottom } from "./headerBottom/HeaderBottom";

export const Header = () => {
  const [isOpenPayForm, toggleIsOpenPayForm] = useState(false);
  const resize560 = useResize(570);
  return (
    <>
      <div className={cls.header}>
        <HeaderTop />
        <HeaderBottom />
      </div>
    </>
  );
};
