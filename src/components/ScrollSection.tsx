import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  overlay?: boolean;
}

const ScrollSection = ({ 
  id, 
  className = '', 
  children, 
  title, 
  subtitle, 
  overlay = true 
}: ScrollSectionProps) => {
  return (
    <section 
      id={id}
      className={`scroll-section relative ${className}`}
    >
      {/* Content Overlay */}
      {overlay && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto px-8"
          >
            {title && (
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      )}
      
      {children}
    </section>
  );
};

export default ScrollSection;

# AI edit: improve ui day by day


# AI edit: cghanged the ui files and added new coll feature
