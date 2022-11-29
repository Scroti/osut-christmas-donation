import ImageLanding from "../ImageLanding/ImageLanding";
import TextLanding from "../TextLanding/TextLanding";

const LandingPage = () => {
  return (
    <div className="flex justify-between">
      <div>
        <TextLanding></TextLanding>
      </div>

      <div className="mr-72 mt-40 scale-125">
        <ImageLanding></ImageLanding>
      </div>
    </div>
  );
};

export default LandingPage;
