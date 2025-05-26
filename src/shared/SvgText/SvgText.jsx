import cls from "./SvgText.module.scss";

export const SvgText = ({ Svg, svgStyle, text, textStyle, nowrap }) => {
  return (
    <div className={cls.svgWrap}>
      <Svg className={`${cls.svg} ${svgStyle}`} />
      <p className={`${cls.text} ${textStyle} ${nowrap ? cls.nowrap : ''} `}>{text}</p>
    </div>
  );
};
