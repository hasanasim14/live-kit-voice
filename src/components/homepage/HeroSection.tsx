import {
  CheckCircle2,
  Globe2,
  Package,
  Phone,
  Languages,
  MapPin,
} from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-white p-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto rounded-2xl bg-[#002d88] text-white shadow-2xl p-10 space-y-10">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to <span className="text-yellow-400">StormFiber AIVA</span>,
            your Artificially Intelligent Virtual Assistant!
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Now you can experience how AIVA works with your brand.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-yellow-400 text-center">
          What AIVA can do right now:
        </h2>

        <ol className="space-y-8 text-white/90">
          <li>
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold text-white text-lg">
                Answer general questions
              </span>
            </div>
            <p>
              AIVA has access to all Help Center articles. That means it can
              help with queries related to{" "}
              <strong>
                StormFiber billing, troubleshooting, policies, products, and
                services.
              </strong>
            </p>
          </li>

          <li>
            <div className="flex items-center gap-3 mb-2">
              <Globe2 className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold text-white text-lg">
                Check service availability
              </span>
            </div>
            <p>
              Want to know if StormFiber operates in Karachi? Just ask AIVA. For
              best results, share your city, area, and locality – AIVA will try
              to figure it out and also link you to the availability page.
            </p>

            <div className="mt-4 p-4 rounded-lg bg-white/10 border border-yellow-400/40">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <p className="font-semibold text-yellow-400">
                  Currently incorporated locations:
                </p>
              </div>
              <ul className="ml-4 list-disc space-y-2 text-sm text-white/90">
                <li>
                  <span className="font-bold text-white">Karachi</span>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Clifton: Bath Island, Blocks 1–9, Civil Lines, Dolmen Mall
                      Clifton, Frere Town, Harbor Front, NHS-Zamama, Ocean Mall,
                      Old Clifton, The Forum
                    </li>
                    <li>North Nazimabad: Blocks A–N, P, R–T, W</li>
                    <li>M.T. Khan Road: Lalazar Society</li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold text-white">Lahore</span>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>PCSIR: Phase 1, Phase 2</li>
                    <li>
                      Ferozpur Road: Shadab Colony, Pak Arab Housing Scheme
                    </li>
                    <li>Abdalian Housing Society: Blocks A–C</li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-3 mb-2">
              <Package className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold text-white text-lg">
                Help with packages
              </span>
            </div>
            <p>
              Not sure which plan works best for you? AIVA can suggest packages
              based on your{" "}
              <strong>
                city, budget, internet speed needs, and required services (TV,
                Internet, Phone).
              </strong>
            </p>
            <ul className="mt-2 ml-6 list-disc text-sm space-y-1">
              <li>
                Ask: <span className="italic">“3000 mein kya milega?”</span> and
                AIVA will show you packages in that range.
              </li>
              <li>
                Or simply ask:{" "}
                <span className="italic">“What packages do you offer?”</span>
              </li>
            </ul>

            <div className="mt-4 p-4 rounded-lg bg-white/10 border border-yellow-400/40">
              <p className="text-sm">
                <strong className="text-yellow-400">Note:</strong> Currently,
                AIVA has access to all triple play, double play, and standard
                plans only for <strong>Karachi and Islamabad.</strong>
              </p>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold text-white text-lg">
                Find you the right contact center
              </span>
            </div>
            <p>Based on your area’s dialing code.</p>
          </li>

          <li>
            <div className="flex items-center gap-3 mb-2">
              <Languages className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold text-white text-lg">
                Talk in multiple languages
              </span>
            </div>
            <p>
              AIVA can respond in{" "}
              <span className="text-yellow-400">
                English, Urdu, Sindhi, Punjabi, Pashto
              </span>
              , and their Roman versions.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HeroSection;
