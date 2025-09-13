import Link from "next/link";
import { ArrowRight, Sparkles, Users, Download, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
        }}
      />
      {/* Header */}
      <header className="container mx-auto px-4 py-6 *:z-10 z-50 relative">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-white" />
            <h1 className="text-2xl font-bold text-white dark:text-white">
              Unhinged Resume
            </h1>
          </div>
          <Link
            href="/unhinged"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Get Started {`>>`}
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 z-10 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Create Your Most{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Unhinged
            </span>{" "}
            Resume
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Break free from boring resumes! Create chaotic, hilarious, and
            absolutely unhinged resumes. Perfect for standing out in the most
            unconventional way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/unhinged"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              <Sparkles className="w-5 h-5" />
              Start Creating
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-800 cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Palette className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Creative Templates
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Choose from hilarious preset templates or build your own from
                scratch.
              </p>
            </div>

            <div className="rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-800 cursor-pointer">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Live Preview
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                See your unhinged resume come to life in real-time as you
                customize every detail.
              </p>
            </div>

            <div className="rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-800 cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Download className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Instant Download
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Download your masterpiece as a high-quality image and share your
                chaos with the world.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Go Unhinged?</h3>
            <Link
              href="/unhinged"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              <Sparkles className="w-5 h-5" />
              Create My Unhinged Resume
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-700 z-10 relative">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            Made with 💙 for the unhinged by{" "}
            <Link href={"https://x.com/noslopinfinite"} className="underline">
              @noslopinfinite
            </Link>
          </p>
          <p className="text-sm">
            © 2025 Unhinged Resume Generator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
