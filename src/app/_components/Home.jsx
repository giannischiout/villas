import SectionThree from "./SectionThree";
import { SectionTwo, SectionFour, SectionFive, SectionSix} from "./SectionThree";
import VillasPresentation from "./VillasPresentation";
import Hero from "./Hero";
import SlideShow from "./SlideShow";
const Home = ({posts, locale}) => {

 

  return (
    <>
        <div>
          <Hero />
          <SectionThree locale={locale}/>
          <SectionFour  locale={locale}/>
          <SectionFive  locale={locale} />
          <SlideShow posts={posts}/>
          <VillasPresentation />
        </div>
    </>
  );
};
export default Home;