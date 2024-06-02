

function Hero({ banner }) {
  return (
    <div className="flex  justify-center items-center h-[90vh]">
      <div className="flex flex-col justify-start items-start">
        <section className="flex gap-5 text-sm mx-4">
          <div className="text-black border-black rounded-3xl py-2 font-bold">
            SCROLL DOWN
          </div>
          <div className="text-black border-black rounded-3xl px-4 py-2 font-bold">
            TO FIND
          </div>
          <div className="text-black border-black rounded-3xl px-4 py-2 font-bold">
            YOUR DREAM JOB
          </div>
        </section>

        <div className="hidden md:block">
          <img src="/images/hero/heroCareer.png" alt="Logo" draggable="false" />
        </div>
        <div className="md:hidden mx-5">
          <img src="/images/hero/heroCareerSm.png" alt="Logo" draggable="false" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
