"use client";

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoCalendarOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

import { fadeIn } from "../../animation/variants";

const services: { title: string; text: string }[] = [
  {
    title: "Consultas legales presenciales y online",
    text: "Diagnóstico integral y orientación clara para resolver dudas legales urgentes o planificar estrategias a largo plazo desde cualquier lugar.",
  },
  {
    title: "Representación en litigios",
    text: "Defensa estratégica en juicios nuevos o en curso, con enfoque en resultados y comunicación permanente sobre cada avance.",
  },
  {
    title: "Trámites administrativos y tributarios",
    text: "Gestión completa frente a organismos públicos y entidades fiscales, optimizando tiempos y reduciendo contingencias.",
  },
  {
    title: "Derecho previsional",
    text: "Acompañamiento en trámites jubilatorios y pensiones para garantizar el acceso efectivo a los beneficios adquiridos.",
  },
  {
    title: "Sucesiones y derecho de familia",
    text: "Asesoramiento integral para sucesiones, particiones y acuerdos familiares con una mirada empática y ordenada.",
  },
  {
    title: "Mediación y arbitraje",
    text: "Resolución alternativa de conflictos para alcanzar acuerdos eficientes y evitar procesos judiciales prolongados.",
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
        className="flex w-full flex-col gap-8 rounded-3xl bg-white/85 p-8 shadow-xl backdrop-blur lg:p-12"
      >
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-500">
            Servicios
          </span>
          <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
            Soluciones legales de alto impacto para cada necesidad
          </h2>
          <p className="text-base font-light leading-relaxed text-slate-600 md:text-lg">
            Trabajamos con equipos multidisciplinarios para ofrecer respuestas
            ágiles y confiables en derecho civil, laboral, comercial y penal.
            Cada intervención se apoya en procesos claros y reporting continuo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              className="group flex h-full flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              key={service.title}
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-slate-600">
                {service.text}
              </p>
            </article>
          ))}
        </div>

        <Button
          className="h-14 w-full max-w-sm self-center rounded-full border border-amber-400/60 bg-amber-400/90 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
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
          Reservar una consulta
        </Button>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
