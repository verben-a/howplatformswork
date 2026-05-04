import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alina Verbenchuk is an entrepreneur and product leader with a decade of experience in the creator economy and technology.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Author headshot */}
        <aside className="md:w-72 flex-shrink-0">
          <div
            className="w-full md:w-64 overflow-hidden rounded-sm bg-border shadow-lg"
            style={{ aspectRatio: "3/4" }}
          >
            {/*
              ─── SWAP IN YOUR HEADSHOT ──────────────────────────────────────
              1. Copy your photo to /public/images/alina-verbenchuk.jpg
              2. Replace this <div> with:

                 <Image
                   src="/images/alina-verbenchuk.jpg"
                   alt="Alina Verbenchuk"
                   fill
                   className="object-cover"
                   priority
                 />

              3. Add   import Image from "next/image";   at the top.
              4. Wrap the outer div with   className="relative ..."
              ─────────────────────────────────────────────────────────────── */}
            <div className="flex h-full w-full items-center justify-center text-muted text-sm p-4 text-center">
              [Headshot placeholder<br />— 3:4 ratio]
            </div>
          </div>

          {/* Social links */}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/alinaverbenchuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline underline-offset-4 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </aside>

        {/* Bio */}
        <article className="flex-1 max-w-prose">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-balance">
            About Alina
          </h1>

          <div className="space-y-5 text-lg text-foreground leading-relaxed">
            <p>
              Alina Verbenchuk is an entrepreneur and product leader with a
              decade of experience in the creator economy and technology. She
              spent seven years at Google, including five at YouTube, where she
              worked across operations, strategy, and product development.
            </p>
            <p>
              At YouTube, she launched creator tools reaching more than 60
              million users, led the UK Music vertical and copyright operations
              during the rollout of YouTube Music, and advised Spotify on
              product and monetization initiatives.
            </p>
            <p>
              Today, Alina is the co-founder of{" "}
              <a
                href="https://korda.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline underline-offset-4"
              >
                Korda
              </a>
              , a technology platform for the music industry. With a career
              spanning multiple countries at the intersection of technology,
              content, and business, she is focused on building solutions that
              empower creators and reshape how music and innovation come
              together.
            </p>
            <p>This is her first book.</p>
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted mb-4 text-sm font-medium uppercase tracking-widest">
              Interested in working together?
            </p>
            <a
              href="/work-with-me"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
            >
              Work with Alina
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
