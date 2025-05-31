"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { IoCalendarOutline } from "react-icons/io5";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const services: { title: string; text: string }[] = [
  {
    title: "CONSULTA JURÍDICA - ONLINE O PRESENCIAL",
    text: "Ofrecemos consultas jurídicas personalizadas, tanto en línea como presenciales, para atender a sus necesidades jurídicas específicas. Nuestro equipo está listo para brindar orientación legal clara y eficaz, garantizando que reciba el apoyo necesario.",
  },
  {
    title: "REPRESENTACION JURÍDICA - JUICIOS NUEVOS O EN CURSO",
    text: "Brindamos representación legal integral en juicios nuevos o en curso, asegurando que sus derechos estén protegidos en todo momento. Nuestro equipo de abogados experimentados está comprometido a luchar por sus intereses y alcanzar los mejores resultados posibles.",
  },
  {
    title: "TRAMITES ADMINISTRATIVOS, TRIBUTARIOS E INTERNACIONALES",
    text: "Nos especializamos en la gestión de trámites administrativos, tributarios e internacionales, facilitando el proceso para nuestros clientes. Desde la presentación de documentos hasta la resolución de conflictos, nuestro equipo está aquí para simplificar sus obligaciones legales.",
  },
  {
    title: "TRAMITES JUBILATORIOS",
    text: "Brindamos asesoramiento y gestión en trámites jubilatorios, asegurando que nuestros clientes puedan acceder a sus derechos de manera efectiva. Nuestro equipo está preparado para guiarlo a través de todo el proceso, desde la documentación hasta la obtención de una jubilación adecuada a sus derechos.",
  },
  {
    title: "TRAMITES DE SUCESIONES",
    text: "Asesoramos y gestionamos trámites de sucesiones, asegurando que los derechos de nuestros clientes sean protegidos durante el proceso. Nuestro equipo está aquí para guiarlo a través de los aspectos legales y administrativos relacionados con la sucesión, brindando tranquilidad en momentos difíciles.",
  },
  {
    title: "MEDIACIÓN Y ARBITRAJE",
    text: "Ofrecemos servicios de mediación y arbitraje para resolver disputas de manera eficiente y efectiva. Nuestro equipo está capacitado para facilitar la comunicación entre las partes y encontrar soluciones justas, evitando así largos procesos judiciales.",
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      id="Services"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      >
        <div className="flex w-full flex-col items-center justify-center gap-6 p-5 md:items-start md:justify-start">
          <div className="text-center md:text-start">
            <span className="text-xl font-light text-yellow-800">
              SERVICIOS
            </span>
            <h2 className="text-3xl font-bold xl:text-4xl">
              Servicios de primera calidad para sus necesidades!
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                className="flex flex-col items-start justify-start rounded-bl-2xl rounded-tr-2xl bg-yellow-800 p-5 text-white"
                key={index}
              >
                <h4 className="mb-2 font-bold">{service.title}</h4>
                <p className="text-sm font-light">{service.text}</p>
              </div>
            ))}
          </div>

          <Button
            className="h-14 w-full text-base font-medium text-white"
            color="primary"
            endContent={<IoCalendarOutline size={30} className="ml-2" />}
          >
            Agendar Consulta
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
