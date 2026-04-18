import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-background text-white flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-surface border border-surface-border rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Thank you</h1>
        <p className="text-gray-400 mb-6">
          Your message was submitted successfully. I will get back to you as soon as possible.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 font-medium text-white hover:bg-accent-dark transition-colors"
        >
          Back to contact
        </Link>
      </div>
    </main>
  );
}
