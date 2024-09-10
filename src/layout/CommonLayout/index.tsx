import { PropsWithChildren } from "react";
import { CommonLayoutProps } from "~/types/Layout";
import Footer from "../Footer";
import Header from "../Header";
import * as S from "./style";

export default function CommonLayOut({
  page,
  children,
}: PropsWithChildren<CommonLayoutProps>) {
  return (
    <main>
      <Header />
      <S.ContentsContainer className={`p__${page}`}>
        {children}
        <Footer />
      </S.ContentsContainer>
    </main>
  );
}
