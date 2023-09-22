import styled from "styled-components";
import videoTop from "../../assets/db/one-piece/trailer.webm";
import Hero from "../Hero";
import SliderContent from "../SliderContent";
import { useEffect, useState } from "react";
import "./main.css"

const Main = styled.main`
  width: 100%;
  position: relative;
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

interface MainProps {
  content: CategoryContent[];
}

export default function index({ content }: MainProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header') as HTMLElement;
      header.classList.toggle('scrolling', window.scrollY > 0);
    });
  }, []);

  const handleVideo = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    e.stopPropagation();
    setShowVideo(!showVideo);
    e.currentTarget.play();
  };

  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    e.stopPropagation();
    setShowVideo(!showVideo);
  }

  return (
    <Main>
      <Feature>
        <Hero showVideo={showVideo} />
        <video onCanPlay={handleVideo} onEnded={handleEnded} src={videoTop} muted={true}></video>
      </Feature>
      <div className="container_slider_content">
        {content.map((item, index) => (
          <SliderContent key={index} title={item.title} payload={item.payload} />
        ))}
      </div>
    </Main>
  );
}
