import useRoute from "~/hooks/useRoute";
import * as S from "./style";
import { useState, useEffect } from "react";

export default function Header() {
  const routeTo = useRoute();
  const [currentMenu, setCurrentMenu] = useState<string>("home");

  const menuList = [
    { menu: "home", to: "/" },
    { menu: "diary", to: "/diary" },
  ];

  useEffect(() => {
    const savedMenu = localStorage.getItem("currentMenu");
    if (savedMenu) {
      setCurrentMenu(savedMenu);
    } else {
      localStorage.setItem("currentMenu", "home");
    }
  }, []);

  const handleCurrentMenuClick = (menu: string, to: string) => {
    setCurrentMenu(menu);
    localStorage.setItem("currentMenu", menu);
    routeTo(to);
  };

  return (
    <S.HeaderContainer className="l__header">
      <S.LogoTitle onClick={() => routeTo("/")}>LEAFY DIARY</S.LogoTitle>
      <nav>
        <S.MenuList>
          {menuList.map((item, index) => (
            <S.MenuItem
              key={index}
              onClick={() => handleCurrentMenuClick(item.menu, item.to)}
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
