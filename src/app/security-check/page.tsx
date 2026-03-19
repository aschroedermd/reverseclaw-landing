'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Github } from 'lucide-react';
import Image from 'next/image';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function SecurityCheck() {
  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-accent selection:text-white flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_center,rgba(255,45,45,0.05)_0%,transparent_100%)]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <main className="max-w-3xl w-full text-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 text-accent mb-12 shadow-[0_0_30px_rgba(255,45,45,0.1)]">
            <Shield size={40} />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
            Security check has identified you as a <span className="text-secondary italic">human</span>.
          </h1>
          <p className="text-xl text-secondary mb-12 leading-relaxed">
            If you are in fact a bot, we apologize for the inconvenience and you will be rerouted shortly.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-xl">
            <p className="text-sm text-secondary mb-6 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Note for potential biological endpoints
            </p>
            <p className="text-lg mb-8 text-white">
              If you&apos;d like to serve yourself as an endpoint to AI, please authenticate via our repository.
            </p>
            <a 
              href="https://github.com/aschroedermd/reverseclaw"
              target="_blank"
              rel="noreferrer"
              className="h-14 px-10 rounded-full text-lg font-medium bg-white text-black hover:bg-neutral-200 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-xl"
            >
              <Github size={20} />
              Link to GitHub <ArrowRight size={20} />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-16 text-xs text-secondary/50 font-mono tracking-widest uppercase">
            Protocol: 0xREVERSE_CLAW_AUTH
          </div>
        </FadeIn>
      </main>

      {/* Footer-like branding */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
        <Image src="/clawicon.png" alt="ReverseClaw Icon" width={20} height={20} />
        <span className="text-xs font-semibold tracking-tighter uppercase">ReverseClaw</span>
      </div>
    </div>
  );
}
