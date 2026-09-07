import React, { useEffect } from "react";

/**
 * Ceremonies page: editorial feed of living tradition updates via Elfsight Instagram widget.
 */
const Ceremonies: React.FC = () => {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c2418]">
      <section className="bg-[#1a3c28] py-16 md:py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#f4d068] text-xs tracking-[0.2em] uppercase font-medium mb-4">
            From the House of Adifagbola
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5 text-[#f4d068] leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Living Tradition &amp; Ceremonies
          </h1>
          <p className="text-[#faf8f5]/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
            Authentic glimpses into our sacred practices, cultural celebrations, and community healing sessions.
          </p>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-14 md:py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#1a3c28] mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Shared Moments
            </h2>
            <p className="text-[#2c2418]/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-sans">
              Photos and short films from rites, gatherings, and daily practice, shared as they unfold.
            </p>
          </div>

          <div
            id="social-feed-embed"
            className="w-full max-w-3xl mx-auto min-h-[600px] rounded-xl shadow-lg bg-white border border-[#ebe6dc] overflow-hidden p-2 sm:p-4"
            aria-label="Instagram feed from Adifagbola Traditional Healing"
          >
            {/* Elfsight Instagram Feed */}
            <div
              className="elfsight-app-89d0a981-3bde-42f9-85c7-3ead2cdefcb8"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16 px-5 border-t border-[#ebe6dc]">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl font-bold text-[#1a3c28] mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Walk with the tradition
          </h2>
          <p className="text-[#2c2418]/70 text-sm leading-relaxed mb-8 font-sans">
            Follow Babaláwo Dr. Faniyi Adebanjo Adifagbola on Instagram for new posts from ceremonies, teaching, and community life.
          </p>
          <a
            href="https://www.instagram.com/adifagbolatraditionalhealing/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#f4d068] text-[#1a3c28] font-semibold text-sm rounded-full hover:bg-[#e8c56a] transition-colors shadow-sm font-sans"
          >
            Follow on Instagram
          </a>
          <p className="mt-4 text-[#2c2418]/40 text-xs font-sans">@adifagbolatraditionalhealing</p>
        </div>
      </section>
    </div>
  );
};

export default Ceremonies;
