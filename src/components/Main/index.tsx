import styled from "styled-components";
import videoTop from "../../assets/db/one-piece/trailer.webm";
import imgTop from "../../assets/db/one-piece/hero.jpg";
import banner from "../../assets/db/one-piece/banner.png";
import { Button } from '../Button'
import { useState } from "react";

const Main = styled.main`
  width: 100%;
`;
const Feature = styled.div`
  width: 100%;
  position: relative;
  video {
    width: 100%;
    height: 950px;
    object-fit: cover;
  }

  @keyframes hidden {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const Hero = styled.div<{ $showVideo?: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;

  .hero {
    position: absolute;
    width: 100%;
    z-index: 0;
    animation: ${(props) =>
      props.$showVideo ? "hidden 1s ease-in-out forwards" : ""};
  }
`;

const BackgroundLinear = styled.div`
  width: 1408px;
  height: 1080px;
  position: absolute;
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.6), transparent 85%);
`;

const FeatureContent = styled.div`
  width: 685px;
  height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  left: 60px;
  z-index: 0;
`;

const FeatureInfo = styled.div`
  font-size: 1.25vw;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  .info-header {
    font-size: 1.6vw;
    font-weight: bold;
    margin: 1vw 0;
    display: flex;
    align-items: center;

    img {
      width: 48px;
      height: auto;
      margin-right: 0.5em;
    }
  }

  .description {
    font-size: 1.2vw;
    width: 90%;
  }
`;

export default function index() {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideo = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    e.stopPropagation();
    // setShowVideo(!showVideo);
    // e.currentTarget.play();
  };

  return (
    <Main>
      <Feature>
        <Hero $showVideo={showVideo}>
          <img className="hero" src={imgTop} alt="image hero" />
          <BackgroundLinear />
          <FeatureContent>
            <img className="banner" src={banner} alt="image banner" />
            <FeatureInfo>
              <div className="info-header">
                <img src="/icons/top.webp" alt="image top" />
                N.° 1 en TV hoy
              </div>
              <p className="description">
                Acompañado de su ecléctica tripulación, el joven pirata Monkey
                D. Luffy emprende un viaje en busca de un tesoro legendario en
                esta adaptación del popular manga.
              </p>
            </FeatureInfo>
            <Button>Reproducir</Button>
          </FeatureContent>
        </Hero>
        <video onCanPlay={handleVideo} onEnded={() => setShowVideo(!showVideo)} src={videoTop}></video>
      </Feature>
    </Main>
  );
}
