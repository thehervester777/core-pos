import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touch);
    if (touch || !dotRef.current || !ringRef.current) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    // Snappy direct tracking for the inner precision dot
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' });

    // Smooth fluid trailing inertia for the outer ambient ring
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power2.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power2.out' });

    let isVisible = false;

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) {
        isVisible = true;
        gsap.to([dot, ring], { autoAlpha: 1, duration: 0.4, ease: 'power2.out' });
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const handleHover = () => {
      gsap.to(ring, {
        scale: 1.9,
        backgroundColor: 'rgba(37, 99, 235, 0.12)',
        borderColor: 'rgba(37, 99, 235, 0.65)',
        duration: 0.35,
        ease: 'back.out(1.7)',
      });
      gsap.to(dot, {
        scale: 0.6,
        backgroundColor: '#1D4ED8',
        duration: 0.25,
      });
    };

    const handleLeave = () => {
      gsap.to(ring, {
        scale: 1,
        backgroundColor: 'rgba(37, 99, 235, 0.05)',
        borderColor: 'rgba(59, 130, 246, 0.35)',
        duration: 0.35,
        ease: 'power2.out',
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: '#2563EB',
        duration: 0.25,
      });
    };

    const handleMouseDown = () => {
      gsap.to(ring, { scale: 0.8, duration: 0.15, ease: 'power2.out' });
      gsap.to(dot, { scale: 1.4, duration: 0.15, ease: 'power2.out' });
    };

    const handleMouseUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.25, ease: 'back.out(2)' });
      gsap.to(dot, { scale: 1, duration: 0.25, ease: 'back.out(2)' });
    };

    const handleWindowLeave = () => {
      isVisible = false;
      gsap.to([dot, ring], { autoAlpha: 0, duration: 0.3 });
    };

    const attachEventListeners = () => {
      document
        .querySelectorAll('a, button, [role="button"], input, textarea, select, .cursor-pointer')
        .forEach((target) => {
          const htmlTarget = target as HTMLElement;
          if (!htmlTarget.dataset.cursorBound) {
            htmlTarget.addEventListener('mouseenter', handleHover);
            htmlTarget.addEventListener('mouseleave', handleLeave);
            htmlTarget.dataset.cursorBound = 'true';
          }
        });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleWindowLeave);
    attachEventListeners();

    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      for (const m of mutations) {
        if (m.addedNodes.length > 0) shouldUpdate = true;
      }
      if (shouldUpdate) attachEventListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleWindowLeave);
      observer.disconnect();
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, .cursor-pointer').forEach((target) => {
        target.removeEventListener('mouseenter', handleHover);
        target.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer fluid trailing ring */}
      <div
        ref={ringRef}
        id="custom-cursor-ring"
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-400/40 bg-blue-500/5 backdrop-blur-[0.5px] pointer-events-none z-[9999] opacity-0 invisible transform-gpu shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-colors duration-200"
      />
      {/* Inner precision dot */}
      <div
        ref={dotRef}
        id="custom-cursor-dot"
        className="hidden md:block fixed top-0 left-0 w-2.5 h-2.5 bg-blue-600 rounded-full pointer-events-none z-[10000] opacity-0 invisible transform-gpu shadow-[0_0_8px_rgba(37,99,235,0.6)]"
      />
    </>
  );
}
