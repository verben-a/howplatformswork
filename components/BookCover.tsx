import Image from "next/image";

interface BookCoverProps {
  className?: string;
}

export default function BookCover({ className = "" }: BookCoverProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm shadow-2xl ${className}`}
      style={{ aspectRatio: "2/3" }}
    >
      <Image
        src="/images/book-cover.png"
        alt="How Platforms Work — book cover"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
