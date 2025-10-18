"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoCalendarOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

import heroBanner from "../../public/herobanner.webp";
import { fadeIn } from "../../animation/variants";

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      className="relative mx-auto flex w-full items-center justify-center overflow-hidden rounded-b-3xl bg-slate-950 py-16 text-white shadow-2xl 3xl:max-w-[1580px]"
      id="Home"
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
      >
        <div className="flex items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center gap-12 px-6 lg:flex-row lg:px-12">
            <div className="absolute inset-0 opacity-30">
              <Image
                src={heroBanner}
                alt="Dra. Lidia Baiud en su estudio jurídico de San Salvador de Jujuy"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 mix-blend-multiply" />
            </div>
            <div className="relative flex w-full flex-col items-center justify-center gap-8 rounded-3xl bg-slate-950/60 p-10 text-center backdrop-blur lg:w-7/12 lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-300/80">
                Defensa legal integral
              </span>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                Estudio Jurídico Baiud en Jujuy
              </h1>
              <h2 className="text-2xl font-semibold leading-tight text-amber-300/90 md:text-3xl">
                Especialistas en Derecho Civil, Familia y Laboral
              </h2>
              <h3 className="text-lg font-light text-slate-100/90 md:text-xl">
                Consultas presenciales y online con la Dra. Lidia Baiud
              </h3>
              <p className="text-base font-light text-slate-100/90 md:text-lg">
                En nuestro estudio jurídico combinamos experiencia, cercanía y
                estrategia para proteger tus derechos. Diseñamos soluciones
                legales a medida para particulares y empresas en cada etapa del
                proceso.
              </p>
              <Button
                className="h-14 w-full max-w-sm rounded-full border border-amber-400/60 bg-amber-400/90 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300 lg:justify-start"
                color="warning"
                endContent={
                  <IoCalendarOutline size={30} className="ml-2 text-slate-950" />
                }
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send/?phone=%2B543884881609&text&type=phone_number&app_absent=0",
                    "_blank",
                  );
                }}
              >
                Agendar consulta
              </Button>
            </div>

            <div className="relative hidden w-full max-w-xl overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/50 shadow-lg lg:flex lg:w-5/12">
              <Image
                src={heroBanner}
                alt="Dra. Lidia Cristina Baiud - Abogada especialista en Derecho Civil, Familia y Laboral en Jujuy"
                className="h-full w-full object-cover"
                sizes="100vw"
                width={0}
                height={0}
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
