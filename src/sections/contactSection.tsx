"use client";

import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { TbMapStar } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

import { fadeIn } from "../../animation/variants";
import Location from "../../public/location.webp";

const ContactMap = dynamic(() => import("@/components/contact/ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="h-72 w-full animate-pulse rounded-3xl bg-zinc-900 lg:h-full" />
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
        console.error("Could not update visit counter", error);
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
        className="neo-panel relative mx-auto flex w-full max-w-7xl flex-col gap-10 p-6 lg:flex-row lg:p-12"
      >
        <div className="neo-inset flex w-full flex-col gap-6 p-6 text-center text-zinc-100 lg:w-1/2 lg:p-10 lg:text-left">
          <div className="flex flex-col items-center gap-2 text-left lg:items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400 lg:text-sm">
              Contacto
            </span>
            <h2 className="text-3xl font-black leading-tight text-zinc-100 sm:text-4xl xl:text-5xl">
              Consultá con Dr. Miguel Alabi
            </h2>
          </div>

          <div className="space-y-3 text-sm font-light md:text-base">
            <div className="flex flex-wrap items-center justify-center gap-3 text-zinc-300 lg:justify-start">
              <HiLocationMarker size={26} className="text-zinc-300" />
              <p className="max-w-[28ch] text-left leading-relaxed">
                Avenida Salta 1563, San Miguel de Tucumán, Tucumán, Argentina
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-zinc-300 lg:justify-start">
              <HiPhone size={26} className="text-zinc-300" />
              <p className="text-left leading-relaxed">+54 (381) 4099-177</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 lg:items-start">
            <Button
              className="neo-button h-14 w-full text-base lg:max-w-sm"
              endContent={
                <TbMapStar size={24} className="ml-2 text-zinc-100" />
              }
              onClick={() => {
                window.open(
                  "https://www.google.com/maps?q=-26.8086267,-65.2052151",
                  "_blank",
                );
              }}
            >
              Ver ubicación en Google Maps
            </Button>
            <Button
              className="neo-button h-14 w-full text-base lg:max-w-sm"
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
              Agendar consulta
            </Button>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 lg:w-1/2">
          <div className="overflow-hidden rounded-3xl border border-zinc-800">
            <ContactMap />
          </div>
          <div className="hidden overflow-hidden rounded-3xl border border-zinc-800 lg:block">
            <Image
              src={Location}
              alt="Ubicación del estudio jurídico Dr. Miguel Alabi"
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
