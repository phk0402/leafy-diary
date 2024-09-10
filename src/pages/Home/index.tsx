import * as S from "./style";
import CommonLayOut from "~/layout/CommonLayout";
import Card from "~/components/common/Card";
import PlantImg from "~/assets/img/plant.png";
import Box from "~/components/common/Box";
import useRoute from "~/hooks/useRoute";
import { useQuery } from "@tanstack/react-query";
import { API } from "~/api";

export default function Home() {
  const routeTo = useRoute();

  // 식물 목록을 Trefle API에서 가져오는 함수
  const getPlantsList = async () => {
    const { data } = await API.get(`/plants`);
    return data;
  };

  const HomeQueryKeys = {
    HomePlantsList: () => ["home-plants-list"],
  };

  function useGetPlantsList() {
    return useQuery({
      queryKey: HomeQueryKeys.HomePlantsList(),
      queryFn: getPlantsList,
    });
  }

  // React Query로 데이터 가져오기
  const { data, isLoading, isError } = useGetPlantsList();

  // 로딩 상태 처리
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 에러 처리
  if (isError) {
    return <div>Error loading plant list</div>;
  }

  interface Plant {
    image_url?: string;
    common_name?: string;
  }

  // API에서 받아온 식물 데이터 (data)를 사용하여 렌더링
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
          {data.data?.map((plant: Plant, index: number) => (
            <li className="plant-item" key={index}>
              <Card>
                <div className="img-wrap">
                  <img
                    src={plant.image_url || PlantImg}
                    alt={plant.common_name || "Unknown Plant"}
                  />
                </div>
                <h3>{plant.common_name || "Unknown Plant"}</h3>
              </Card>
            </li>
          ))}
        </S.PlantList>
      </S.PlantListSection>
    </CommonLayOut>
  );
}
