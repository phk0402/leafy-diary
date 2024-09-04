import Card from "~/components/common/Card";
import CommonLayOut from "~/layout/CommonLayout";
import * as S from "./style";

export default function Home() {
  return (
    <CommonLayOut page="main">
      <section>
        <p>
          푸릇푸릇한 식물들의 여정, 매일매일의 작은 변화가 무성한 초록의 세계로
          안내합니다.
        </p>
        <p>이 여정을 함께 기록해보세요.</p>
      </section>
      <section>
        <h2>식물 목록</h2>
        <S.PlantList className="plant-list">
          <li className="plant-item">
            <Card>
              <div className="img-wrap">
                <img src="" alt="" />
              </div>
              <h3>야자수나무</h3>
            </Card>
          </li>
          <li className="plant-item">
            <Card>
              <div className="img-wrap">
                <img src="" alt="" />
              </div>
              <h3>야자수나무</h3>
            </Card>
          </li>
        </S.PlantList>
      </section>
    </CommonLayOut>
  );
}
