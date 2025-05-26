import { useResize } from '../../../hooks/useRessize';
import { Menu } from './menu/Menu';
import { MobileMenu } from './mobileMenu/MobileMenu';
import cls from './navBar.module.scss';

export const NavBar = () => {
    const resize768 = useResize(768);

    return (
        <div className={cls.navBar}>
           {resize768 ? <Menu /> : <MobileMenu />}
        </div>
    );
};
