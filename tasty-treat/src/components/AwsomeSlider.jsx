import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


const AwsomeSlider = () => {
  return (
    <div>
      <AwesomeSlider animation="cubeAnimation">
        <div data-src="r1.png" />
        <div data-src="2.png" />
        <div data-src="3.png" />
        {/* <div data-src="/path/to/image-3.jpg" /> */}
      </AwesomeSlider>
    </div>
  );
};

export default AwsomeSlider;
