import video from "../assets/AI-Bakery-Shop-Promotion-Video.mp4/";
function Home() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 px-4 sm:px-1 lg:px-8">
      <div className="grid grid-cols-1 gap-4 pt-7 pl-10 pr-10 text-center">
        <div className="text-black border-dashed border-2 border-blue-600">
          Holding video in here to be replaced with real shop when I receive it.
          Video in colour: slo-mo of golden crust pies, other products, shop
          exterior, Raeburn Place identity, shop interior with customers,
          Patrick and other staff making pies, a lot of smiling please
          {/* <iframe
            className="w-full mx-auto"
            width="760"
            height="515"
            src="https://www.youtube.com/embed/lkyx36LYM3U?si=YEG8KFbb7AS70NWS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe> */}
          <div className="responsive-embed">
            <video src={video} controls muted autoPlay={true} loop>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* <div>
          <button className="text-white bg-blue-900 hover:bg-blue-700 hover:text-white rounded p-1">
            Play Video
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
