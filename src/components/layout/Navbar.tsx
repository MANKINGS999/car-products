import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { name: 'Collections', href: '/collection' },
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-premium ease-premium ${isScrolled
                        ? 'bg-bg-primary/80 backdrop-blur-glass border-b border-border-subtle'
                        : 'bg-transparent border-b border-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="font-display font-bold text-2xl tracking-tight text-white">
                        AYANSH<span className="text-accent-primary">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-small font-medium hover:text-white 
                           transition-colors duration-premium tracking-wide uppercase relative group
                           ${location.pathname === link.href ? 'text-white' : 'text-text-secondary'}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent-primary 
                                 transition-all duration-premium group-hover:w-full
                                 ${location.pathname === link.href ? 'w-full' : 'w-0'}`} />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <button className="flex items-center gap-2 px-6 py-3 glass rounded-full 
                               hover:bg-white/10 hover:border-border-medium
                               transition-all duration-premium group">
                            <Phone size={16} />
                            <span className="text-small font-medium">Book Now</span>
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl md:hidden 
                       flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className="text-h3 font-display font-bold text-white hover:text-accent-primary 
                           transition-colors duration-premium"
                            >
                                {link.name}
                            </motion.a>
                        ))}

                        <motion.button
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
                            className="btn-primary mt-8"
                        >
                            <Phone size={20} className="mr-2" />
                            Book Consultation
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
