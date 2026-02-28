import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HologramPanelProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'primary' | 'accent' | 'agri-green' | 'cyber-cyan';
}

const HologramPanel = ({ 
  children, 
  className = '', 
  glowColor = 'accent' 
}: HologramPanelProps) => {
  const glowStyles = {
    primary: 'shadow-[0_0_30px_hsl(var(--primary)/0.5)] border-primary/30',
    accent: 'shadow-[0_0_30px_hsl(var(--accent)/0.5)] border-accent/30',
    'agri-green': 'shadow-[0_0_30px_hsl(var(--agri-green)/0.5)] border-agri-green/30',
    'cyber-cyan': 'shadow-[0_0_30px_hsl(var(--cyber-cyan)/0.5)] border-cyber-cyan/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`hologram-panel ${glowStyles[glowColor]} ${className}`}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated scan lines */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30"
          animate={{
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
};

export default HologramPanel;

# AI edit: improve ui day by day


# AI edit: cghanged the ui files and added new coll feature


# AI edit: update ui and theme color


# AI edit: fix the bugs
