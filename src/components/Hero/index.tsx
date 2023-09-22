import styled from "styled-components";
import { Button } from '../Button'
import { useEffect, useState } from "react";

interface HeroProps {
  showVideo: boolean;
}

const StyledHero = styled.div<{ $showVideo?: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;

  .hero {
    position: absolute;
    width: 100%;
    z-index: 0;
    animation: ${(props) =>
      props.$showVideo ? "hidden 1s ease-in-out forwards" : ""};
  }
`;
const BackgroundLinear = styled.div`
  width: calc(100vw - 27%);
  height: 950px;
  position: absolute;
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.6), transparent 85%);
`;
const FeatureContent = styled.div<{ $minimizeBanner?: boolean }>`
  width: 685px;
  height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  left: 60px;
  z-index: 0;

  .buttons_container {
    display: flex;
    gap: 1rem;
  }

  .banner {
    width: ${(props) =>
      !props.$minimizeBanner ? "100%" : "calc(100% - 17.5vw)"};
    position: absolute;
    bottom: ${(props) =>
      !props.$minimizeBanner ? "260px" : "84px"};
    transition: width 1s ease-out, bottom 1s ease-out;
    transition-delay: .7s;
  }
`;
const FeatureInfo = styled.div<{ $minimizeBanner?: boolean }>`
  font-size: 1.25vw;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  
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

  .container-info {
    opacity: ${(props) => (props.$minimizeBanner ? '0' : '1')};
    transform: translateY(${(props) => (props.$minimizeBanner ? '100%' : '0')});
    transition: opacity .7s ease-in-out, ${props => props.$minimizeBanner ? 'transform .7s ease-in-out' : 'transform .7s ease-in-out 1.7s'};
  }
`;

export default function Hero({ showVideo }: HeroProps) {
  const [minimizeBanner, setMinimizeBanner] = useState(false);

  useEffect(() => {
    if(showVideo) {
      setTimeout(() => {
        setMinimizeBanner(true);
      }, 3000);
    }else{
      setMinimizeBanner(false);
    }
  }, [showVideo]);

  return (
    <StyledHero $showVideo={showVideo}>
      <img className="hero" src={"/db/one-piece/hero.jpg"} alt="image hero" />
      <BackgroundLinear />
      <FeatureContent $minimizeBanner={minimizeBanner}>
        <img className="banner" src={"/db/one-piece/banner.png"} alt="image banner" />
        <FeatureInfo $minimizeBanner={minimizeBanner}>
          <div className="container-info">
            <div className="info-header">
              <img src="/icons/top.webp" alt="image top" />
              <span>N.° 1 en TV hoy</span>
            </div>
            <p className="description">
              Acompañado de su ecléctica tripulación, el joven pirata Monkey D.
              Luffy emprende un viaje en busca de un tesoro legendario en esta
              adaptación del popular manga.
            </p>
          </div>
        </FeatureInfo>
        <div className="buttons_container">
          <Button isInfo={false}>Reproducir</Button>
          <Button isInfo={true}>Más información</Button>
        </div>
      </FeatureContent>
    </StyledHero>
  );
}
