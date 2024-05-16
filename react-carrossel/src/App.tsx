import { useState } from 'react';
import { Carrossel_container, Carrossel_items, Carrossel_btn } from './Componnents/carrossel';
import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';
import img5 from './assets/images/img5.jpg';
import img6 from './assets/images/img6.jpg';

interface Slide {
  image: string,
  caption: string
}

const slides: Slide[] = [
  { image: img1, caption: '' },
  { image: img2, caption: '' },
  { image: img3, caption: '' },
  { image: img4, caption: '' },
  { image: img5, caption: '' },
  { image: img6, caption: '' },
];
  const arrow = ['<', '>']

const Carrossel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };  

  const create_slide =() => {
    return(slides.map((slide, index) => (
      <div key={`${index}-${slide.caption}`}>
        <img src={slide.image}/>
        </div>
    )))
  }

  return (
    <>
      <h1 style={{color: 'white', }}>CARROSSEL</h1>
      <div style={{display: 'flex',  justifyContent: 'center', alignItems: 'center'}}>
        <Carrossel_btn onClick={prevSlide}>{arrow[0]}</Carrossel_btn>
        <Carrossel_container>
            <Carrossel_items style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {create_slide()}
            </Carrossel_items>
        </Carrossel_container>

        <Carrossel_btn onClick={nextSlide}>{arrow[1]}</Carrossel_btn>
    </div>   
    </>
  );
};

export default Carrossel;

