import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  position: absolute;
  z-index: 9;
`;

export const LogoTitle = styled.h1`
  color: #f8f8f8;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 24px;
  cursor: pointer;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 4px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  border-radius: 20px;
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
`;

export const MenuItem = styled.li`
  color: var(--point-color);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 4px 8px;
  cursor: pointer;

  &:not(:disabled):hover,
  &:not(:disabled).active {
    color: var(--primary-color);
    transition: 0.3s;
  }
`;
