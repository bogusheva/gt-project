function UnderConstruction() {
  return (
    <div className="bg-dark px-1.5 py-[10vh] xl:px-[5vh] xl:py-[5vh] h-screen flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl md:text-4xl text-light xl:text-6xl mb-6 sm:whitespace-pre-line">
        {
          "GrainTwin - tokenization of grain\nfor transparent and fast access to capital"
        }
      </h1>
      <h2 className="text-center text-light text-lg md:text-3xl xl:text-4xl mb-6 whitespace-pre-line xl:whitespace-normal">
        {`Transforming grain into a liquid asset. \nFast. Transparent. Secure.`}
      </h2>
      <div className="flex flex-col justify-center items-center mb-6 grow">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center z-10 text-light text-3xl xl:text-7xl font-bold">
            Grain
          </div>
          <div className="loader_under_construction_up"></div>
        </div>
        <div className="relative mt-4">
          <div className="absolute inset-0 flex items-center justify-center z-10 text-light text-3xl xl:text-7xl font-bold">
            Twin
          </div>
          <div className="loader_under_construction_down"></div>
        </div>
      </div>
      <p className="text-center text-light text-2xl xl:text-4xl whitespace-pre-line md:whitespace-normal">
        {`Under construction. \nComing soon...`}
      </p>
    </div>
  );
}

export default UnderConstruction;
