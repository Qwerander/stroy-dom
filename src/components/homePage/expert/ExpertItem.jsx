import cls from './expert.module.scss'

export const ExpertItem = ({icon, title, list}) => {
    return (
        <div className={cls.expertItem}>
            <img src={icon} alt={title} />
            <div className={cls.expertInner}>
                <h3 className={cls.expertTitle}>{title}</h3>
                <ul className={cls.expertList}>
                    {list.map((item, i) => {
                        return (
                            <li key={i} className={cls.expertListItem}>
                                {item}
                            </li>
                        )
                    } )}
                </ul>
            </div>
        </div>
    );
}