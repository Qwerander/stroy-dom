import cls from './footerBlock.module.scss';
import { FooterMenuBlock } from './FooterMenuBlock';

export const FooterBottom = () => {
    return (
        <div className={cls.footer__bottom}>
            {/* <FooterLogo /> */}
            <FooterMenuBlock />
        </div>
    );
};
