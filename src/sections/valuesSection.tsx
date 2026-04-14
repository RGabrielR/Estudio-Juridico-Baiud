"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

import { fadeIn } from "../../animation/variants";
import values01 from "../../public/values01.webp";
import values02 from "../../public/values02.webp";
import { siteCopy } from "@/i18n/siteCopy";
import { useLanguage } from "@/providers/LanguageProvider";

const ValuesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const { language } = useLanguage();
  const copy = siteCopy[language].values;

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
        className="neo-panel relative mx-auto flex w-full flex-col items-center gap-12 overflow-hidden py-16 text-zinc-100"
      >
        <div className="absolute inset-0 bg-[url('/valuesbg.webp')] bg-cover bg-center opacity-10" />
        <div className="relative flex w-full flex-col items-center gap-12 px-6 lg:px-16">
          <h2
            className="flex items-center justify-center gap-4 text-2xl font-semibold uppercase tracking-[0.4em] text-zinc-300 md:text-3xl"
            id="Values"
          >
            {copy.title} <BsFillPatchCheckFill size={40} />
          </h2>

          <div className="flex w-full flex-col-reverse items-center gap-12 lg:flex-row">
            <div className="relative flex w-full flex-col items-center gap-6 lg:w-5/12">
              <div className="absolute -right-10 top-10 hidden h-32 w-32 rounded-full bg-zinc-500/20 blur-3xl lg:block" />
              <Image
                src={values01}
                alt={copy.imageAltOne}
                className="h-auto w-full rounded-3xl object-cover shadow-[12px_12px_24px_rgba(0,0,0,0.6)]"
                sizes="100vw"
                width={0}
                height={0}
              />
              <Image
                src={values02}
                alt={copy.imageAltTwo}
                className="h-auto w-full rounded-3xl object-cover shadow-[12px_12px_24px_rgba(0,0,0,0.6)]"
                sizes="100vw"
                width={0}
                height={0}
              />
            </div>

            <div className="flex w-full flex-col gap-6 lg:w-7/12">
              {copy.items.map((value, index) => (
                <div
                  key={value.title}
                  className="neo-inset p-6 transition hover:border-zinc-700"
                >
                  <span className="text-lg font-semibold text-zinc-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold text-zinc-100">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-base font-light text-zinc-300">
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
