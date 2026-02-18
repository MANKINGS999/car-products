import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Zap, Shield, Award } from 'lucide-react';

const services = [
    {
        icon: Sparkles,
        title: "Bespoke Interiors",
        description: "Handcrafted leather upholstery, custom stitching patterns, and premium material selection.",
        gradient: "from-amber-500 to-orange-600"
    },
    {
        icon: Zap,
        title: "Flagship Audio",
        description: "High-fidelity sound systems with acoustic tuning and custom fabrication.",
        gradient: "from-blue-500 to-cyan-600"
    },
    {
        icon: Shield,
        title: "Paint Protection",
        description: "Premium PPF and ceramic coating with lifetime warranty options.",
        gradient: "from-emerald-500 to-teal-600"
    },
    {
        icon: Award,
        title: "Precision Detailing",
        description: "Meticulous paint correction, polishing, and maintenance programs.",
        gradient: "from-purple-500 to-pink-600"
    }
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" ref={ref} className="py-3xl lg:py-4xl bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary relative overflow-hidden">
            {/* Ambient gradient orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-2xl max-w-3xl"
                >
                    <span className="text-small uppercase tracking-[0.2em] text-text-tertiary font-medium mb-4 block">
                        What We Offer
                    </span>
                    <h2 className="text-h2 lg:text-h1 font-display font-bold text-white mb-6">
                        Crafted to<br />
                        <span className="bg-gradient-to-r from-accent-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Perfection
                        </span>
                    </h2>
                    <p className="text-body text-text-secondary font-light">
                        Every detail matters. From concept to completion, we deliver automotive excellence.
                    </p>
                </motion.div>

                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="group relative bg-gradient-to-br from-surface to-bg-secondary p-8 rounded-2xl border border-border-subtle hover:border-border-medium transition-all duration-premium hover:shadow-elevation-md overflow-hidden"
                        >
                            {/* Gradient accent on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-premium`} />

                            {/* Icon with gradient */}
                            <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-6 shadow-elevation-sm`}>
                                <service.icon className="w-full h-full text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-h3 font-display font-bold text-white mb-3 relative">
                                {service.title}
                            </h3>
                            <p className="text-body text-text-secondary font-light leading-relaxed relative">
                                {service.description}
                            </p>

                            {/* Decorative gradient line */}
                            <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-premium`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
