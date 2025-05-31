"use client";
import Image from "next/image";
import React from "react";

import Location from "../../public/location.png";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { Button } from "@nextui-org/react";
import { IoCalendarOutline } from "react-icons/io5";
import { TbMapStar } from "react-icons/tb";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      ref={ref}
      id="Contact"
    >
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      >
        <div className="flex w-full flex-col gap-4 p-5 text-center lg:w-1/2">
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-xl font-light uppercase text-yellow-800">
              Contacto
            </span>
            <h2 className="text-3xl font-bold xl:text-5xl">
              Estudio Juridico Baiud
            </h2>
          </div>

          <div>
            <div className="flex items-center justify-center gap-2">
              <HiLocationMarker size={30} className="text-yellow-800" />

              <p className="text-xs font-light md:text-base xl:text-lg">
                Ramírez de Velazco 672 - San Salvador de Jujuy - Jujuy -
                Argentina
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <HiPhone size={30} className="text-yellow-800" />

              <p className="text-xs font-light md:text-base xl:text-lg">
                +54 (388) 4881-609
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Button
              className="h-14 w-full text-base font-medium text-white"
              color="primary"
              endContent={<TbMapStar size={30} className="ml-2" />}
            >
              Ver en Google Maps
            </Button>
            <Button
              className="h-14 w-full text-base font-medium text-white"
              color="primary"
              endContent={<IoCalendarOutline size={30} className="ml-2" />}
            >
              Agendar Consulta
            </Button>
          </div>
        </div>

        <Image
          src={Location}
          alt="Imagen que ilustra a Estudio Juridico Baiud"
          sizes="100vw"
          width={0}
          height={0}
          className="h-auto w-full object-cover p-5 lg:w-1/2"
        />
      </motion.div>
    </section>
  );
};

export default ContactSection;
