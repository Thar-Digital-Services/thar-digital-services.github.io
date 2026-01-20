'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface ParticleBackgroundProps {
  particleCount?: number;
  largeParticleCount?: number;
  className?: string;
  particleColor?: string;
  mouseInteraction?: boolean;
  interactionRadius?: number;
}

interface ParticleConfig {
  id: number;
  baseX: number;
  baseY: number;
  duration: number;
  delay: number;
  opacity: number;
}

function Particle({
  config,
  dimensions,
  mouseX,
  mouseY,
  interactionRadius,
  mouseInteraction,
  colorClass,
  size,
}: {
  config: ParticleConfig;
  dimensions: { width: number; height: number };
  mouseX: any;
  mouseY: any;
  interactionRadius: number;
  mouseInteraction: boolean;
  colorClass: string;
  size: 'small' | 'large';
}) {
  const baseX = useMotionValue(config.baseX);
  const baseY = useMotionValue(config.baseY);
  const time = useMotionValue(0);
  
  // Generate random movement parameters for each particle
  const speedX = useRef(0.05 + Math.random() * 0.1);
  const speedY = useRef(0.05 + Math.random() * 0.1);
  const amplitudeX = useRef(0.3 + Math.random() * 0.4);
  const amplitudeY = useRef(0.3 + Math.random() * 0.4);
  const phaseX = useRef(Math.random() * Math.PI * 2);
  const phaseY = useRef(Math.random() * Math.PI * 2);
  const frequencyX = useRef(0.5 + Math.random() * 1.5);
  const frequencyY = useRef(0.5 + Math.random() * 1.5);
  const centerX = useRef(config.baseX);
  const centerY = useRef(config.baseY);
  const driftX = useRef((Math.random() - 0.5) * 0.2);
  const driftY = useRef((Math.random() - 0.5) * 0.2);

  // Animated base position with more random movement
  useEffect(() => {
    const interval = setInterval(() => {
      const t = time.get() + 0.01;
      time.set(t);
      
      // Combine multiple sine waves with different frequencies for more randomness
      const x1 = Math.sin(phaseX.current + t * speedX.current * frequencyX.current);
      const x2 = Math.sin(phaseX.current * 2.3 + t * speedX.current * frequencyX.current * 1.7);
      const x3 = Math.cos(phaseX.current * 0.7 + t * speedX.current * frequencyX.current * 0.5);
      
      const y1 = Math.cos(phaseY.current + t * speedY.current * frequencyY.current);
      const y2 = Math.cos(phaseY.current * 1.8 + t * speedY.current * frequencyY.current * 1.3);
      const y3 = Math.sin(phaseY.current * 0.9 + t * speedY.current * frequencyY.current * 0.6);
      
      // Combine waves and add drift
      const xOffset = (x1 * 0.5 + x2 * 0.3 + x3 * 0.2) * amplitudeX.current * dimensions.width;
      const yOffset = (y1 * 0.5 + y2 * 0.3 + y3 * 0.2) * amplitudeY.current * dimensions.height;
      
      // Update center position with slow drift
      centerX.current += driftX.current;
      centerY.current += driftY.current;
      
      // Keep particles within bounds with wrapping
      if (centerX.current < 0) centerX.current = dimensions.width;
      if (centerX.current > dimensions.width) centerX.current = 0;
      if (centerY.current < 0) centerY.current = dimensions.height;
      if (centerY.current > dimensions.height) centerY.current = 0;
      
      baseX.set(centerX.current + xOffset);
      baseY.set(centerY.current + yOffset);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [config.id, dimensions, baseX, baseY, time]);

  // Calculate mouse repulsion
  const mouseInfluenceX = useTransform(
    [baseX, mouseX, baseY, mouseY],
    ([px, mx, py, my]) => {
      if (!mouseInteraction) return 0;
      const dx = px - mx;
      const dy = py - my;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < interactionRadius && distance > 0) {
        const strength = (1 - distance / interactionRadius) * (size === 'large' ? 50 : 30);
        return (dx / distance) * strength;
      }
      return 0;
    }
  );

  const mouseInfluenceY = useTransform(
    [baseX, mouseX, baseY, mouseY],
    ([px, mx, py, my]) => {
      if (!mouseInteraction) return 0;
      const dx = px - mx;
      const dy = py - my;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < interactionRadius && distance > 0) {
        const strength = (1 - distance / interactionRadius) * (size === 'large' ? 50 : 30);
        return (dy / distance) * strength;
      }
      return 0;
    }
  );

  const finalX = useTransform([baseX, mouseInfluenceX], ([bx, mx]) => bx + mx);
  const finalY = useTransform([baseY, mouseInfluenceY], ([by, my]) => by + my);

  return (
    <motion.div
      className={`absolute ${size === 'small' ? 'w-1 h-1' : 'w-2 h-2'} ${colorClass} rounded-full ${size === 'large' ? 'blur-[1px]' : ''}`}
      style={{
        x: finalX,
        y: finalY,
        opacity: config.opacity,
      }}
    />
  );
}

export default function ParticleBackground({
  particleCount = 50,
  largeParticleCount = 15,
  className = '',
  particleColor = 'primary',
  mouseInteraction = true,
  interactionRadius = 150,
}: ParticleBackgroundProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!mouseInteraction) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseInteraction, mouseX, mouseY]);

  // Generate stable particle configurations with more random starting positions
  const smallParticles: ParticleConfig[] = Array.from({ length: particleCount }).map((_, i) => {
    return {
      id: i,
      baseX: Math.random() * dimensions.width,
      baseY: Math.random() * dimensions.height,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
      opacity: 0.15 + Math.random() * 0.35,
    };
  });

  const largeParticles: ParticleConfig[] = Array.from({ length: largeParticleCount }).map((_, i) => {
    return {
      id: i + particleCount,
      baseX: Math.random() * dimensions.width,
      baseY: Math.random() * dimensions.height,
      duration: 20 + Math.random() * 25,
      delay: Math.random() * 8,
      opacity: 0.1 + Math.random() * 0.3,
    };
  });

  const getParticleColor = () => {
    if (particleColor === 'primary') {
      return 'bg-primary/40';
    }
    if (particleColor === 'white') {
      return 'bg-white/40';
    }
    return particleColor;
  };

  const getLargeParticleColor = () => {
    if (particleColor === 'primary') {
      return 'bg-primary/30';
    }
    if (particleColor === 'white') {
      return 'bg-white/30';
    }
    return particleColor;
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Small particles */}
      {smallParticles.map((particle) => (
        <Particle
          key={`small-${particle.id}`}
          config={particle}
          dimensions={dimensions}
          mouseX={mouseX}
          mouseY={mouseY}
          interactionRadius={interactionRadius}
          mouseInteraction={mouseInteraction}
          colorClass={getParticleColor()}
          size="small"
        />
      ))}

      {/* Larger floating particles */}
      {largeParticles.map((particle) => (
        <Particle
          key={`large-${particle.id}`}
          config={particle}
          dimensions={dimensions}
          mouseX={mouseX}
          mouseY={mouseY}
          interactionRadius={interactionRadius}
          mouseInteraction={mouseInteraction}
          colorClass={getLargeParticleColor()}
          size="large"
        />
      ))}
    </div>
  );
}
