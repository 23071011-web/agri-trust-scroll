import ScrollSection from '../components/ScrollSection';
import Scene3D from '../components/Scene3D';
import TrustIndicator from '../components/TrustIndicator';
import HologramPanel from '../components/HologramPanel';
import ParticleField from '../components/ParticleField';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoImage from '../assets/agritrust-logo.png';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // GSAP ScrollTrigger setup for smooth scroll animations
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Fixed 3D Scene Background */}
      <div className="fixed inset-0 z-0">
        <Scene3D />
      </div>

      {/* Particle Field Overlay */}
      <ParticleField className="fixed inset-0 z-5" count={80} />

      {/* Scroll Content */}
      <div className="relative z-10">
        {/* Intro Section */}
        <ScrollSection 
          id="intro" 
          className="intro-section"
          title=""
          subtitle=""
          overlay={false}
        >
          <div className="flex items-center justify-center min-h-screen">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-center"
            >
              <img 
                src={logoImage} 
                alt="AgriTrust Logo" 
                className="w-64 h-32 mx-auto mb-8 object-contain neon-glow"
              />
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-agri bg-clip-text text-transparent">
                AgriTrust
              </h1>
              <p className="text-2xl md:text-3xl text-accent mb-8">
                Farm to Fork Transparency
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Button 
                  size="lg" 
                  className="glass-panel text-lg px-8 py-4 cyber-glow hover:scale-105 transition-transform"
                >
                  Begin Journey
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </ScrollSection>

        {/* Farm Section - Act I */}
        <ScrollSection 
          id="farm" 
          className="farm-section"
          title="Act I: The Farm"
          subtitle="Where transparency begins with digital twins and blockchain verification"
        >
          <div className="absolute bottom-20 left-10 z-20">
            <HologramPanel glowColor="agri-green">
              <div className="p-6 min-w-[300px]">
                <h3 className="text-xl font-bold mb-4 text-agri-green">Digital Farm Twin</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Farmer:</span>
                    <span className="text-agri-gold">Prajwal Singh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="text-green-400">✓ Verified</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Crop Quality:</span>
                    <span className="text-agri-gold">Premium A+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Organic Certified:</span>
                    <span className="text-green-400">✓ Yes</span>
                  </div>
                </div>
              </div>
            </HologramPanel>
          </div>
        </ScrollSection>

        {/* Transport Section - Act II */}
        <ScrollSection 
          id="transport" 
          className="transport-section"
          title="Act II: Trust Layer"
          subtitle="IoT sensors monitor every mile, building unbreakable trust"
        >
          <div className="absolute bottom-20 right-10 z-20">
            <HologramPanel glowColor="cyber-cyan">
              <div className="p-6 min-w-[320px]">
                <h3 className="text-xl font-bold mb-4 text-cyber-cyan">IoT Live Stream</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Temperature:</span>
                    <span className="text-green-400">4°C ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Humidity:</span>
                    <span className="text-green-400">85% ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span>Highway A1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ETA:</span>
                    <span className="text-agri-gold">2h 15m</span>
                  </div>
                  <div className="pt-2">
                    <TrustIndicator score={98} />
                  </div>
                </div>
              </div>
            </HologramPanel>
          </div>
        </ScrollSection>

        {/* Market Section - Act III */}
        <ScrollSection 
          id="market" 
          className="market-section"
          title="Act III: Smart Contracts"
          subtitle="Automated payments reward every stakeholder fairly"
        >
          <div className="absolute bottom-20 left-10 z-20">
            <HologramPanel glowColor="primary">
              <div className="p-6 min-w-[350px]">
                <h3 className="text-xl font-bold mb-4 text-primary">Payment Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-3 bg-agri-green rounded-full"></div>
                    <span>Farmer: 60%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-3 bg-agri-gold rounded-full"></div>
                    <span>Distributor: 25%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-3 bg-accent rounded-full"></div>
                    <span>Retailer: 15%</span>
                  </div>
                  <div className="pt-2 text-center">
                    <span className="text-lg font-bold text-agri-gold">+12 FarmTokens Earned</span>
                  </div>
                </div>
              </div>
            </HologramPanel>
          </div>
        </ScrollSection>

        {/* Consumer Section - Act IV */}
        <ScrollSection 
          id="consumer" 
          className="consumer-section"
          title="Act IV: Consumer Trust"
          subtitle="Scan, discover, and connect with the story behind your food"
        >
          <div className="absolute bottom-20 right-10 z-20">
            <HologramPanel glowColor="accent">
              <div className="p-6 min-w-[320px]">
                <h3 className="text-xl font-bold mb-4 text-accent">Farm Story</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>From:</span>
                    <span className="text-agri-gold">Prajwal Singh Farm</span>
                  </div>
                  <div className="text-center italic text-muted-foreground py-2">
                    "Grown with organic methods and love"
                  </div>
                  <div className="flex justify-between">
                    <span>Freshness:</span>
                    <span className="text-green-400">96% ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Green Score:</span>
                    <span className="text-green-400">A+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Journey:</span>
                    <span>3 days</span>
                  </div>
                  <div className="text-center pt-2">
                    <span className="text-agri-gold font-bold">You helped earn +12 FarmTokens!</span>
                  </div>
                </div>
              </div>
            </HologramPanel>
          </div>
        </ScrollSection>

        {/* Outro Section */}
        <ScrollSection 
          id="outro" 
          className="outro-section"
          title=""
          subtitle=""
          overlay={false}
        >
          <div className="flex items-center justify-center min-h-screen">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-cyber bg-clip-text text-transparent">
                Complete Transparency
              </h2>
              <p className="text-2xl md:text-3xl text-accent mb-12">
                From soil to soul, every step verified
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <HologramPanel>
                  <div className="p-6 text-center">
                    <div className="text-4xl mb-4 agri-glow">🌱</div>
                    <h3 className="text-xl font-bold mb-2">Trace</h3>
                    <p className="text-muted-foreground">Complete supply chain visibility</p>
                  </div>
                </HologramPanel>
                
                <HologramPanel>
                  <div className="p-6 text-center">
                    <div className="text-4xl mb-4 cyber-glow">🔗</div>
                    <h3 className="text-xl font-bold mb-2">Trust</h3>
                    <p className="text-muted-foreground">Blockchain-verified authenticity</p>
                  </div>
                </HologramPanel>
                
                <HologramPanel>
                  <div className="p-6 text-center">
                    <div className="text-4xl mb-4 neon-glow">👨‍🌾</div>
                    <h3 className="text-xl font-bold mb-2">Empower</h3>
                    <p className="text-muted-foreground">Fair rewards for farmers</p>
                  </div>
                </HologramPanel>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="space-y-4"
              >
                <Button 
                  size="lg" 
                  className="glass-panel text-xl px-12 py-6 mr-4 cyber-glow hover:scale-105 transition-transform"
                >
                  Start Your Farm Journey
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="glass-panel text-xl px-12 py-6 agri-glow hover:scale-105 transition-transform"
                >
                  Explore More
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </ScrollSection>
      </div>
    </div>
  );
};

export default Index;


# AI edit: improve ui day by day


# AI edit: cghanged the ui files and added new coll feature


# AI edit: update ui and theme color


# AI edit: fix the bugs


# AI edit: fix the bugs
