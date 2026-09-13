import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { label: 'Active Outlets', limit: 10000, suffix: '+', prefix: '' },
  { label: 'Sales Processed', limit: 50, suffix: 'B+', prefix: '৳' },
  { label: 'Replication Uptime', limit: 99, suffix: '.99%', prefix: '' },
  { label: 'Cloud Sync Latency', limit: 87, suffix: 'ms', prefix: '' },
];

export default function Stats() {
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!statsRef.current) return;

    const counts = statsRef.current.querySelectorAll('.counterData');
    const anims: gsap.core.Tween[] = [];

    counts.forEach((counter, i) => {
      const target = stats[i].limit;
      const obj = { val: 0 };
      const anim = gsap.to(obj, {
        val: target,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
        onUpdate: () => {
          (counter as HTMLElement).innerText = Math.ceil(obj.val).toString();
        },
      });
      anims.push(anim);
    });

    return () => {
      anims.forEach((a) => a.kill());
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === statsRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={statsRef}
      id="stats-section"
      className="w-full bg-[#050505] text-white py-16 sm:py-24 md:py-32 border-t border-white/5 border-b border-b-white/5 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 text-left md:text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-1.5 sm:gap-2 md:items-center">
            <h4 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-white mb-1 sm:mb-2 flex items-baseline md:justify-center">
              <span className="text-white/30 text-2xl sm:text-3xl md:text-5xl mr-0.5 sm:mr-1">
                {stat.prefix}
              </span>
              <span className="counterData text-[#3B82F6]">0</span>
              <span className="text-white/60">{stat.suffix}</span>
            </h4>
            <p className="text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-wider sm:tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
