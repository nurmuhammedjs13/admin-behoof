import Authorization from "../../components/authorization/authorization";
import List from "../List/list";

function Home() {
  return (
    <>
      <Authorization />
      <List />
    </>
  );
}

export default Home;
