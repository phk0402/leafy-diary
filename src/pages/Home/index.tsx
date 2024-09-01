import useRoute from "~/hooks/useRoute";

export default function Home() {
  const routeTo = useRoute();
  return (
    <div>
      <header>
        <h1>Leafy Diary</h1>
        <p>
          푸릇푸릇한 식물들의 여정, 매일매일의 작은 변화가 무성한 초록의 세계로
          안내합니다. 이 여정을 함께 기록해보세요.
        </p>
      </header>
      <nav>
        <ul>
          <li onClick={() => routeTo("/")}>home</li>
          <li onClick={() => routeTo("/diary")}>diary</li>
        </ul>
      </nav>
      <main>
        <section id="diary-list">
          <h2>식물 목록</h2>
          <ul>
            <li>야자수나무</li>
            <li>소나무</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Leafy Diary</p>
      </footer>
    </div>
  );
}
