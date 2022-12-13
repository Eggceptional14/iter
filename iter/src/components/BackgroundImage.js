import { useState, useEffect } from 'react';
import image from 'next/image';
import styled from 'styled-components';

function getWindowDimensions(){
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function BackgroundImage() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);
    setHeight(height);
  }, [])

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions(); 

      setWidth(width);
      setHeight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if(width & height) {
    return <Image/>
  }
  return null
}

export default BackgroundImage;