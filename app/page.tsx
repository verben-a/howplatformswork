import type { Metadata } from "next";
import BookCover from "@/components/BookCover";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Platforms Work — Alina Verbenchuk",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
          {/* Book cover */}
          <div className="w-52 md:w-64 flex-shrink-0">
            <BookCover />
          </div>

          {/* Hero text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              New Book
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-balance mb-6">
              How Platforms Work
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-10">
              {/* ── PLACEHOLDER — update with your actual subtitle/tagline ── */}
              A behind-the-scenes look at how the world's most powerful
              technology platforms are built, scaled, and contested — and what
              that means for everyone who uses them.
            </p>
            <a
              href="https://www.amazon.co.uk/dp/1069828645"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-light transition-colors shadow-md hover:shadow-lg"
            >
              Buy on Amazon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="border-t border-border" />

      {/* ── About the book ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            About the Book
          </h2>
          {/* ── PLACEHOLDER — replace with your actual description ────────── */}
          <p className="text-lg text-muted leading-relaxed mb-4">
            Platforms have quietly become the dominant organisational form of
            our era. From app stores to social networks to music streaming
            services, they shape how billions of people create, connect, and
            consume — yet how they actually work remains poorly understood.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-4">
            Drawing on a decade of experience inside some of the world's most
            influential technology platforms, Alina Verbenchuk unpacks the
            mechanics, incentives, and trade-offs that define platform
            businesses — and why they matter to everyone, not just technologists.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            {/* ── Third sentence placeholder ── */}
            Whether you're a founder, a creator, a regulator, or simply a
            curious reader, this book gives you the mental models to make sense
            of the platform economy shaping the world around you.
          </p>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="border-t border-border" />

      {/* ── About the author teaser ──────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            About the Author
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-8">
            Alina Verbenchuk is an entrepreneur and product leader with a decade
            of experience in the creator economy and technology. She spent seven
            years at Google, including five at YouTube, and is today the
            co-founder of Korda, a technology platform for the music industry.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4 transition-colors"
          >
            Read full bio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
