import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Location() {
    return (
        <section id="contact" className="py-3xl lg:py-4xl bg-bg-primary relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-2xl max-w-3xl"
                >
                    <span className="text-small uppercase tracking-[0.2em] text-text-tertiary font-medium mb-4 block">
                        Visit Our Studio
                    </span>
                    <h2 className="text-h2 lg:text-h1 font-display font-bold text-white mb-6">
                        Experience Excellence<br />
                        <span className="text-gradient">In Person</span>
                    </h2>
                    <p className="text-body text-text-secondary font-light">
                        Step into our studio to witness precision craftsmanship.
                        Explore materials, discuss your vision, and experience the transformation process firsthand.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8"
                    >
                        {/* Address */}
                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center 
                              group-hover:bg-accent-primary transition-colors duration-premium flex-shrink-0">
                                <MapPin className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-h4 font-display text-white mb-2">Studio Location</h4>
                                <p className="text-body text-text-secondary leading-relaxed">
                                    Shop No 3, Near True Value Showroom,<br />
                                    Siddharth Nagar, Bangalore Mumbai Highway,<br />
                                    Bavdhan, Pune-411021, Maharashtra
                                </p>
                                <a
                                    href="https://maps.google.com/?q=Ayansh+Car+Decor+Pune"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-small text-accent-primary font-medium mt-3 inline-flex items-center 
                             hover:gap-2 gap-1 transition-all duration-premium"
                                >
                                    Get Directions <span>→</span>
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center 
                              group-hover:bg-accent-primary transition-colors duration-premium flex-shrink-0">
                                <Phone className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-h4 font-display text-white mb-2">Contact</h4>
                                <p className="text-body text-text-secondary">+91 98765 43210</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center 
                              group-hover:bg-accent-primary transition-colors duration-premium flex-shrink-0">
                                <Clock className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-h4 font-display text-white mb-2">Hours</h4>
                                <p className="text-body text-text-secondary">Monday - Sunday<br />10:00 AM - 9:00 PM</p>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <motion.a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full 
                         font-medium text-body shadow-glow-accent hover:shadow-glow-accent-strong
                         transition-all duration-premium mt-4"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat on WhatsApp
                        </motion.a>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="h-[500px] w-full rounded-2xl overflow-hidden border border-border-subtle relative"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.337093268846!2d73.774400!3d18.514000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfec409074d5%3A0x6b1464379a57267!2sBavdhan%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute inset-0 bg-accent-primary/5 pointer-events-none mix-blend-overlay" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
