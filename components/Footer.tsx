import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {year} Alina Verbenchuk. All rights reserved.</p>
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link
            href="/work-with-me"
            className="hover:text-accent transition-colors"
          >
            Work with Alina
          </Link>
          <a
            href="https://www.amazon.co.uk/dp/1069828645"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Buy the Book
          </a>
        </nav>
      </div>
    </footer>
  );
}
