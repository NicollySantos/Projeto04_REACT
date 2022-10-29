import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import image1 from '../src/img/1.jpg';
import image2 from '../src/img/2.jpg';
import image3 from '../src/img/3.jpg';
import image4 from '../src/img/4.jpg';
import image5 from '../src/img/5.jpg';
import image6 from '../src/img/6.jpg';


const images = [image1, image2, image3, image4, image5, image6]


function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)




  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div className='fundo'>
      <div className='App'>
        <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
          <motion.div className='inner'
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {images.map(image => (
              <motion.div className='item' key={image}>
                <img src={image} alt="Text alt" />

              </motion.div>
            ))}

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
