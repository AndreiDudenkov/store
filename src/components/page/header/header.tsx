import arrow from "@/assets/icons/Arrow.svg";
import bell from "@/assets/icons/Bell.svg";
import cart from "@/assets/icons/Cart.svg";
import cross from "@/assets/icons/Cross.svg";
import like from "@/assets/icons/Like.svg";
import line from "@/assets/icons/Line.svg";
import menu from "@/assets/icons/Menu.svg";
import search from "@/assets/icons/Search.svg";
import logo from "@/assets/icons/Vector.svg";
import avatar from "@/assets/images/Avatar.png";
import { Button } from "@/components/ui/button/button";

import s from "@/components/page/header/header.module.scss";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <div className={s.companyNameLogo}>
          <img alt={"logo"} className={s.compoLogo} src={logo} />
        </div>
        <Button icon={menu} name={"Меню"} variant={"primary"} />
        <div className={s.inputWrapper}>
          <input
            className={s.input}
            defaultValue={"Название запроса"}
            type={"text"}
          />
          <div className={s.iconsCrossSearchWrapper}>
            <img alt={"cross"} className={s.cross} src={cross} />
            <img alt={"search"} className={s.search} src={search} />
          </div>
        </div>
        <img alt={"bell"} className={s.bell} src={bell} />
        <img alt={"line"} className={s.line} src={line} />
        <img alt={"like"} className={s.like} src={like} />
        <Button icon={cart} name={"144 235₽"} variant={"secondary"} />
        <div className={s.user}>
          <img alt={"avatar"} className={s.avatar} src={avatar} />
          <p className={s.userName}>Ермаков Е.</p>
          <img alt={"arrow"} className={s.arrow} src={arrow} />
        </div>
      </div>
      <hr className={s.hr} />
      <div className={s.navigation}>
        <div className={s.links}>
          <div className={s.link}>Мои заказы</div>
          <div className={s.link}>Сотрудники</div>
          <div className={s.link}>Шаблоны заказов</div>
          <div className={s.link}>Обращения</div>
        </div>
      </div>
      <hr className={s.hr} />
    </div>
  );
};
