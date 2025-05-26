import { Title } from "../../../shared/title/Title";
import cls from "./audit.module.scss";
import { AuditItem } from "./AuditItem";

export const Audit = ({ toggleIsOpenForm }) => {
  return (
    <div className={cls.audit}>
      <Title title={"Предлагаем начать с бесплатного экспресс-аудита"} />
      <div className={cls.auditWrapper}>
        <AuditItem
          text={
            "Выявление налоговых рисков и рекомендации по оптимизации налогового учёта. Вы увидите возможные проблемы раньше налоговой службы и будете знать, как исправить ситуацию."
          }
        />
        <AuditItem
          text={
            "Выявление существенных недостатков в данных учета. Оценка рисков для бизнеса и рекомендации по выявленным недостаткам."
          }
        />
        <AuditItem
          text={
            "Оценка полноты и своевременности сдачи отчётности, наличие задолженности по отчётам за последние 2 года."
          }
        />
        <AuditItem
          text={
            "Анализ системы внутренних нормативных актов и наличия всех необходимых документов."
          }
        />
        <p className={cls.auditText}>
          Для проведения аудита вы предоставляете доступ в текущую базу бухучета
          и первичную документацию. Аудит длится 3-4 часа, а вы получаете отчет
          с рекомендациями.
        </p>
        <button className={cls.auditBtn} onClick={() => toggleIsOpenForm(true)}>
          Получить бесплатный аудит
        </button>
      </div>
    </div>
  );
};
