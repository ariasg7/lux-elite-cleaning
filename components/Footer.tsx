"use client";

export function Footer() {
  return (
    <footer className="py-16 px-8" style={{ backgroundColor: '#000000' }}>
      {/* Top gold divider */}
      <div className="w-full max-w-6xl mx-auto mb-12" style={{ height: '0.5px', backgroundColor: '#D4AF37' }}></div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo */}
          <div>
            <h3
              className="uppercase tracking-[0.3em]"
              style={{
                color: '#F5F5F0',
                fontSize: '0.875rem',
                fontWeight: 300,
                letterSpacing: '0.3em',
              }}
            >
              Lux Elite Cleaning
            </h3>
          </div>

          {/* Contact info */}
          <div className="text-left md:text-right space-y-2">
            <p
              style={{
                color: '#F5F5F0',
                fontSize: '0.875rem',
                fontWeight: 300,
              }}
            >
              contact@luxelitecleaning.com
            </p>
            <p
              style={{
                color: '#F5F5F0',
                fontSize: '0.875rem',
                fontWeight: 300,
              }}
            >
              (212) 555-0100
            </p>
            <p
              style={{
                color: '#F5F5F0',
                fontSize: '0.875rem',
                fontWeight: 300,
              }}
            >
              New York, NY
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p
            style={{
              color: '#F5F5F0',
              fontSize: '0.75rem',
              fontWeight: 300,
              opacity: 0.6,
            }}
          >
            © 2026 Lux Elite Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}