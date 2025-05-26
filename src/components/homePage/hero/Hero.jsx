import React, { useState, useRef } from "react";
import "./Hero.scss";
import video1 from "../../../assets/video/video1.mp4";
import video2 from "../../../assets/video/video2.mp4";
import video3 from "../../../assets/video/video3.mp4";
import { Layout } from "../../../shared/layout/Layout";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);

  const slides = [
    { id: 1, videoUrl: video1, title: "Видео 1" },
    { id: 2, videoUrl: video2, title: "Видео 2" },
    { id: 3, videoUrl: video3, title: "Видео 3" }
  ];

  const nextSlide = () => {
    const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
    playVideo(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
    playVideo(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    playVideo(index);
  };

  const playVideo = (index) => {
    // Пауза всех видео кроме текущего
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          video.play().catch((e) => console.log("Video play error:", e));
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  };

  return (
    <div className="video-slider-container">
      <div className="block">
        <Layout>
          <div className="blockInner">
            <h3>
              ЛАЗЕРНОЕ 3D <br /> СКАНИРОВАНИЕ <br /> помещений{" "}
            </h3>
          </div>
        </Layout>
      </div>
      <div
        className="video-slider"
        ref={sliderRef}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="slide">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              autoPlay
              muted
              loop
              playsInline
              className="video-background"
              preload="auto"
            >
              <source src={slide.videoUrl} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
            <div className="slide-content">
              <h2>{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="slider-button next" onClick={nextSlide}>
        &gt;
      </button>

      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
