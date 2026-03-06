import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Nueva Ley Laboral 27.802: Qué Cambia y Cómo Te Afecta en Argentina 2026",
  description:
    "Explicación clara de la nueva Ley 27.802 de Modernización Laboral (2026). Cambios en indemnizaciones, banco de horas, FAL y empleo registrado. Consultá con la Dra. Baiud en Jujuy.",
  keywords: [
    "ley 27802 modernizacion laboral",
    "nueva ley laboral argentina 2026",
    "reforma laboral 2026 argentina",
    "ley modernizacion laboral trabajadores",
    "fondo asistencia laboral FAL",
    "banco de horas argentina 2026",
    "indemnizacion nueva ley laboral",
    "empleo registrado blanqueo laboral",
    "reforma laboral jujuy 2026",
    "abogada laboral jujuy",
    "cambios laborales argentina 2026",
    "derechos trabajadores ley 27802",
    "empleadores nueva ley trabajo",
    "vacaciones fraccionadas ley 27802",
  ],
  alternates: {
    canonical:
      "https://www.estudiolcb.com.ar/articulos/reforma-laboral-argentina",
  },
  openGraph: {
    title: "Nueva Ley 27.802: La Reforma Laboral 2026 Explicada en Simple",
    description:
      "Todo lo que trabajadores y empleadores en Jujuy necesitan saber sobre la nueva Ley de Modernización Laboral 27.802.",
    type: "article",
  },
};

export default function ReformaLaboralArgentinaPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <article className="prose prose-slate max-w-none">
        <div className="mb-8">
          <Link
            href="/articulos"
            className="text-sm font-semibold text-amber-600 no-underline hover:text-amber-700"
          >
            ← Volver a artículos
          </Link>
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
          Derecho Laboral
        </span>

        <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
          Nueva Ley Laboral 27.802: Qué Cambia y Cómo Te Afecta en el Trabajo
        </h1>

        <p className="lead text-xl font-light leading-relaxed text-slate-600">
          El 27 de febrero de 2026 se sancionó la Ley 27.802 de Modernización
          Laboral, una de las reformas más importantes al derecho del trabajo en
          Argentina en los últimos años. Acá te explicamos sin tecnicismos qué
          cambia concretamente, qué implica para vos como trabajador o
          empleador, y cómo podés proteger tus derechos.
        </p>

        <div className="not-prose mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4">
          <p className="text-sm font-semibold text-amber-800">
            Esta ley entra en vigencia desde su publicación en el Boletín
            Oficial y aplica tanto a nuevas relaciones laborales como a procesos
            en curso. Si tenés dudas sobre cómo te afecta en particular, consultá
            con un abogado laboralista antes de tomar cualquier decisión.
          </p>
        </div>

        <h2 className="mt-12 text-3xl font-bold text-slate-950">
          ¿Por qué esta reforma importa?
        </h2>

        <p>
          La Ley 27.802 toca aspectos centrales de la relación entre empleados y
          empleadores: cómo se calculan las indemnizaciones cuando te echan, cómo
          se organizan los horarios, cómo se toman las vacaciones y qué pasa si
          trabajaste &ldquo;en negro&rdquo;. Son cambios que te afectan directamente,
          independientemente de en qué sector trabajés.
        </p>

        <h2 className="mt-12 text-3xl font-bold text-slate-950">
          Los 5 cambios más importantes de la Ley 27.802
        </h2>

        <h3 className="text-2xl font-semibold text-slate-900">
          1. Cambia cómo se calcula la indemnización por despido
        </h3>
        <p>
          Este es probablemente el cambio que más ruido genera y el que más le
          conviene entender bien a todo el mundo.
        </p>
        <p>
          Hasta ahora, para calcular la indemnización cuando te despedían, se
          tomaba en cuenta tu &ldquo;mejor remuneración&rdquo; del último año, que podía
          incluir el aguinaldo, bonos y otros conceptos. Con la nueva ley, la
          base de cálculo queda limitada a lo que se llama{" "}
          <strong>remuneración mensual normal y habitual</strong>, que es básicamente
          tu sueldo básico mensual, sin extras.
        </p>
        <p>Quedan <strong>excluidos</strong> del cálculo:</p>
        <ul>
          <li>El aguinaldo (SAC)</li>
          <li>Las vacaciones</li>
          <li>Los bonos que no son mensuales o que no son habituales</li>
        </ul>
        <p>
          <strong>¿Qué significa para el trabajador?</strong> En muchos casos,
          la indemnización que te corresponde puede ser menor que antes, porque
          la base de cálculo es más chica. Esto hace que sea todavía más
          importante consultar con un abogado si te despiden, para asegurarte de
          que el cálculo que te presenta tu empleador sea correcto.
        </p>
        <p>
          <strong>¿Qué significa para el empleador?</strong> Menor incertidumbre
          al momento de calcular el costo de un despido, porque la fórmula es
          más clara y predecible.
        </p>
        <p>
          Por otro lado, la ley establece que las indemnizaciones se
          actualizarán siguiendo el IPC más un 3% anual. Esto reemplaza la
          discrecionalidad judicial que existía antes para actualizar los montos,
          lo que da más previsibilidad pero también puede resultar en actualizaciones
          menores en contextos de alta inflación.
        </p>

        <h3 className="mt-8 text-2xl font-semibold text-slate-900">
          2. Se crea el Fondo de Asistencia Laboral (FAL)
        </h3>
        <p>
          La ley crea un nuevo fondo al que los empleadores deben aportar todos
          los meses: el <strong>Fondo de Asistencia Laboral (FAL)</strong>. Los
          montos son:
        </p>
        <ul>
          <li>
            <strong>Empresas grandes:</strong> 1% de la remuneración mensual de
            cada empleado.
          </li>
          <li>
            <strong>MiPyMEs (pequeñas y medianas empresas):</strong> 2,5% de la
            remuneración mensual.
          </li>
        </ul>
        <p>
          Estos aportes son{" "}
          <strong>compensables con descuentos en cargas sociales</strong>,
          es decir, que no necesariamente representan un costo adicional neto para
          el empleador si se computa correctamente.
        </p>
        <p>
          El FAL funciona como un respaldo económico para situaciones de
          desempleo y transición laboral. Dicho de otra forma: es un fondo que
          se va construyendo mes a mes y al que el trabajador puede acceder
          cuando queda sin trabajo.
        </p>
        <p>
          <strong>Para el empleador</strong>, esto implica una nueva obligación
          administrativa que hay que gestionar bien para no generar deudas ni
          incumplimientos.
        </p>

        <h3 className="mt-8 text-2xl font-semibold text-slate-900">
          3. Banco de horas y mayor flexibilidad en los horarios
        </h3>
        <p>
          La ley introduce el <strong>banco de horas</strong>: un sistema por el
          cual las horas extras trabajadas no se pagan inmediatamente como
          adicional, sino que se &ldquo;acumulan&rdquo; y el trabajador puede compensarlas
          después tomando tiempo libre equivalente.
        </p>
        <p>
          Para que esto sea válido,{" "}
          <strong>debe acordarse por escrito</strong>{" "}
          entre el empleador y el empleado (o mediante convenio colectivo). No
          alcanza con un acuerdo verbal.
        </p>
        <p>
          <strong>¿Qué significa para el trabajador?</strong> Podés acumular
          horas y tomarlas como francos o licencias después, en lugar de cobrar
          el adicional. Pero ojo: si el acuerdo no está bien instrumentado, podés
          perder el derecho al cobro de esas horas. Que quede todo por escrito y
          bien firmado es fundamental.
        </p>
        <p>
          También se permite que los contratos a tiempo parcial incluyan
          cláusulas de <strong>horas suplementarias voluntarias</strong>, lo que
          abre la puerta a esquemas laborales más flexibles pero que requieren
          atención para no afectar derechos adquiridos.
        </p>

        <h3 className="mt-8 text-2xl font-semibold text-slate-900">
          4. Vacaciones fraccionadas y derecho a verano
        </h3>
        <p>
          La nueva ley permite tomar las vacaciones de manera fraccionada, en
          tramos de <strong>al menos 7 días corridos cada uno</strong>. Antes, la
          regla general era tomarlas de corrido (salvo excepciones).
        </p>
        <p>
          Además, se establece el{" "}
          <strong>derecho a período estival cada 3 años</strong>: el trabajador
          tiene garantizado que, como mínimo una vez cada tres años, sus
          vacaciones van a caer en la temporada de verano (diciembre-marzo).
        </p>
        <p>
          <strong>Para el trabajador</strong>, esto puede ser una ventaja si
          preferís tomar licencias cortas durante el año en lugar de un bloque
          largo. Pero también puede usarse para que la empresa divida tus
          vacaciones sin que vos lo hayas elegido. Es importante conocer tus
          derechos para negociar bien.
        </p>

        <h3 className="mt-8 text-2xl font-semibold text-slate-900">
          5. Blanqueo laboral: oportunidad para regularizar empleo informal
        </h3>
        <p>
          La ley incluye un régimen de regularización de relaciones laborales no
          registradas o mal registradas (el clásico &ldquo;trabajo en negro&rdquo; o
          &ldquo;trabajo parcialmente en negro&rdquo;). Las condiciones son:
        </p>
        <ul>
          <li>
            <strong>Condonación de multas</strong> por falta de registro.
          </li>
          <li>
            <strong>Condonación de parte de la deuda</strong> por aportes y
            contribuciones adeudadas.
          </li>
          <li>
            <strong>Planes de pago de hasta 72 cuotas</strong> para regularizar
            lo que se debe.
          </li>
        </ul>
        <p>
          <strong>Para el trabajador en negro</strong>, esta es una oportunidad
          concreta de que tu empleador te registre sin que eso le signifique un
          costo prohibitivo. Si tu empleador no aprovecha esta ventana, perdés
          el beneficio pero no perdés el derecho a reclamar.
        </p>
        <p>
          <strong>Para el empleador con personal no registrado</strong>, este
          blanqueo es una oportunidad que no conviene desperdiciar: regularizar
          ahora con descuentos es mucho mejor que enfrentar después un juicio
          laboral con indemnizaciones agravadas.
        </p>

        <h2 className="mt-12 text-3xl font-bold text-slate-950">
          Servicios esenciales: más restricciones a las huelgas
        </h2>

        <p>
          La ley amplía la lista de sectores considerados{" "}
          &ldquo;servicios esenciales&rdquo;: ahora incluye transporte, salud y energía,
          entre otros. En estos sectores, durante una huelga o medida de fuerza,
          debe mantenerse una prestación mínima del{" "}
          <strong>50% del servicio</strong>.
        </p>
        <p>
          Esto puede afectar la dinámica sindical en estos sectores y es un
          punto que los representantes gremiales están analizando con atención.
        </p>

        <h2 className="mt-12 text-3xl font-bold text-slate-950">
          Preguntas frecuentes sobre la Ley 27.802
        </h2>

        <h3 className="text-2xl font-semibold text-slate-900">
          ¿Esta ley se aplica a contratos que ya existen o solo a los nuevos?
        </h3>
        <p>
          La ley aplica tanto a nuevas relaciones laborales como a procesos en
          curso. Eso significa que algunas de sus disposiciones pueden afectar tu
          situación laboral actual, no solo los contratos que se firmen de ahora
          en más. El impacto concreto depende de qué artículo aplique a tu caso.
        </p>

        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
          ¿Puedo negarme al banco de horas?
        </h3>
        <p>
          El banco de horas requiere acuerdo escrito. Si no firmaste nada, tu
          empleador no puede imponértelo unilateralmente. Si ya firmaste un
          contrato con esa cláusula, es importante revisar los términos para
          asegurarte de que sean equitativos.
        </p>

        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
          ¿Si me despiden ahora, se aplica el nuevo cálculo de indemnización?
        </h3>
        <p>
          Sí, desde que la ley entró en vigencia. Por eso es clave que, ante un
          despido, un abogado revise el cálculo que te presenta el empleador:
          con la nueva fórmula hay más margen para errores —o malas intenciones—
          en la liquidación.
        </p>

        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
          ¿El blanqueo laboral tiene fecha límite?
        </h3>
        <p>
          La reglamentación definirá los plazos exactos. Lo que ya está claro es
          que es una ventana temporal y que, una vez vencida, se pierde la
          posibilidad de regularizar con los beneficios que ofrece. Si sabés que
          tu situación laboral no está bien registrada, no esperes.
        </p>

        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
          ¿Esta ley aplica igual en Jujuy?
        </h3>
        <p>
          Sí. La Ley 27.802 es de carácter nacional y aplica en todas las
          provincias, incluyendo Jujuy. Lo que puede variar son los convenios
          colectivos de trabajo de cada sector, que pueden establecer condiciones
          superiores a las de la ley general.
        </p>

        <h2 className="mt-12 text-3xl font-bold text-slate-950">
          ¿Cómo puede ayudarte la Dra. Baiud con esta reforma?
        </h2>

        <p>
          La Dra. Lidia Cristina Baiud, abogada con amplia experiencia en Jujuy,
          puede asesorarte en las situaciones concretas que genera esta nueva ley:
        </p>

        <h3 className="text-2xl font-semibold text-slate-900">
          Para trabajadores:
        </h3>
        <ul>
          <li>
            Revisar si la liquidación de despido que te ofrecen respeta
            correctamente el nuevo cálculo de la Ley 27.802.
          </li>
          <li>
            Analizar contratos o acuerdos de banco de horas antes de firmarlos,
            para detectar cláusulas perjudiciales.
          </li>
          <li>
            Reclamar derechos que no cambian con esta ley: discriminación,
            trabajo no registrado, indemnizaciones agravadas, despido durante
            el embarazo.
          </li>
          <li>
            Asesorarte si querés aprovechar el período de blanqueo para que tu
            empleador te registre correctamente.
          </li>
          <li>
            Representarte en conciliaciones y juicios si no llegás a un acuerdo
            con tu empleador.
          </li>
        </ul>

        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
          Para empleadores:
        </h3>
        <ul>
          <li>
            Adecuar contratos de trabajo al nuevo marco de la Ley 27.802 sin
            generar riesgos legales.
          </li>
          <li>
            Implementar correctamente el FAL y el banco de horas con la
            documentación que la ley exige.
          </li>
          <li>
            Aprovechar el régimen de blanqueo laboral para regularizar personal
            no registrado antes de que cierre el plazo.
          </li>
          <li>
            Asesoramiento preventivo para evitar demandas: detectar y corregir
            problemas antes de que lleguen a juicio sale siempre mucho más barato.
          </li>
          <li>
            Defensa en conflictos laborales, tanto en conciliación como en sede
            judicial.
          </li>
        </ul>

        <div className="mt-16 rounded-3xl bg-slate-950 p-8 not-prose text-white">
          <h3 className="text-2xl font-bold">
            ¿La nueva ley te genera dudas sobre tu trabajo o tu empresa?
          </h3>
          <p className="mt-4 text-base font-light text-slate-200">
            No esperes a que el problema sea más grande. La Dra. Lidia Baiud te
            explica exactamente cómo te afecta la Ley 27.802 en tu caso
            particular: sin tecnicismos y con soluciones concretas. Una
            consulta a tiempo puede ahorrarte muchos problemas — y mucho dinero.
          </p>
          <Link
            href="/#Contact"
            className="mt-6 inline-block rounded-full border border-amber-400/60 bg-amber-400/90 px-8 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
          >
            Consultar ahora
          </Link>
        </div>

        <div className="mt-8 rounded-3xl bg-amber-50 p-8 not-prose">
          <h3 className="text-2xl font-bold text-slate-950">
            ¿Sos empleador con personal en negro? Esta es tu oportunidad.
          </h3>
          <p className="mt-4 text-base font-light text-slate-700">
            La Ley 27.802 abre una ventana para regularizar relaciones laborales
            informales con condonación de multas y planes de pago de hasta 72
            cuotas. El Estudio Baiud te guía en el proceso para que aproveches
            este beneficio antes de que cierre el plazo, y sin cometer errores
            que después te cuesten más caro.
          </p>
          <Link
            href="/#Contact"
            className="mt-6 inline-block rounded-full border border-amber-400/60 bg-amber-400/90 px-8 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
          >
            Regularizar mi situación laboral
          </Link>
        </div>
      </article>
    </main>
  );
}
