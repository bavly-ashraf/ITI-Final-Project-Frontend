import React, { useEffect, useState } from "react";
import "./Slider.css";

function Slider({ imgSlides, autoSlide = false, autoSlideInterval = 3000 }) {
  console.log(imgSlides);
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current) =>
      current === 0 ? imgSlides.length - 1 : current - 1
    );
  const next = () =>
    setCurrent((current) =>
      current === imgSlides.length - 1 ? 0 : current + 1
    );
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      {/* <div>
            <button onClick={next} className="bg-info " >
                next
            </button>
            <button onClick={prev}>
                previos
            </button>
        </div> */}
      <div className="flex overflow-hidden relative transition-transform ease-out dduration-500">
        
        {...imgSlides.map((slide) => (
          <img
            key={slide.id}
            style={{ transform: `translateX(-${current * 100}%)` ,height:"600px",width:"1600px"}}
            src={slide.src}
          />
        ))}

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {imgSlides.map((slide, i) => (
              <div key={slide.id} style={{backgroundColor:"rgb(233, 103, 43)"}}
                className={`transition duration-700 ease-in-out w-3 h-3 indicators rounded-full ${
                  current === i ? "p-3" : "bg-opacity-50"
                } `}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
