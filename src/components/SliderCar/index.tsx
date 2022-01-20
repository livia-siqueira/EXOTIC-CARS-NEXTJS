import { SwiperSlide } from "swiper/react";
import * as s from "./styles";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { Photo, AiOutlineArrowLeft, AiOutlineArrowRight } from "@shared/index";
import { useRef } from "react";

export const SliderCars: React.FC<{
  ImagesCar: Photo[] | null;
  handleGoCar(index: number): void;
  indexActive: number;
}> = ({ ImagesCar, handleGoCar, indexActive }) => {
  const images: Photo[] | null = ImagesCar;
  const btNext = useRef<HTMLButtonElement>(null);
  const btPrev = useRef<HTMLButtonElement>(null);
  const qtdImage: number = images ? images.length : 0;

 return (
    <>
      {images?.length !== 1 && (
        <>
          <s.ButtonsSlider direction="left" ref={btPrev}>
            <AiOutlineArrowLeft size={22} />
          </s.ButtonsSlider>
          <s.ButtonsSlider direction="right" ref={btNext}>
            <AiOutlineArrowRight size={22} />
          </s.ButtonsSlider>
        </>
      )}
      <s.Container>
        <s.Slider
          modules={[Navigation]}
          loop={true}
          centeredSlides={qtdImage === 2 ? false : true}
          slidesPerView={images?.length === 2 ? 2 : 1}
          spaceBetween={qtdImage === 2 ? 20 : qtdImage === 3 ? 30 : 0}
          slideToClickedSlide
          onTransitionEnd={(swiper) => handleGoCar(swiper.realIndex)}
          navigation={{
            prevEl: btPrev.current,
            nextEl: btNext.current,
          }}
          breakpoints={{
            1100: {
              slidesPerView: images?.length,
            },
            1000: {
              slidesPerView: 1,
            }
          }}
        >
          {images?.map((imageDetails, index) => {
            const hasBig: boolean = index === indexActive;
            return (
              <SwiperSlide
                key={imageDetails.color}
                style={{ height: "auto"}}
              >
                <s.Slide>
                  <s.Item_Card isActive={hasBig}>
                    <s.Image src={imageDetails.photo} />
                  </s.Item_Card>
                </s.Slide>
              </SwiperSlide>
            );
          })}
        </s.Slider>
      </s.Container>
    </>
  );
};
