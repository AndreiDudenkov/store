import arrowLeft from "@/assets/icons/ArrowLeft.svg";
import arrowRight from "@/assets/icons/ArrowRight.svg";
import kappa from "@/assets/images/Kappa.png";
import sneakers1 from "@/assets/images/Sneakers1.png";
import sneakers2 from "@/assets/images/Sneakers2.png";
import sneakers3 from "@/assets/images/Sneakers3.png";
import sneakers4 from "@/assets/images/Sneakers4.png";

import s from "@/components/page/body/body.module.scss";

export const Body = () => {
  return (
    <div className={s.body}>
      <div className={s.navAndProductName}>
        <div className={s.nav}>
          <div className={s.catalog}>
            Каталог
            <div className={s.category}>
              / Обувь
              <div className={s.category}>
                / Кроссовки
                <div className={s.category}>/ Беговые</div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.productName}>
          Кроссовки мужские Skechers Sunny Dale
        </div>
      </div>
      <div className={s.productCard}>
        <div className={s.imageAndSlider}>
          <img alt={"kappa"} className={s.bigImage} src={kappa} />
          <div className={s.slider}>
            <div className={s.sliderTrigger}>
              <img alt={"arrowLeft"} className={s.arrowLeft} src={arrowLeft} />
            </div>
            <img alt={"sneakers1"} className={s.sliderImage} src={sneakers1} />
            <img alt={"sneakers2"} className={s.sliderImage} src={sneakers2} />
            <img alt={"sneakers3"} className={s.sliderImage} src={sneakers3} />
            <img alt={"sneakers4"} className={s.sliderImage} src={sneakers4} />
            <div className={s.sliderTrigger}>
              <img
                alt={"arrowRight"}
                className={s.arrowRight}
                src={arrowRight}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
