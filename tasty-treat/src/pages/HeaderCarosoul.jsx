import React from "react";

const HeaderCarosoul = () => {
  return (
    <>
      <div className="carousel w-full ">
        <div id="item1" className="carousel-item w-full grid grid-cols-2">
          <div className="flex flex-col justify-center gap-5">
            <h2 className="title-text text-3xl">Lets start a new begining of life with Masterchef</h2>
            <p className="text-xl font-semibold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.</p>
            <button className="btn btn-primary w-32">Join now</button>
          </div>
          <img
            src="mc.jpg"
            className="w-full max-h-[300px] cover"
          />
        </div>
        <div id="item2" className="carousel-item w-full grid grid-cols-2">
        <div className="flex flex-col justify-center gap-5">
            <h2 className="title-text text-3xl">Be the maker of your own career</h2>
            <p className="text-xl font-semibold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.</p>
            <button className="btn btn-primary w-32">Join now</button>
          </div>
          <img
            src="budy.jpeg"
            className="w-full max-h-[300px] cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full grid grid-cols-2">
        <div className="flex flex-col justify-center gap-5">
            <h2 className="title-text text-3xl">Join  the best team of chefs</h2>
            <p className="text-xl font-semibold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.</p>
            <button className="btn btn-primary w-32">Join now</button>
          </div>
          <img
            src="msi.jpg"
            className="w-full max-h-[300px] cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full grid grid-cols-2">
        <div className="flex flex-col justify-center gap-5">
            <h2 className="title-text text-3xl">Let everyone know your success story</h2>
            <p className="text-xl font-semibold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.</p>
            <button className="btn btn-primary w-32">Join now</button>
          </div>
          <img
            src="winners.png"
            className="w-full max-h-[300px] cover"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default HeaderCarosoul;
