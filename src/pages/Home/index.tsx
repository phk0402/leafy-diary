import * as S from "./style";
import CommonLayOut from "~/layout/CommonLayout";
import Card from "~/components/common/Card";
import PlantImg from "~/assets/img/plant.png";
import Box from "~/components/common/Box";
import useRoute from "~/hooks/useRoute";

export default function Home() {
  const routeTo = useRoute();

  const PLANT_LIST = [
    {
      img: PlantImg,
      name: "야자수나무",
    },
    {
      img: PlantImg,
      name: "소나무",
    },
    {
      img: PlantImg,
      name: "떡잎나무",
    },
    {
      img: PlantImg,
      name: "도토리나무",
    },
    {
      img: PlantImg,
      name: "밤나무",
    },
  ];

  return (
    <CommonLayOut page="main">
      <S.IntroSection>
        <Box flexDirection="column" gap="30px" className="side-intro-phrase">
          <S.MainPhrase>
            Life in
            <br />
            love with
            <br />
            plants
          </S.MainPhrase>
          <button type="button" onClick={() => routeTo("/diary")}>
            Growing Together
          </button>
        </Box>
        <div className="img-wrap">
          <img src={PlantImg} alt="메인식물" />
        </div>
        <div className="oval-door" />
      </S.IntroSection>
      <S.PlantListSection>
        <S.PlantListTitle>PLANT LIST</S.PlantListTitle>
        <S.PlantList>
          {PLANT_LIST.map((item, index) => (
            <li className="plant-item" key={index}>
              <Card>
                <div className="img-wrap">
                  <img src={item.img} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
              </Card>
            </li>
          ))}
        </S.PlantList>
      </S.PlantListSection>
    </CommonLayOut>
  );
}
