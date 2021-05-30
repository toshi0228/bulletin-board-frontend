import React, { ReactNode } from "react";

export interface ITextProps {
  children: ReactNode;
  color?: string;
  cursor?: "pointer";
  bold?: boolean;
  fs?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  textAlign?: "left" | "center" | "right";
  alignItems?: "center" | "selfStart"; //縦方向に中央寄せ
  lineHeight?: number;
  onClick?: () => void;
}

const Text: React.FC<ITextProps> = (props) => {
  const {
    children,
    color,
    cursor,
    bold,
    fs,
    mt,
    mb,
    mr,
    ml,
    textAlign,
    alignItems,
    lineHeight,
    onClick,
  } = props;

  const style = {
    color: color || "#00000",
    fontWeight: bold ? 700 : 400,
    fontFamily: "メイリオ",
    fontSize: fs || 16,
    marginTop: mt,
    marginBottom: mb,
    marginRight: mr,
    marginLeft: ml,
    lineHeight: `${lineHeight}px` || "normal",
    cursor: cursor || "auto",
    display: "flex",
    justifyContent: textAlign,
    alignItems: alignItems,
  };

  return (
    <div style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Text;
