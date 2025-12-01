import { ArrowRight, Shield, Lock } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm font-medium text-accent">NFT Protocol</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Secure Event Access,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {" "}
                Reimagined
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl text-pretty">
              Magic Pass revolutionizes event access with Soulbound NFTs. Eliminate fraud, prevent scalping, and ensure
              secure ownership of every ticket.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              {/* Primary Button */}
              <a href="/admin">
                <button
                  className="gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold inline-flex items-center justify-center text-lg"
                >
                  Get Started <ArrowRight size={20} />
                </button>
              </a>

              {/* Outline Button */}
              <a href="/scanner">
                <button
                  className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold inline-flex items-center justify-center text-lg"
                >
                  View Scanner
                </button>
              </a>
            </div>

            {/* Icon Row */}
            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Shield size={20} className="text-primary" />
                <span className="text-sm font-medium">Blockchain Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock size={20} className="text-primary" />
                <span className="text-sm font-medium">Fraud-Proof</span>
              </div>
            </div>
          </div>

          {/* Right side visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-96">
              
              {/* Animated gradient orb */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse"></div>

              {/* Card showcase */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-96 bg-card border-2 border-accent/30 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">

                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg"></div>

                  <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                    <div className="h-3 w-24 bg-primary/20 rounded"></div>
                    <div className="h-2 w-16 bg-primary/10 rounded"></div>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Soulbound NFT Ticket</p>
                    <p className="text-2xl font-bold text-primary">Event Access</p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
