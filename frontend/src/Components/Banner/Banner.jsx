import "./Banner.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  // Array of image URLs
  const imageUrls = [
    "https://i.ibb.co/tcyJ0DK/img1.webp",
    "https://i.ibb.co/ZKS3BqD/img1-mobile.jpg",
    "https://i.ibb.co/jLKQhN9/img2.webp",
    "https://i.ibb.co/nbcCqY3/img2-mobile.webp",
    "https://i.ibb.co/1m8Wc4j/img3.jpg",
    "https://i.ibb.co/RcJYZpd/img3-mobile.jpg",
    "https://i.ibb.co/xGSf580/img4.jpg",
    "https://i.ibb.co/Jvk4SmL/img4-mobile.jpg",
    "https://i.ibb.co/ZHTDF5B/img5.webp",
    "https://i.ibb.co/7pVwy2n/img5-mobile.png",
  ];

  // Function to create an <img> tag with the provided URL
  const createImgTag = (url) => {
    return <img src={url} alt="Slide" />;
  };

  // Map image URLs to SwiperSlide components
  const swiperSlides = imageUrls.map((url, index) => (
    <SwiperSlide key={index}>{createImgTag(url)}</SwiperSlide>
  ));

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper my-10"
      >
        {swiperSlides}
      </Swiper>
    </>
  );
};

export default Banner;
