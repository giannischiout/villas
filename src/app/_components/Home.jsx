import SectionThree from "./SectionThree";
import { SectionTwo, SectionFour, SectionFive, SectionSix} from "./SectionThree";
import VillasPresentation from "./VillasPresentation";
import Hero from "./Hero";
import SlideShow from "./SlideShow";
const Home = ({posts}) => {

 

  return (
    <>
        <div>
          <Hero />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SlideShow posts={posts}/>
          <VillasPresentation />
        </div>
    </>
  );
};
export default Home;