"use client";
import Image from "next/image";
import heroBanner from "../../public/herobanner.png";
import { Button } from "@nextui-org/react";

import { IoCalendarOutline } from "react-icons/io5";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      className="relative mx-auto flex w-full items-center justify-center bg-yellow-800 bg-[url('/herobg.png')] bg-cover bg-center bg-no-repeat py-10 3xl:max-w-[1580px] 3xl:rounded-b-2xl"
      id="Home"
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
      >
        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
            <div className="flex w-full flex-col items-center justify-center gap-7 bg-black bg-opacity-40 p-10 px-8 text-center text-white shadow-lg  lg:text-start 2xl:w-6/12">
              <h1 className="text-3xl font-bold md:text-5xl 2xl:text-6xl">
                El asesoramiento que lo deja tranquilo
              </h1>
              <p className="text-sm font-extralight md:text-lg">
                En nuestro estudio jurídico, dedicamos nuestro cuidado y
                experiencia para garantizar la protección de tus derechos y el
                bienestar de nuestros clientes. Ofrecemos servicios legales
                excepcionales para mantener tu tranquilidad y confianza.
              </p>
              <Button
                className="h-14 w-full text-base font-medium text-white"
                color="primary"
                endContent={<IoCalendarOutline size={30} className="ml-2" />}
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send/?phone=%2B543884881609&text&type=phone_number&app_absent=0",
                    "_blank",
                  );
                }}
              >
                Agendar Consulta
              </Button>
            </div>

            <Image
              src={heroBanner}
              alt="heroBanner"
              className="aspect-auto h-auto w-full pl-10 lg:pl-0 2xl:w-6/12"
              sizes="100vw"
              width={0}
              height={0}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
