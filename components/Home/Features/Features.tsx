// "use client";
// import { useTranslations } from "next-intl";
// import { PiTractorBold, PiTruckTrailerBold } from "react-icons/pi";
// import { MdOutlineScience } from "react-icons/md";
// import { RiTeamLine } from "react-icons/ri";
// import css from "./Features.module.css";

// export default function Features() {
//   const t = useTranslations("Home");

//   return (
//     <section className={css.featuresSection} id="about">
//       <div className={css.featuresWrap} data-gsap="stagger">
//         <div className={css.featureItem}>
//           <strong>{t("features.yearsCount")}</strong> {t("features.years")}
//         </div>
//         <div className={css.featureItem}>
//           <PiTractorBold size={32} />
//           {t("features.continuous")}
//         </div>
//         <div className={css.featureItem}>
//           <MdOutlineScience size={32} />
//           {t("features.science")}
//         </div>
//         <div className={css.featureItem}>
//           <RiTeamLine size={32} />
//           {t("features.staff")}
//         </div>
//         <div className={css.featureItem}>
//           <PiTruckTrailerBold size={32} />
//           {t("features.fleet")}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { useTranslations } from "next-intl";

import { PiTractorBold, PiTruckTrailerBold } from "react-icons/pi";
import { MdOutlineScience } from "react-icons/md";
import { RiTeamLine, RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

import "swiper/css";

import css from "./Features.module.css";

export default function Features() {
  const t = useTranslations("Home");

  const featuresData = [
    {
      id: 1,
      icon: null,
      content: (
        <>
          <strong className={css.bigNumber}>{t("features.yearsCount")}</strong>
          <span className={css.text}>{t("features.years")}</span>
        </>
      ),
    },
    {
      id: 2,
      icon: <PiTractorBold size={44} />,
      content: <span className={css.text}>{t("features.continuous")}</span>,
    },
    {
      id: 3,
      icon: <MdOutlineScience size={44} />,
      content: <span className={css.text}>{t("features.science")}</span>,
    },
    {
      id: 4,
      icon: <RiTeamLine size={44} />,
      content: <span className={css.text}>{t("features.staff")}</span>,
    },
    {
      id: 5,
      icon: <PiTruckTrailerBold size={44} />,
      content: <span className={css.text}>{t("features.fleet")}</span>,
    },
  ];

  return (
    <section className={css.featuresSection} id="about">
      <div className={css.container}>
        <div className={css.sliderWrapper}>
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={false} // Вимкнено, щоб не було дублікатів з боків
            speed={600}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              el: `.${css.pagination}`,
            }}
            navigation={{
              nextEl: `.${css.nextBtn}`,
              prevEl: `.${css.prevBtn}`,
            }}
            className={css.mySwiper}
          >
            {featuresData.map((item) => (
              <SwiperSlide key={item.id} className={css.slide}>
                <div className={css.card}>
                  {item.icon && <div className={css.iconBox}>{item.icon}</div>}
                  <div className={css.cardContent}>{item.content}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
