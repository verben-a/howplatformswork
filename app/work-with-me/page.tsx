import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Work with Alina",
  description:
    "Alina Verbenchuk is available for keynote speaking, panel appearances, and consulting engagements at the intersection of technology, platforms, and the creator economy.",
};

const EMAIL = "info@verbetcetera.com";

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-sm border border-border p-8 md:p-10">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-accent">{icon}</span>
        <h2 className="font-serif text-2xl md:text-3xl font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function WorkWithMePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      {/* Page header */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            Work with Alina
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed">
            Alina is available for keynote speaking, panel appearances, and
            consulting engagements at the intersection of technology, platforms,
            and the creator economy.
          </p>
        </div>
        <div className="relative w-full md:w-80 flex-shrink-0 overflow-hidden rounded-sm shadow-lg" style={{ aspectRatio: "4/3" }}>
          <Image
            src="/images/alina-speaking.jpg"
            alt="Alina Verbenchuk speaking at YouTube"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {/* Speaking */}
        <Section
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>
          }
          title="Speaking Engagements"
        >
          <p className="text-muted leading-relaxed mb-4">
            Alina brings first-hand experience from inside some of the world's
            largest technology platforms to the stage. She speaks on platform
            strategy, the creator economy, music and technology, and product
            leadership in high-growth environments.
          </p>
          <ul className="space-y-2 text-muted text-sm">
            {[
              "Keynote presentations",
              "Panel discussions and moderation",
              "Fireside chats",
              "University and academic lectures",
              "Industry conferences and summits",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Consulting */}
        <Section
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5z"
                clipRule="evenodd"
              />
            </svg>
          }
          title="Consulting"
        >
          <p className="text-muted leading-relaxed mb-4">
            With deep expertise in platform strategy, creator tools, and music
            technology, Alina advises founders, media companies, and investors
            navigating the platform economy.
          </p>
          <ul className="space-y-2 text-muted text-sm">
            {[
              "Platform strategy and product roadmaps",
              "Creator economy monetisation",
              "Music industry partnerships and licensing",
              "Go-to-market strategy for platform businesses",
              "Investor advisory and board support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Contact CTA */}
      <div className="rounded-sm bg-accent text-white px-8 py-12 md:px-12 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-2">
            Get in touch
          </h2>
          <p className="text-white/70 leading-relaxed max-w-lg">
            To discuss a speaking engagement or consulting project, send Alina
            an email and she will get back to you promptly.
          </p>
        </div>
        <div className="mt-6 md:mt-0 flex-shrink-0">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-sm bg-white text-accent px-8 py-4 text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
