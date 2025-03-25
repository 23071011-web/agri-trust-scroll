import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        
        // AgriTrust Brand Colors
        "agri-green": {
          DEFAULT: "hsl(var(--agri-green))",
          glow: "hsl(var(--agri-green-glow))",
        },
        "agri-gold": {
          DEFAULT: "hsl(var(--agri-gold))",
          glow: "hsl(var(--agri-gold-glow))",
        },
        
        // Blockchain Tech Colors
        "cyber-cyan": {
          DEFAULT: "hsl(var(--cyber-cyan))",
          glow: "hsl(var(--cyber-cyan-glow))",
        },
        "tech-blue": "hsl(var(--tech-blue))",
        "tech-purple": "hsl(var(--tech-purple))",
        
        // Trust & Security
        "trust-green": "hsl(var(--trust-green))",
        "warning-amber": "hsl(var(--warning-amber))",
        "danger-red": "hsl(var(--danger-red))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          glow: "hsl(var(--secondary-glow))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          glow: "hsl(var(--accent-glow))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          glass: "hsl(var(--card-glass))",
        },
      },
      backgroundImage: {
        "gradient-agri": "var(--gradient-agri)",
        "gradient-cyber": "var(--gradient-cyber)",
        "gradient-glass": "var(--gradient-glass)",
      },
      dropShadow: {
        "neon": "0 0 10px currentColor",
        "glow": ["0 0 10px currentColor", "0 0 20px currentColor"],
        "particle": "var(--particle-glow)",
      },
      boxShadow: {
        "hologram": "var(--hologram-shadow)",
        "glass": "0 8px 32px hsl(var(--glass-shadow))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;


# AI edit: improve ui day by day
