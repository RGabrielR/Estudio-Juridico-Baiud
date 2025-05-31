"use client";
import Image from "next/image";
import React from "react";

import AboutMosaic from "../../public/aboutmosaic.png";
import { TbTargetArrow } from "react-icons/tb";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      id="About"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      >
        <div className="flex w-full min-w-[50%] flex-col items-center justify-center gap-6 p-5">
          <div className="text-center">
            <span className="text-xl font-light text-yellow-800">SOBRE</span>
            <h2 className="text-3xl font-bold xl:text-4xl">
              Descubra porque damos la solución que necesita
            </h2>
          </div>
          <p className="text-center text-sm font-light md:text-base xl:text-lg">
            Con años de experiencia en el sistema legal, puedo brindar
            asesoramiento y representación legal de alta calidad. Mi compromiso
            es entender las necesidades de mis clientes y proporcionar
            soluciones efectivas y personalizadas. Con una solida reputacion en
            el sector, estoy aqui para proteger tus derechos y alcanzar los
            mejores resultados posibles.
          </p>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-yellow-800 p-5 text-center xl:p-8">
            <span className="flex items-center justify-center gap-4 text-2xl font-bold text-yellow-200 xl:text-4xl">
              <TbTargetArrow size={50} /> NUESTRA MISIÓN
            </span>
            <p className="mt-5 text-sm font-extralight text-white md:text-base">
              En nuestro estudio jurídico, nuestra misión es promover la
              justicia y el bienestar de nuestros clientes, ofreciendo servicios
              legales de alta calidad. Creemos que cada persona merece una
              representación legal efectiva y compasiva. Estamos comprometidos a
              brindar atención de élite.
            </p>
          </div>
        </div>

        <Image
          ref={refQuote}
          src={AboutMosaic}
          alt="Mosaico de imágenes de Estudio Jurídico"
          sizes="100vw"
          width={0}
          height={0}
          className="aspect-square h-auto w-full min-w-[50%] p-5"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;
