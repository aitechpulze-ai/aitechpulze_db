"use client";
import { useEffect } from 'react';

/**
 * Skip to Content Link for Keyboard Navigation
 * Allows keyboard users to bypass navigation and jump to main content
 */
export default function SkipLink() {
  useEffect(() => {
    // Detect keyboard navigation and add class to body
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-user');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-user');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <a 
      href="#main-content" 
      className="skip-link"
      accessKey="1"
    >
      Skip to main content
    </a>
  );
}
