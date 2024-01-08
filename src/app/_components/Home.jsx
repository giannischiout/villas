import SectionThree from "./SectionThree";
import { SectionTwo, SectionFour, SectionFive, SectionSix} from "./SectionThree";
import VillasPresentation from "./VillasPresentation";
import Hero from "./Hero";
const Home = () => {

  return (
    <>
        <div>
          <Hero />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <VillasPresentation />
        </div>
    </>
  );
};
export default Home;