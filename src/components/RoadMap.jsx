import footerRoadMap from "../assets/road + footer.png";
import footerRoadMap1 from "../assets/road1-1.png";
const RoadMap = () => {
  return (
    <div className="w-full  overflow-hidden primaryBg">
      <img src={footerRoadMap} className="hidden sm:block w-full" />
      <img src={footerRoadMap1} className="block sm:hidden w-full" />
    </div>
  );
};
export default RoadMap;
