import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { useState } from "react";

import { Header } from "./components/header/Header";
import { Modal } from "./shared/Modal/Modal";
import { Form } from "./components/form/Form";
import { Icons } from "./components/icons/Icons";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  const { pathname } = useLocation();
  const [isOpenForm, toggleIsOpenForm] = useState(false);

  return (
    <>
      <Header />
      <Icons />
      <Routes>
        <Route
          path="/"
          element={<HomePage toggleIsOpenForm={toggleIsOpenForm} />}
        />
      </Routes>
      <Footer />
      <Modal isOpen={isOpenForm} onClose={toggleIsOpenForm}>
        <Form toggleIsOpen={toggleIsOpenForm} />
      </Modal>
    </>
  );
};
