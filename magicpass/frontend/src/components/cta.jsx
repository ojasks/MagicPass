import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-accent/30 p-12 md:p-16">
          
          {/* Decorative blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Ready to Transform Your Events?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the revolution. Start using Magic Pass today and give your attendees 
              the secure, fraud-free experience they deserve.
            </p>

            {/* BUTTON ROW */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* Primary Button */}
              <a href="/admin">
                <button
                  className="gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold inline-flex items-center justify-center text-lg"
                >
                  Launch Admin Portal <ArrowRight size={20} />
                </button>
              </a>

              {/* Outline Button */}
              <a href="/visitor">
                <button
                  className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold inline-flex items-center justify-center text-lg"
                >
                  Try as Visitor
                </button>
              </a>
            </div>

            {/* 3 TEXT ITEMS BELOW BUTTONS */}
            <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div>
                <p className="font-semibold text-foreground">Quick Setup</p>
                <p className="text-muted-foreground">5 minutes to launch</p>
              </div>

              <div className="hidden sm:block w-px bg-border/50"></div>

              <div>
                <p className="font-semibold text-foreground">24/7 Support</p>
                <p className="text-muted-foreground">Always here to help</p>
              </div>

              <div className="hidden sm:block w-px bg-border/50"></div>

              <div>
                <p className="font-semibold text-foreground">Free Trial</p>
                <p className="text-muted-foreground">No credit card required</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
