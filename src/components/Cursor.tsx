import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touch);
    if (touch || !cursorRef.current) return;

    const el = cursorRef.current;
    gsap.set(el, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(el, 'x', {
      duration: 0.25,
      ease: 'power3',
    });
    const yTo = gsap.quickTo(el, 'y', {
      duration: 0.25,
      ease: 'power3',
    });

    let isActive = false;

    const moveCursor = (e: MouseEvent) => {
      if (!isActive) {
        isActive = true;
        gsap.to(el, { autoAlpha: 1, duration: 0.3 });
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleHover = () => {
      gsap.to(el, {
        scale: 2.8,
        background: 'rgba(59, 130, 246, 0.15)',
        border: '1.5px solid rgba(37, 99, 235, 0.5)',
        duration: 0.3,
        ease: 'expo.out',
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        scale: 1,
        background: 'rgba(37, 99, 235, 0.8)',
        border: '0px solid transparent',
        duration: 0.3,
        ease: 'expo.out',
      });
    };

    const attachEventListeners = () => {
      document
        .querySelectorAll('a, button, [contenteditable="true"]')
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
      observer.disconnect();
      document.querySelectorAll('a, button').forEach((target) => {
        target.removeEventListener('mouseenter', handleHover);
        target.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-blue-600/85 rounded-full pointer-events-none z-[999] opacity-0 invisible transform-gpu shadow-[0_0_10px_rgba(37,99,235,0.5)]"
    />
  );
}
