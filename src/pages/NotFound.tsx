import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/hooks/useSEO';

// Animated brush-stroke / canvas illustration
function ArtworkNotFoundIllustration() {
  return (
    <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72" aria-hidden="true">
      {/* Canvas frame */}
      <motion.div
        className="absolute inset-0 rounded-lg border-4 border-[#000000] bg-white shadow-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* 404 large text on canvas */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <span
          className="text-7xl sm:text-8xl font-black select-none"
          style={{
            background: 'linear-gradient(135deg, #1877F2 0%, #AAC9FF 50%, #2851A3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </span>
      </motion.div>

      {/* Floating paint dots */}
      {[
        { cx: '10%', cy: '15%', r: 10, color: '#77A7FF', delay: 0.5 },
        { cx: '85%', cy: '20%', r: 7, color: '#AAC9FF', delay: 0.65 },
        { cx: '75%', cy: '78%', r: 12, color: '#1877F2', delay: 0.8 },
        { cx: '15%', cy: '80%', r: 8, color: '#2851A3', delay: 0.95 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: dot.cx,
            top: dot.cy,
            width: dot.r * 2,
            height: dot.r * 2,
            backgroundColor: dot.color,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 0.4, delay: dot.delay, type: 'spring', stiffness: 200 }}
        />
      ))}

      {/* Animated brush stroke across the canvas */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 30 220 Q 80 160 140 180 Q 200 200 250 140"
          stroke="#ECF3FF"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
        />
        <motion.path
          d="M 40 60 Q 100 40 160 70 Q 220 100 250 60"
          stroke="#AAC9FF"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.0, delay: 0.9, ease: 'easeInOut' }}
        />
      </svg>

      {/* Corner easel legs — decorative */}
      <motion.div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-16"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        <div className="w-1 h-8 bg-[#444950] rounded-full rotate-12 origin-top" />
        <div className="w-1 h-8 bg-[#444950] rounded-full -rotate-12 origin-top" />
      </motion.div>
    </div>
  );
}

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 — Page Not Found | Fair Fab Gallery"
        description="The page you're looking for doesn't exist. Explore Fair Fab Gallery's portfolio, return home, or contact us."
      />

      <main className="min-h-screen bg-[#F2F3F5] flex flex-col items-center justify-center px-4 py-20">
        {/* Illustration */}
        <ArtworkNotFoundIllustration />

        {/* Text content */}
        <motion.div
          className="mt-16 text-center max-w-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#000000]">
            Oops! Page Not Found
          </h1>
          <p className="mt-4 text-[#444950] text-lg">
            The artwork you're looking for doesn't exist… yet.
          </p>
          <p className="mt-2 text-[#CCCCCC] text-sm">
            It may have been moved, renamed, or it never made it off the canvas.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#1877F2] text-white font-semibold text-sm hover:bg-[#2851A3] transition-all duration-200 shadow-sm hover:shadow-md min-w-[180px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            Back to Gallery
          </Link>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#000000] text-white font-semibold text-sm hover:bg-[#444950] transition-all duration-200 shadow-sm hover:shadow-md min-w-[180px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border-2 border-[#1877F2] text-[#1877F2] font-semibold text-sm hover:bg-[#ECF3FF] transition-all duration-200 shadow-sm hover:shadow-md min-w-[180px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact Us
          </Link>
        </motion.div>

        {/* Subtle decorative background circles */}
        <div
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#ECF3FF] opacity-60" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#ECF3FF] opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#AAC9FF] opacity-10" />
        </div>
      </main>
    </>
  );
}
