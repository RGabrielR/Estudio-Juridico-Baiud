"use client";

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoCalendarOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

import { fadeIn } from "../../animation/variants";

const services: { title: string; text: string }[] = [
  {
    title: "Consultas legales presenciales y online",
    text: "Diagnóstico jurídico integral y orientación práctica para decisiones urgentes y estrategia de largo plazo.",
  },
  {
    title: "Litigios y representación judicial",
    text: "Defensa estratégica en procesos en curso y nuevos reclamos, con seguimiento activo y comunicación clara.",
  },
  {
    title: "Trámites administrativos y fiscales",
    text: "Gestión completa ante organismos públicos y entes fiscales para reducir demoras y exposición legal.",
  },
  {
    title: "Derecho previsional",
    text: "Acompañamiento en jubilaciones, pensiones y gestiones previsionales para asegurar el acceso efectivo a derechos adquiridos.",
  },
  {
    title: "Derecho de familia y sucesiones",
    text: "Asesoramiento en divorcios, alimentos, herencias y particiones con precisión jurídica y criterio humano.",
  },
  {
    title: "Mediación y arbitraje",
    text: "Métodos alternativos para resolver conflictos de forma eficiente y evitar litigios prolongados cuando el caso lo permite.",
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-20 xl:max-w-[1380px]"
      id="Services"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="neo-panel flex w-full flex-col gap-8 p-8 lg:p-12"
      >
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-zinc-400">
            Servicios legales
          </span>
          <h2 className="text-3xl font-black text-zinc-100 sm:text-4xl">
            Asistencia jurídica para personas, familias y empresas
          </h2>
          <p className="text-base font-light leading-relaxed text-zinc-300 md:text-lg">
            Cobertura integral en derecho civil, laboral, familia, penal y
            previsional, con ejecución clara y seguimiento constante.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              className="neo-inset flex h-full flex-col gap-3 p-6 text-left transition hover:border-zinc-700"
              key={service.title}
            >
              <h3 className="text-lg font-semibold text-zinc-100">
                {service.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-zinc-300">
                {service.text}
              </p>
            </article>
          ))}
        </div>

        <Button
          className="neo-button h-14 w-full max-w-sm self-center text-base"
          endContent={
            <IoCalendarOutline size={24} className="ml-2 text-zinc-100" />
          }
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send/?phone=%2B543814099177&text&type=phone_number&app_absent=0",
              "_blank",
            );
          }}
        >
          Solicitar consulta
        </Button>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
