import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";


export default function Banner() {
  const slides = [
    {
      img: "https://i.ibb.co/1ZQZ1YQ/book1.jpg",
      title: "Books Delivered To Your Doorstep",
      desc: "Borrow books from nearby libraries without leaving home."
    },
    {
      img: "https://i.ibb.co/XsQ6C6b/book2.jpg",
      title: "Read More, Travel Less",
      desc: "We connect readers with libraries in their city."
    },
    {
      img: "https://i.ibb.co/hVYpZ1d/book3.jpg",
      title: "Smart Library Delivery System",
      desc: "Fast, safe and reliable book delivery service."
    }
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className="h-[70vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-full bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="bg-black/60 w-full h-full flex items-center">
              <div className="text-white px-10 max-w-xl space-y-4">
                <h1 className="text-4xl font-bold">{slide.title}</h1>
                <p>{slide.desc}</p>
                <Link
                  to="/books"
                  className="inline-block bg-primary px-6 py-3 rounded text-white"
                >
                  Explore Books
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
