"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TbTargetArrow } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

import { fadeIn } from "../../animation/variants";
import AboutMosaic from "../../public/aboutmosaic.webp";
import { siteCopy } from "@/i18n/siteCopy";
import { useLanguage } from "@/providers/LanguageProvider";

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const { language } = useLanguage();
  const copy = siteCopy[language].about;

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
        className="neo-panel flex w-full flex-col overflow-hidden lg:flex-row"
      >
        <div className="flex w-full min-w-[50%] flex-col gap-8 p-8 lg:p-12">
          <div className="text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-zinc-400">
              {copy.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-black text-zinc-100 sm:text-4xl">
              {copy.title}
            </h2>
          </div>
          <p className="text-center text-base font-light leading-relaxed text-zinc-300 md:text-lg lg:text-left">
            {copy.description}
          </p>

          <div className="neo-inset p-6 text-left text-zinc-100">
            <h3 className="text-xl font-semibold uppercase tracking-[0.2em] text-zinc-200">
              {copy.bioTitle}
            </h3>
            <div className="mt-4 space-y-3 text-sm font-light leading-relaxed text-zinc-300 md:text-base">
              {copy.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="neo-inset p-6 text-left text-zinc-100">
            <span className="flex items-center gap-4 text-xl font-semibold uppercase tracking-wide text-zinc-200 sm:text-2xl">
              <TbTargetArrow size={42} /> {copy.missionTitle}
            </span>
            <p className="mt-4 text-sm font-light leading-relaxed text-zinc-300 md:text-base">
              {copy.missionText}
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 rounded-2xl border border-zinc-700 bg-zinc-900/60 p-5 text-center sm:flex-row sm:text-left">
            <Image
              src="/logo aea.jpg"
              alt={copy.memberName}
              width={80}
              height={80}
              className="rounded-xl object-contain"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                {copy.memberLabel}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-200">
                {copy.memberName}
              </p>
              <p className="mt-1 text-xs font-light text-zinc-400">
                {copy.memberText}
              </p>
            </div>
          </div>
        </div>

        <div className="grid w-full place-items-center bg-gradient-to-br from-black via-zinc-950 to-zinc-900 p-8 lg:w-1/2">
          <Image
            src={AboutMosaic}
            alt={copy.imageAlt}
            sizes="100vw"
            width={0}
            height={0}
            className="h-auto w-full max-w-xl rounded-3xl object-cover shadow-[12px_12px_26px_rgba(0,0,0,0.7)]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
