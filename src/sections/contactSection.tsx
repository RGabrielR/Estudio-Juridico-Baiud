"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { TbMapStar } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

import Location from "../../public/location.png";
import { fadeIn } from "../../animation/variants";

const ContactMap = dynamic(() => import("@/components/contact/ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="h-72 w-full animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-700 lg:h-full" />
  ),
});

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    const registerVisit = async () => {
      try {
        const response = await fetch("/api/visits", { method: "POST" });
        await response.json();
      } catch (error) {
        console.error("No se pudo actualizar el contador de visitas", error);
      }
    };

    void registerVisit();
  }, []);

  return (
    <section
      className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-16 lg:flex-row xl:max-w-[1380px]"
      ref={ref}
      id="Contact"
    >
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 rounded-3xl bg-white/80 p-6 shadow-2xl backdrop-blur dark:bg-slate-900/80 lg:flex-row lg:p-12"
      >
        <div className="flex w-full flex-col gap-6 rounded-3xl bg-gradient-to-br from-yellow-800/95 via-yellow-700/90 to-amber-500/90 p-6 text-center text-white lg:w-1/2 lg:p-10 lg:text-left">
          <div className="flex flex-col items-center gap-2 text-left lg:items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/90 lg:text-sm">
              Contacto
            </span>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl xl:text-5xl">
              Estudio Jurídico Lidia Cristina Baiud
            </h2>
          </div>

          <div className="space-y-3 text-sm font-light md:text-base">
            <div className="flex flex-wrap items-center justify-center gap-3 text-amber-50/90 lg:justify-start">
              <HiLocationMarker size={26} className="text-amber-200" />
              <p className="max-w-[28ch] text-left leading-relaxed">
                Ramírez de Velazco 672, San Salvador de Jujuy, Jujuy, Argentina
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-amber-50/90 lg:justify-start">
              <HiPhone size={26} className="text-amber-200" />
              <p className="text-left leading-relaxed">+54 (388) 4881-609</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 lg:items-start">
            <Button
              className="h-14 w-full text-base font-semibold text-yellow-900 shadow-lg shadow-amber-500/30 hover:shadow-amber-400/50 lg:max-w-sm"
              color="warning"
              endContent={<TbMapStar size={30} className="ml-2 text-yellow-900" />}
              onClick={() => {
                window.open(
                  "https://www.google.com/maps?q=Ram%C3%ADrez+d+%20Velazco+672,+San+Salvador+de+Jujuy+-+Jujuy",
                  "_blank",
                );
              }}
            >
              Ver en Google Maps
            </Button>
            <Button
              className="h-14 w-full text-base font-semibold text-yellow-900 shadow-lg shadow-amber-500/30 hover:shadow-amber-400/50 lg:max-w-sm"
              color="warning"
              endContent={<IoCalendarOutline size={30} className="ml-2 text-yellow-900" />}
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
        </div>

        <div className="flex w-full flex-col gap-6 lg:w-1/2">
          <div className="flex h-full flex-1 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">
            <ContactMap />
          </div>
          <div className="hidden h-full flex-1 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 lg:block">
            <Image
              src={Location}
              alt="Ilustración de Estudio Jurídico Baiud"
              sizes="100vw"
              width={0}
              height={0}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
