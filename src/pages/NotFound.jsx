import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="text-sm font-semibold text-signal mb-3">404</div>
        <h1 className="font-display font-semibold text-4xl tracking-tight">
          Page not found
        </h1>
        <p className="text-slate mt-4">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center mt-8 px-6 py-3 rounded bg-ink text-paper text-sm font-semibold hover:bg-signal transition-colors"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
