import useRoute from "~/hooks/useRoute";
import CommonLayOut from "~/layout/CommonLayout";

export default function DiaryList() {
  const routeTo = useRoute();

  return (
    <CommonLayOut page="diary-list">
      목록 페이지
      <nav>
        <ul>
          <li onClick={() => routeTo("/")}>home</li>
          <li onClick={() => routeTo("/diary")}>diary</li>
        </ul>
      </nav>
    </CommonLayOut>
  );
}
