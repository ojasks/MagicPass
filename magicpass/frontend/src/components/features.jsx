import { Lock, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fraud Prevention",
    description:
      "Soulbound NFTs are permanently tied to the holder's wallet, making them impossible to transfer or counterfeit.",
  },
  {
    icon: Lock,
    title: "Anti-Scalping",
    description: "Built-in verification prevents unauthorized ticket resales, ensuring fair access for all attendees.",
  },
  {
    icon: Zap,
    title: "Instant Verification",
    description:
      "Scan QR codes for instant blockchain verification. No intermediaries, no delays, just seamless entry.",
  },
  {
    icon: Users,
    title: "User-Controlled",
    description:
      "Attendees maintain full control of their digital tickets through their own wallets and private keys.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            The Future of Event Access
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Magic Pass combines blockchain security with user-friendly design to 
            create the most secure ticketing system ever.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 hover:shadow-lg transition-shadow border border-border rounded-lg bg-white/5"
              >
                {/* Icon */}
                <div className="mb-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon size={24} className="text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
