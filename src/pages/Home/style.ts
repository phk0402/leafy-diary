import styled from "styled-components";

export const IntroSection = styled.section`
  height: 50%;
  background-color: var(--point-color);
  padding: 50px 20px;
  position: relative;

  .img-wrap {
    width: 300px;
    height: 80%;
    overflow: hidden;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  .oval-door {
    width: 340px;
    height: calc(100% - 60px);
    background-color: #f4f3e9;
    border-radius: 50% 50% 0 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .side-intro-phrase {
    width: fit-content;
    position: absolute;
    top: 50%;
    left: calc((100% / 3) - 300px);
    transform: translateY(-50%);
  }
`;

export const MainPhrase = styled.p`
  color: #f8f8f8;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.4;
`;

export const PlantListSection = styled.section``;

export const PlantListTitle = styled.h2`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 20px;
  font-weight: 500;
`;

export const PlantList = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 2fr));

  .plant-item {
    height: 300px;

    &:not(:disabled):hover .img-wrap {
      transform: scale(1.1);
      transition: 0.3s;
    }

    .c__card {
      overflow: hidden;
    }

    .img-wrap {
      width: 100%;
      height: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;
