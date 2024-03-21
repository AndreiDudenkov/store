import { Body } from "@/components/page/body/body";
import { Footer } from "@/components/page/footer/footer";
import { Header } from "@/components/page/header/header";

import s from "@/components/page/storePage.module.scss";

export const StorePage = () => {
  return (
    <div className={s.page}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
