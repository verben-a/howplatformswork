interface BookCoverProps {
  className?: string;
}

export default function BookCover({ className = "" }: BookCoverProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm shadow-2xl ${className}`}
      style={{ aspectRatio: "2/3" }}
    >
      {/*
        ─── SWAP IN YOUR BOOK COVER ───────────────────────────────────────────
        1. Copy your cover image to /public/images/book-cover.jpg
        2. Replace this entire <div> with:

           <Image
             src="/images/book-cover.jpg"
             alt="How Platforms Work — book cover"
             fill
             className="object-cover"
             priority
           />

        3. Add   import Image from "next/image";   at the top of this file.
        ───────────────────────────────────────────────────────────────────── */}
      <div className="flex h-full w-full flex-col items-center justify-center bg-accent text-white p-6 text-center">
        <p className="font-serif text-2xl font-bold leading-tight mb-3">
          How Platforms Work
        </p>
        <div className="w-10 h-px bg-white/40 mb-3" />
        <p className="text-sm font-light tracking-widest uppercase opacity-70">
          Alina Verbenchuk
        </p>
        <p className="mt-8 text-xs opacity-40 italic">[Book cover placeholder]</p>
      </div>
    </div>
  );
}
