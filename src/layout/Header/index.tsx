import useRoute from "~/hooks/useRoute";
import * as S from "./style";
import { useState } from "react";

export default function Header() {
  const routeTo = useRoute();
  const [currentMenu, setCurrentMenu] = useState("home");

  const menuList = [
    { menu: "home", to: "/" },
    { menu: "diary", to: "/diary" },
  ];

  const handleCurrentMenuClick = (menu: string) => {
    setCurrentMenu(menu);
  };

  return (
    <S.HeaderContainer className="l__header">
      <S.LogoTitle onClick={() => routeTo("/")}>LEAFY DIARY</S.LogoTitle>
      <nav>
        <S.MenuList>
          {menuList.map((item, index) => (
            <S.MenuItem
              key={index}
              onClick={() => {
                handleCurrentMenuClick(item.menu);
                routeTo(item.to);
              }}
              className={`l__menu-item ${currentMenu === item.menu ? "active" : ""}`}
            >
              {item.menu}
            </S.MenuItem>
          ))}
        </S.MenuList>
      </nav>
    </S.HeaderContainer>
  );
}
