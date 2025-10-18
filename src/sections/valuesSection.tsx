"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

import { fadeIn } from "../../animation/variants";
import values01 from "../../public/values01.png";
import values02 from "../../public/values02.png";

const values: { title: string; text: string }[] = [
  {
    title: "Compromiso con la excelencia",
    text: "Buscamos la excelencia en cada etapa de los procesos que gestionamos, desde la primera consulta hasta la resolución final. La calidad, la profundidad del análisis y la preparación meticulosa son nuestra norma.",
  },
  {
    title: "Empatía y cercanía",
    text: "Cada situación es única y merece ser escuchada. Nos involucramos con sensibilidad para comprender el contexto personal o empresarial y ofrecer un acompañamiento humano y respetuoso.",
  },
  {
    title: "Transparencia y comunicación",
    text: "Construimos relaciones de confianza con información clara, reportes periódicos y explicación de escenarios posibles. Queremos que tomes decisiones informadas en todo momento.",
  },
];

const ValuesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <section
      className="relative mx-auto flex w-full flex-col items-center justify-center py-20 3xl:max-w-[1580px]"
      ref={ref}
      id="Values"
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="relative mx-auto flex w-full flex-col items-center gap-12 overflow-hidden rounded-3xl bg-slate-950 py-16 text-white shadow-2xl"
      >
        <div className="absolute inset-0 bg-[url('/valuesbg.png')] bg-cover bg-center opacity-20" />
        <div className="relative flex w-full flex-col items-center gap-12 px-6 lg:px-16">
          <h2
            className="flex items-center justify-center gap-4 text-2xl font-semibold uppercase tracking-[0.4em] text-amber-300 md:text-3xl"
            id="Values"
          >
            Nuestros valores <BsFillPatchCheckFill size={40} />
          </h2>

          <div className="flex w-full flex-col-reverse items-center gap-12 lg:flex-row">
            <div className="relative flex w-full flex-col items-center gap-6 lg:w-5/12">
              <div className="absolute -right-10 top-10 hidden h-32 w-32 rounded-full bg-amber-400/20 blur-3xl lg:block" />
              <Image
                src={values01}
                alt="Trabajo colaborativo en el estudio"
                className="h-auto w-full rounded-3xl object-cover shadow-lg"
                sizes="100vw"
                width={0}
                height={0}
              />
              <Image
                src={values02}
                alt="Equipo legal asesorando clientes"
                className="h-auto w-full rounded-3xl object-cover shadow-lg"
                sizes="100vw"
                width={0}
                height={0}
              />
            </div>

            <div className="flex w-full flex-col gap-6 lg:w-7/12">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="rounded-3xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
                >
                  <span className="text-lg font-semibold text-amber-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-base font-light text-slate-100/90">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValuesSection;
