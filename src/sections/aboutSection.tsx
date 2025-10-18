"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TbTargetArrow } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

import AboutMosaic from "../../public/aboutmosaic.png";
import { fadeIn } from "../../animation/variants";

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-20 xl:max-w-[1380px]"
      id="About"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="flex w-full flex-col overflow-hidden rounded-3xl bg-white/85 shadow-xl backdrop-blur lg:flex-row"
      >
        <div className="flex w-full min-w-[50%] flex-col gap-8 p-8 lg:p-12">
          <div className="text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-500">
              Sobre el estudio
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Descubrí por qué somos la respuesta legal que necesitás
            </h2>
          </div>
          <p className="text-center text-base font-light leading-relaxed text-slate-600 md:text-lg lg:text-left">
            Con mucha dedicación al ejercicio profesional, acompañamos a
            personas, familias y empresas en decisiones clave. Abordamos cada
            caso con estrategias personalizadas, comunicación transparente y un
            compromiso auténtico por proteger tus intereses.
          </p>

          <div className="rounded-3xl bg-slate-950 p-6 text-left text-white shadow-lg">
            <span className="flex items-center gap-4 text-xl font-semibold uppercase tracking-wide text-amber-300 sm:text-2xl">
              <TbTargetArrow size={42} /> Nuestra misión
            </span>
            <p className="mt-4 text-sm font-light leading-relaxed text-slate-100 md:text-base">
              Promovemos la justicia y el bienestar de nuestros clientes a
              través de soluciones legales claras, efectivas y humanas. Creemos
              que cada persona merece una defensa comprometida y cercana, por
              eso trabajamos con integridad, preparación constante y una visión
              estratégica de largo plazo.
            </p>
          </div>
        </div>

        <div className="grid w-full place-items-center bg-gradient-to-br from-slate-100 via-white to-amber-50 p-8 lg:w-1/2">
          <Image
            src={AboutMosaic}
            alt="Equipo y espacios del Estudio Jurídico Baiud"
            sizes="100vw"
            width={0}
            height={0}
            className="h-auto w-full max-w-xl rounded-3xl object-cover shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
