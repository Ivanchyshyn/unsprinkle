import React from 'react';
import styled from 'styled-components/macro';

const Hero = () => {
  const heroImgNoExt = '/images/hero-img';
  const sets = ['', '@2x', '@3x'];
  const avifSrcSet = sets.map((suffix, index) => `${heroImgNoExt}${suffix}.avif ${index+1}x`).join(', ');
  const jpgSrcSet = sets.map((suffix, index) => `${heroImgNoExt}${suffix}.jpg ${index+1}x`).join(', ');
  return (
    <Wrapper>
      <picture>
        <source type="image/avif" srcSet={avifSrcSet} />
        <source type="image/jpg" srcSet={jpgSrcSet} />
        <HeroImage src={`${heroImgNoExt}.jpg`} alt="A hero cat on a black background" />
      </picture>
      <Swoop src="/swoop.svg" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: rgb(1 1 1);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
