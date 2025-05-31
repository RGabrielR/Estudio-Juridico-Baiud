"use client";
import Image from "next/image";
import values01 from "../../public/values01.png";
import values02 from "../../public/values02.png";

import { BsFillPatchCheckFill } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const values: { title: string; text: string }[] = [
  {
    title: "Compromiso con la excelencia",
    text: "Buscamos la excelencia en todos los aspectos de nuestros servicios, desde su primera consulta hasta la ultima notificación de sus tramites. Nuestro compromiso es brindar un servicio de alta calidad que supere sus expectativas.",
  },
  {
    title: "Empatía y Cuidado",
    text: "Comprendemos que cada situación es única y requiere un enfoque personalizado. Nos preocupamos profundamente por el correcto manejo de sus asuntos legales brindando un servicio que lo haga sentir respaldado y comprendido.",
  },
  {
    title: "Transparencia y Comunicación",
    text: "Valoramos la comunicación abierta y transparente. Queremos que esté totalmente informado sobre las opciones y el progreso de su caso, para que pueda tomar decisiones informadas en todo momento.",
  },
];

const ValuesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      className="relative mx-auto flex  w-full flex-col items-center justify-center gap-10 bg-yellow-800 bg-[url('/valuesbg.png')] bg-cover bg-center bg-no-repeat py-5 md:py-16 3xl:max-w-[1580px] 3xl:rounded-2xl"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="relative mx-auto flex  w-full flex-col items-center justify-center gap-10 bg-cover bg-center bg-no-repeat py-5 md:py-16 3xl:max-w-[1580px] 3xl:rounded-2xl"
      >
        <h2
          className="flex items-center justify-center gap-5 text-2xl font-bold text-white md:text-3xl "
          id="Values"
        >
          NUESTROS VALORES <BsFillPatchCheckFill size={50} />
        </h2>

        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col-reverse items-center justify-center gap-10 lg:flex-row">
            <div
              className="mx-auto flex w-full max-w-[80%] flex-col items-center justify-center gap-5 md:flex-col lg:max-w-md lg:pl-8"
              ref={refQuote}
            >
              <Image
                src={values01}
                alt="Imagem ilustrativa da POWERVET"
                className="aspect-auto h-auto w-full"
                sizes="100vw"
                width={0}
                height={0}
              />
              <Image
                src={values02}
                alt="Imagem ilustrativa da POWERVET"
                className="aspect-auto h-auto w-full"
                sizes="100vw"
                width={0}
                height={0}
              />
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-7 px-8 text-center">
              {values.map((value, index) => (
                <div key={index} className="w-full max-w-3xl">
                  <p className="mx-auto w-[80%] rounded-t-2xl bg-yellow-800 p-2 font-bold text-white md:w-[60%]">
                    {value.title}
                  </p>
                  <p className="rounded-2xl bg-white p-5 text-sm font-light text-black md:text-base xl:text-lg">
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
