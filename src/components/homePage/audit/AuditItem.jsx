import cls from './audit.module.scss';
import {ReactComponent as Icon} from '../../../assets/icons/homePage/audit/audit-icon.svg';

export const AuditItem = ({text}) => {
    return (
        <div className={cls.auditItem}>
            <Icon />
            <p className={cls.auditText}>{text}</p>
        </div>
    );
}