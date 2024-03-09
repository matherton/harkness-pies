import placeholImg from "../assets/smiling-co-workers-looking-camera-portrait-working-coffee-shop-56794455.jpg";

function Main(props) {
  return (
    <>
      <div className="grid-rows-reverse relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 px-4 sm:px-1 lg:px-8">
        <div className="grid grid-cols-2 gap-4 pt-10 pl-10 pr-10 text-center ">
          {props.reverse ? (
            <>
              <div>
                <img src={placeholImg} alt="" />
              </div>
              <div className="text-black border-solid border-2 border-grey-600 text-left p-5">
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
              <div className="text-black border-solid border-2 border-grey-600 text-left p-5">
                <h2>{props.header}</h2>
                <strong>{props.title}</strong>
                <br />"{props.copy}
                <br />
                <br />
                {props.copy2}"
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

export default Main;
