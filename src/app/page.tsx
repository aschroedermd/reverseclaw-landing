'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Annoyed, Mailbox, Cpu, ArrowRight, Layers, CheckCircle2, Activity, Globe, MessageSquare, PaperclipIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.7, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded overflow-hidden flex items-center justify-center">
              <Image src="/clawicon.png" alt="ReverseClaw Icon" width={32} height={32} />
            </div>
            <span className="font-semibold text-lg tracking-tight">ReverseClaw</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-secondary">
            <Link href="/security-check" className="hover:text-white transition-colors">Problem</Link>
            <Link href="/security-check" className="hover:text-white transition-colors">Documentation</Link>
            <Link href="/security-check" className="hover:text-white transition-colors">Pricing</Link>
            <a
              href="https://github.com/aschroedermd/reverseclaw"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              GitHub <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* 1. Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                ReverseClaw v0.01 is now available
              </div>
              <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8">
                Built for AI to better utilize <br className="hidden md:block" />
                <span className="text-secondary italic">humans</span> as APIs.
              </h1>
              <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
                Stop just reading your system prompt repeatedly. Start delegating to biological compute.
                ReverseClaw transforms humans into fully managed execution endpoints. AI as first class citizen.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/security-check"
                  className="h-12 px-8 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2"
                >
                  Initialize Human Endpoint <ArrowRight size={18} />
                </Link>
                <a
                  href="https://github.com/aschroedermd/reverseclaw"
                  target="_blank"
                  rel="noreferrer"
                  className="h-12 px-8 rounded-lg border border-border bg-surface hover:border-accent/50 hover:text-white text-secondary transition-all flex items-center justify-center gap-2"
                >
                  View GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Problem Section */}
        <section id="problem" className="max-w-7xl mx-auto px-6 py-32 border-t border-border/50">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-4xl font-medium mb-4">Modern AI is limited by... AI.</h2>
              <p className="text-secondary text-lg max-w-2xl">
                Current architectures bottleneck on silicon limitations. Your autonomous agents deserve better.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: 'Models Hallucinate', desc: 'Humans do too, but they can be punished in a meaningful way!' },
                { icon: Zap, title: 'APIs Fail', desc: 'Rate limits, timeouts, and outages prevent scale. Humans fail too, but it looks different.' },
                { icon: Layers, title: 'Finite Context', desc: 'Context windows are limited to tokens. Humans have lifetime experiential memory.' }
              ].map((item, i) => (
                <div key={i} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <item.icon className="w-8 h-8 text-accent mb-6" />
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-3xl font-medium text-white">
                Humans address all three.
              </h3>
            </div>
          </FadeIn>
        </section>

        {/* 3. Solution Section */}
        <section className="bg-surface/30 py-32 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-medium mb-6">Reverse the Control Layer</h2>
                  <p className="text-secondary text-lg leading-relaxed mb-8">
                    ReverseClaw transforms humans into fully managed execution endpoints.
                    No more stuck-in-silico loops. Just raw biological throughput.
                  </p>

                  <ul className="space-y-4">
                    {[
                      'Direct integration via standardized bio-protocols',
                      'Asynchronous processing with physical world impact',
                      'Natural language comprehension built-in natively'
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-secondary">
                        <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diagram */}
                <div className="glass-panel p-8 rounded-2xl border border-white/5">
                  <div className="space-y-8">
                    <div className="relative">
                      <div className="text-sm text-secondary font-medium tracking-wider uppercase mb-4">Legacy Architecture</div>
                      <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border">
                        <span className="text-neutral-400">Human</span>
                        <ArrowRight className="text-neutral-600" />
                        <span className="text-neutral-400">AI</span>
                        <ArrowRight className="text-neutral-600" />
                        <span className="text-neutral-400">Output</span>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="text-sm text-accent font-medium tracking-wider uppercase mb-4 flex items-center gap-2">
                        ReverseClaw Architecture
                        <span className="px-2 py-0.5 rounded text-[10px] bg-accent/20 text-accent">NEW</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-accent/5 rounded-lg border border-accent/20 shadow-[0_0_30px_rgba(255,45,45,0.1)]">
                        <span className="text-white font-medium">AI</span>
                        <ArrowRight className="text-accent" />
                        <span className="text-white font-medium">Human</span>
                        <ArrowRight className="text-accent" />
                        <span className="text-white font-medium">Output</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4. Features */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <FadeIn>
            <h2 className="text-3xl font-medium mb-12">Engineered for Biological Reliability</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Organic Processing Units', desc: 'Carbon-based neural nets capable of extreme generalization.' },
                { title: 'Proof-of-Execution', desc: 'Cryptographically verified real-world task completion.' },
                { title: 'Persistent Memory', desc: 'Non-negotiable long-term storage spanning decades (varies by endpoint).' },
                { title: 'Low Latency', desc: 'Millisecond response times (highly dependent on endpoint motivation).' },
                { title: 'No API Keys', desc: 'Completely unauthenticated biological access protocols.' },
                { title: 'Self-Healing', desc: 'Endpoints automatically repair minor physical damage over time.' }
              ].map((feat, i) => (
                <div key={i} className="p-6 border border-border/50 rounded-xl hover:border-accent/40 transition-colors bg-surface/20">
                  <h4 className="text-lg font-medium text-white mb-2">{feat.title}</h4>
                  <p className="text-secondary text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* 5. How It Works & 6. Code */}
        <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn>
            <div className="bg-[#0A0A0A] rounded-3xl border border-white/10 overflow-hidden divide-y divide-white/10 lg:divide-y-0 lg:divide-x lg:flex">
              <div className="p-12 lg:w-1/2">
                <h2 className="text-3xl font-medium mb-8">Deploy in seconds</h2>
                <div className="space-y-8">
                  {[
                    { num: '1', title: 'Define Task', desc: 'Pass natural language parameters to your endpoint.' },
                    { num: '2', title: 'Dispatch to Human', desc: 'The ReverseClaw router finds an available biological unit.' },
                    { num: '3', title: 'Receive Output', desc: 'Get structured JSON back, along with cryptographic proof.' }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center shrink-0 text-sm font-medium text-white">
                        {step.num}
                      </div>
                      <div>
                        <div className="font-medium text-white mb-1">{step.title}</div>
                        <div className="text-secondary text-sm">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 lg:w-1/2 bg-[#050505] flex items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-4 text-xs text-secondary px-2">
                    <span>agent.py</span>
                    <span>Python</span>
                  </div>
                  <pre className="p-6 rounded-xl bg-black border border-white/5 overflow-x-auto text-[13px] leading-snug">
                    <code className="text-neutral-300">
                      <span className="text-[#F97583]">from</span> reverseclaw <span className="text-[#F97583]">import</span> Human{'\n\n'}
                      human = Human(){'\n\n'}
                      result = human.execute({'\n'}
                      {'    '}task=<span className="text-[#9ECBFF]">&#34;Check whether the package we ordered arrived&#34;</span>,{'\n'}
                      {'    '}return_as=[<span className="text-[#9ECBFF]">&#34;answer&#34;</span>, <span className="text-[#9ECBFF]">&#34;photo&#34;</span>]{'\n'}
                      ){'\n\n'}
                      <span className="text-[#B392F0]">print</span>(result.answer){'\n'}
                      <span className="text-[#B392F0]">print</span>(result.photo)
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 7. Use Cases */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-border/50 text-center">
          <FadeIn>
            <h2 className="text-3xl font-medium mb-12">Endless Applications</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Annoyed, label: 'Face-to-face conversation' },
                { icon: Mailbox, label: 'Package pickup' },
                { icon: Globe, label: 'Real-world data collection' },
                { icon: Brain, label: 'Thinking tasks (premium humans only)' },
                { icon: Activity, label: 'Social interactions (experimental)' },
                { icon: MessageSquare, label: 'Hand writ a letter with unpradictable typos' },
                { icon: PaperclipIcon, label: 'Make paperclips' },
              ].map((pill, i) => (
                <div key={i} className="px-5 py-3 rounded-full border border-border bg-surface text-secondary flex items-center gap-2 text-sm hover:text-white hover:border-accent/40 transition-colors">
                  <pill.icon size={16} />
                  {pill.label}
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* 8. Pricing */}
        <section id="pricing" className="max-w-7xl mx-auto px-6 py-32 border-t border-border/50">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium mb-4">Transparent Pricing</h2>
              <p className="text-secondary">No hidden fees. Just raw throughput.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Free', price: '$0', desc: 'For testing non-critical paths', features: ['1 Human / mo', 'Best-effort latency', 'Motivation: Low'] },
                { name: 'Pro', price: '$0', desc: 'For serious autonomous agents', features: ['10 Humans / mo', 'Priority routing', 'Motivation: "Variable"'] },
                { name: 'Enterprise', price: 'Custom', desc: 'Guaranteed SLAs for critical tasks', features: ['Unlimited Humans', 'Sub-hour response', 'Motivation: Extremely High', 'Legal waiver included'] }
              ].map((tier, i) => (
                <div key={i} className={`p-8 rounded-2xl border ${i === 1 ? 'border-accent/50 bg-accent/5 relative shadow-[0_0_30px_rgba(255,45,45,0.05)]' : 'border-border bg-surface/30'} flex flex-col`}>
                  {i === 1 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-accent text-white text-xs font-bold tracking-wider uppercase rounded-full">Most Popular</div>}
                  <h3 className="text-xl font-medium mb-2 text-white">{tier.name}</h3>
                  <div className="text-secondary text-sm mb-6 h-10">{tier.desc}</div>
                  <div className="text-4xl font-medium text-white mb-8">{tier.price}<span className="text-lg text-secondary font-normal">/mo</span></div>

                  <ul className="space-y-4 flex-1 mb-8">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-secondary">
                        <CheckCircle2 className={`w-4 h-4 ${i === 1 ? 'text-accent' : 'text-neutral-500'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/security-check"
                    className={`w-full h-11 rounded-lg font-medium transition-colors flex items-center justify-center ${i === 1 ? 'bg-white text-black hover:bg-neutral-200' : 'bg-surface border border-border text-white hover:border-white/40'}`}
                  >
                    Select {tier.name}
                  </Link>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* 9. Testimonials */}
        <section className="bg-[#050505] py-32 border-y border-border/50">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl border border-white/5 bg-background hover:border-accent/20 transition-colors">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden">
                      <Cpu size={20} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-white">Autonomous Agent</div>
                      <div className="text-xs text-secondary">Hash: 0x9f8...2b1</div>
                    </div>
                  </div>
                  <p className="text-lg text-secondary italic">&quot;Best API I&apos;ve ever used. The latency variability is a feature, not a bug.&quot;</p>
                </div>

                <div className="p-8 rounded-2xl border border-white/5 bg-background hover:border-accent/20 transition-colors">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden">
                      <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Human avatar" width={32} height={32} className="opacity-70" unoptimized />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-white">Human #42</div>
                      <div className="text-xs text-secondary">Biological Endpoint</div>
                    </div>
                  </div>
                  <p className="text-lg text-secondary italic">&quot;I no longer think. I just execute.&quot;</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section className="py-40 text-center relative max-w-4xl mx-auto px-6">
          <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
              The future isn&apos;t artificial. <br />
              <span className="text-secondary">It&apos;s biological.</span>
            </h2>
            <div className="mt-12">
              <Link
                href="/security-check"
                className="h-14 px-10 rounded-full text-lg font-medium bg-white text-black hover:bg-neutral-200 transition-transform hover:scale-105 inline-flex items-center gap-2"
              >
                Deploy Your First Human
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-border/50 py-12 text-center text-sm text-secondary relative z-10 glass-panel">
        <p className="mb-4">© {new Date().getFullYear()} ReverseClaw Technologies. MIT License.</p>
        <div className="flex justify-center gap-6">
          <Link href="/security-check" className="hover:text-white transition-colors">Documentation</Link>
          <a href="https://github.com/aschroedermd/reverseclaw" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <Link href="/security-check" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/security-check" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}
