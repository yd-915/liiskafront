const Features = () => {
  return (
    <div className="w-full py-10 bg-black">
      <div className="relative flex flex-col w-3/4 mx-auto space-y-5">
        <div className="flex flex-col items-center">
          <h6 className="font-bold text-center text-blue-600 uppercase">
            Features
          </h6>
          <h2 className="text-4xl font-bold text-center text-yellow-600 uppercase">
            <span className="block">A better way to p2p</span>
          </h2>
        
        </div>
        <div className="flex flex-col py-10 space-x-0 space-y-10 md:space-y-0 md:space-x-5 md:flex-row">
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
           <i class="fa-solid fa-person-military-to-person"></i>
            <h3 className="text-lg font-bold text-orange-600">P2P galore</h3>
            <p className="text-center text-gray-400">
            Liiska is a platform that hosts an array of p2p apps in one place.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
            <i class="fa-sharp fa-solid fa-light-switch-on"></i>
            <h3 className="text-lg font-bold text-orange-600">Always on</h3>
            <p className="text-center text-gray-400">
             All apps are hosted on Vercel servers to assure peak uptime.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
         <i class="fa-regular fa-bitcoin-sign"></i>
            <h3 className="text-lg font-bold text-orange-600">Bitcoin Enabled</h3>
            <p className="text-center text-gray-400">
             You can pay for your subscription and items on the platform using bitcoin (more coins coming soon).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
