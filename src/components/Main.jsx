import placeholImg from "../assets/smiling-co-workers-looking-camera-portrait-working-coffee-shop-56794455.jpg";

function Main(props) {
  return (
    <>
      <div className="grid-rows-reverse relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 px-4 sm:px-1 lg:px-8">
        <div className="grid grid-cols-2 gap-4 pt-10 pl-10 pr-10 text-center ">
          {props.reverse ? (
            <>
              <div className="text-black border-solid border-2 border-grey-600 text-left p-5">
                <img src={placeholImg} alt="" />
              </div>
              <div>
                <h2>[ABOUT]</h2>
                <p>
                  “Hi, I'm Patrick Harkness. Trained as a butcher and worked in
                  Vancouver for 10 years, relocated to Edinburgh 2017.
                  Everything we do at Harkness starts with the highest quality
                  produce, no skimping, no artificial gunk. That's what we
                  believe in. Next time you're passing, pop in the shop and say
                  hi.”
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="text-black border-solid border-2 border-grey-600 text-left p-5">
                <h2>[{props.header}]</h2>
                <strong>{props.title}</strong>
                <br />"{props.copy}"
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
