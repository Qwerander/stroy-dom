import { NavLink } from 'react-router-dom';
import cls from './menu.module.scss';

export const Menu = () => {
  return (
    <nav className={cls.menu}>
      {/* <NavLink to='/'>Главная</NavLink> */}
      <a href='#services'>Услуги</a>
      {/* <NavLink to='/about'>О компании</NavLink> */}
      <a href='#contacts'>Контакты</a>
      {/* <NavLink to='/'>Обучение</NavLink>
      <NavLink to='/'>О&nbsp;компании</NavLink> */}
    </nav>
  );
};
