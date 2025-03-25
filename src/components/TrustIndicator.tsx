import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TrustIndicatorProps {
  score: number;
  label?: string;
  className?: string;
}

const TrustIndicator = ({ score, label = "Trust Score", className = "" }: TrustIndicatorProps) => {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayScore(score);
    }, 500);
    return () => clearTimeout(timer);
  }, [score]);

  const getTrustLevel = (score: number) => {
    if (score >= 90) return { level: 'high', color: 'trust-high' };
    if (score >= 70) return { level: 'medium', color: 'trust-medium' };
    return { level: 'low', color: 'trust-low' };
  };

  const trustInfo = getTrustLevel(displayScore);

  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`trust-indicator ${trustInfo.color} ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 40 40">
            <circle
              cx="20"
              cy="20"
              r="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            <motion.circle
              cx="20"
              cy="20"
              r="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: displayScore / 100 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                strokeDasharray: "100 100",
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span 
              className="text-sm font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {Math.round(displayScore)}%
            </motion.span>
          </div>
        </div>
        
        <div>
          <div className="font-semibold text-sm">{label}</div>
          <div className="text-xs opacity-75 capitalize">{trustInfo.level}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrustIndicator;

# AI edit: improve ui day by day
