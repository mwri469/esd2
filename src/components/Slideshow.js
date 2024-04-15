import React from 'react';
import './Slideshow.css';

const slides = [
  { type: 'image', src: 'member_photos/agustin.jpeg' },
  { type: 'image', src: 'member_photos/alyssa.jpeg' },
  { type: 'image', src: 'member_photos/ankia.png' },
  { type: 'image', src: 'member_photos/ben.jpeg' },
  { type: 'image', src: 'member_photos/beth.jpg' },
  { type: 'image', src: 'member_photos/caroline.jpg' },
  { type: 'image', src: 'member_photos/ellen.jpg' },
  { type: 'image', src: 'member_photos/hannah.jpg' },
  { type: 'image', src: 'member_photos/iris.jpg' },
  { type: 'image', src: 'member_photos/janny.jpg' },
  { type: 'image', src: 'member_photos/martin.jpeg' },
  { type: 'image', src: 'member_photos/niki.jpg' },
  { type: 'image', src: 'member_photos/phyllis.jpeg' },
  { type: 'image', src: 'member_photos/soyeon.jpeg' },
  { type: 'image', src: 'member_photos/tessa.jpeg' }
];

const delay = 3000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, idx) => (
          <div
            className="slide"
            key={idx}
            style={slide.type === 'color' ? { backgroundColor: slide.value } : null}
          >
            {slide.type === 'image' && <img src={slide.src} alt={`Slide ${idx + 1}`} />}
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
