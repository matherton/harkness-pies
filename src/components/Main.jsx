import PropTypes from "prop-types";
import placeholImg from "../assets/smiling-co-workers-looking-camera-portrait-working-coffee-shop-56794455.jpg";
import aiimage from "../assets/butcher-with-pies.png";

function Main(props) {
  return (
    <>
      <div className="grid-rows-reverse relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 px-4 sm:px-1 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 pl-10 pr-10 text-center ">
          {props.reverse ? (
            <>
              <div>
                <img src={aiimage} alt="" />
              </div>
              <div className="text-black bg-white border-solid border-2 border-grey-600 text-left p-5">
                <h2>{props.header}</h2>
                <strong>{props.title}</strong>
                <br />
                {props.copy}
                <br />
                <br />
                {props.copy2}
              </div>
            </>
          ) : (
            <>
              <div className="text-black bg-white border-solid border-2 border-grey-600 text-left p-5">
                <h2>{props.header}</h2>
                &quot;<strong>{props.title}</strong>
                <br />
                {props.copy}
                <br />
                <br />
                {props.copy2}&quot;
              </div>
              <div>
                <img src={placeholImg} alt="" />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

Main.propTypes = {
  reverse: PropTypes.bool,
  copy: PropTypes.string,
  copy2: PropTypes.string,
  header: PropTypes.string,
  title: PropTypes.string,
};

export default Main;
