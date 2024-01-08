import Container from "../../components/Container";
import Signin from "../signin/Signin";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="basis-2/3">
            <Banner />
          </div>
          <div className="basis-1/3">
            <Signin />
          </div>
        </div>
      </Container>
    </>
  );
};
export default Home;
