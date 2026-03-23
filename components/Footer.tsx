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
              <img 
                src="/img/Lux_Elite_Cleaning_White.png" // Replace with your actual logo path
                alt="Lux Elite Cleaning"
                className="h-[3rem] w-auto uppercase" // Uses the text size as the fixed height
                style={{
                  objectFit: 'contain', // Prevents distortion
                  // Maintain tracking/letterSpacing if the image includes text spacing
                  // letterSpacing: '0.3em', 
                }}/>
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
              gianiarip2002@hotmail.com
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