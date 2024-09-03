import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 20px;
  position: relative;
`;

export const LogoTitle = styled.h1`
  color: var(--point-color);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 20px;
  cursor: pointer;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  border-radius: 20px;
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

export const MenuItem = styled.li`
  padding: 4px 8px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  cursor: pointer;

  &:not(:disabled):hover,
  &:not(:disabled).active {
    color: var(--hover-color);
    transition: 0.3s;
  }
`;
