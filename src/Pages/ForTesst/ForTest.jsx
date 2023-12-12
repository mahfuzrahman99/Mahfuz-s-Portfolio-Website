import { useState, useEffect } from 'react';
import "../ForTesst/forTest.css"
import animate from "../../assets/IMG_20220712_182610-removebg-preview (1).png"

const ForTest = () => {
  const [state, setState] = useState({
    offsetX: '',
    offsetY: '',
    friction: 1 / 32
  });

  const mouseMoveHandler = (e) => {
    let followX = window.innerWidth / 2 - e.clientX;
    let followY = window.innerHeight / 2 - e.clientY;

    let x = 0,
      y = 0;
    x += (-followX - x) * state.friction;
    y += (followY - y) * state.friction;

    setState({
      ...state,
      offsetX: x,
      offsetY: y
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [state]);

  let offset = {
    transform: `translate(-50%, -50%) perspective(600px)
                      rotateY(${state.offsetX}deg)
                      rotateX(${state.offsetY}deg)`
  };

  return (
    <div className='wrapper' style={offset}>
      <div className='shape'>
        <img src={animate} alt="" />
      </div>
      {/* <div className='shape2'>
        <img src={animate} alt="" />
      </div> */}
    </div>
  );
};

export default ForTest;
