import bell from "@/assets/icons/Bell.svg";
import cart from "@/assets/icons/Cart.svg";
import cross from "@/assets/icons/Cross.svg";
import find from "@/assets/icons/Find.svg";
import like from "@/assets/icons/Like.svg";
import line from "@/assets/icons/Line.svg";
import menu from "@/assets/icons/Menu.svg";
import logo from "@/assets/icons/Vector.svg";
import { Button } from "@/components/ui/button/button";

import s from "@/components/page/header/header.module.scss";

export const Header = () => {
  return (
    <>
      <div className={s.upperWrapper}>
        <div className={s.companyNameLogo}>
          <img alt={"logo"} className={s.compoLogo} src={logo} />
        </div>
        <Button icon={menu} name={"Меню"} variant={"primary"} />
        <div>
          <input
            className={s.input}
            defaultValue={"Название запроса"}
            type={"text"}
          />
          <img alt={"cross"} className={s.cross} src={cross} />
          <img alt={"bell"} className={s.bell} src={find} />
        </div>
        <img alt={"bell"} className={s.bell} src={bell} />
        <img alt={"line"} className={s.line} src={line} />
        <img alt={"like"} className={s.like} src={like} />
        <Button icon={cart} name={"144 235₽"} variant={"secondary"} />
      </div>
      <div></div>
    </>
  );
};
