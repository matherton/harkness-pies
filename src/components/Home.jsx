function Home() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 px-4 sm:px-1 lg:px-8">
      <div className="grid grid-cols-1 gap-4 pt-10 pl-10 pr-10 text-center">
        <div className="text-black border-dashed border-2 border-blue-600">
          Video goes in here when I receive it. Video in colour: slo-mo of
          golden crust pies, other products, shop exterior, Raeburn Place
          identity, shop interior with customers, Patrick and other staff making
          pies, a lot of smiling please
        </div>
        <div>
          <button className="text-white bg-blue-900 hover:bg-blue-700 hover:text-white rounded p-1">
            Play Video
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
