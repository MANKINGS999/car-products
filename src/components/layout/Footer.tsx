import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-bg-primary py-xl border-t border-border-subtle">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#hero" className="font-display font-bold text-2xl tracking-tight text-white inline-block mb-3">
                            AYANSH<span className="text-accent-primary">.</span>
                        </a>
                        <p className="text-small text-text-tertiary">
                            © {new Date().getFullYear()} Ayansh Car Decor. Crafted with precision.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-surface flex items-center justify-center
                         text-text-tertiary hover:text-white hover:bg-accent-primary
                         transition-all duration-premium"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-surface flex items-center justify-center
                         text-text-tertiary hover:text-white hover:bg-accent-primary
                         transition-all duration-premium"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-surface flex items-center justify-center
                         text-text-tertiary hover:text-white hover:bg-accent-primary
                         transition-all duration-premium"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
