/**
 * Accessibility Utilities for WCAG 2.1 AA Compliance
 * Helpers for keyboard navigation, ARIA attributes, and screen reader support
 */

/**
 * Check if element has sufficient color contrast (WCAG AA: 4.5:1 for normal text, 3:1 for large)
 */
export function getContrastRatio(foreground, background) {
  const getLuminance = (color) => {
    // Convert hex to RGB
    const rgb = color.match(/\w\w/g).map(x => parseInt(x, 16) / 255);
    // Apply gamma correction
    const [r, g, b] = rgb.map(val => 
      val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
    );
    // Calculate relative luminance
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Trap focus within a modal/dialog for accessibility
 */
export function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);
  
  // Return cleanup function
  return () => element.removeEventListener('keydown', handleTabKey);
}

/**
 * Generate unique ID for ARIA attributes
 */
export function generateAriaId(prefix = 'aria') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Announce to screen readers dynamically
 */
export function announceToScreenReader(message, priority = 'polite') {
  if (typeof document === 'undefined') return;

  const announcer = document.createElement('div');
  announcer.setAttribute('role', 'status');
  announcer.setAttribute('aria-live', priority); // 'polite' or 'assertive'
  announcer.setAttribute('aria-atomic', 'true');
  announcer.className = 'sr-only';
  announcer.textContent = message;

  document.body.appendChild(announcer);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcer);
  }, 1000);
}

/**
 * Check if keyboard navigation mode is active
 */
export function isKeyboardUser() {
  if (typeof window === 'undefined') return false;
  
  let keyboardUser = false;

  const handleKeyDown = () => {
    keyboardUser = true;
    document.body.classList.add('keyboard-user');
  };

  const handleMouseDown = () => {
    keyboardUser = false;
    document.body.classList.remove('keyboard-user');
  };

  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('mousedown', handleMouseDown);

  return keyboardUser;
}

/**
 * Get ARIA label for link based on context
 */
export function getLinkAriaLabel(text, context = '') {
  if (context) {
    return `${text} - ${context}`;
  }
  return text;
}

/**
 * Create skip to content link (for keyboard users)
 */
export function createSkipLink(targetId = 'main-content') {
  if (typeof document === 'undefined') return null;

  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link';
  skipLink.setAttribute('accesskey', '1');
  
  return skipLink;
}

/**
 * ARIA attributes for common patterns
 */
export const ariaPatterns = {
  // Button that opens a menu
  menuButton: (expanded = false, controlsId) => ({
    'aria-expanded': expanded,
    'aria-controls': controlsId,
    'aria-haspopup': 'menu',
  }),

  // Menu/dropdown
  menu: (labelledById) => ({
    role: 'menu',
    'aria-labelledby': labelledById,
  }),

  // Menu item
  menuItem: () => ({
    role: 'menuitem',
    tabIndex: -1,
  }),

  // Tab button
  tab: (selected = false, controlsId) => ({
    role: 'tab',
    'aria-selected': selected,
    'aria-controls': controlsId,
    tabIndex: selected ? 0 : -1,
  }),

  // Tab panel
  tabPanel: (labelledById, hidden = false) => ({
    role: 'tabpanel',
    'aria-labelledby': labelledById,
    hidden,
    tabIndex: 0,
  }),

  // Modal dialog
  dialog: (labelledById, describedById) => ({
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': labelledById,
    'aria-describedby': describedById,
  }),

  // Alert/notification
  alert: (live = 'assertive') => ({
    role: 'alert',
    'aria-live': live,
    'aria-atomic': 'true',
  }),

  // Loading state
  loading: (label = 'Loading') => ({
    role: 'status',
    'aria-label': label,
    'aria-live': 'polite',
    'aria-busy': 'true',
  }),

  // Expandable section
  disclosure: (expanded = false, controlsId) => ({
    'aria-expanded': expanded,
    'aria-controls': controlsId,
  }),

  // Search form
  search: () => ({
    role: 'search',
  }),

  // Navigation landmark
  navigation: (label) => ({
    role: 'navigation',
    'aria-label': label,
  }),
};

/**
 * Keyboard handler helper
 */
export function handleKeyboardEvent(e, handlers) {
  const key = e.key;
  
  const keyMap = {
    'Enter': handlers.onEnter,
    ' ': handlers.onSpace,
    'Escape': handlers.onEscape,
    'ArrowUp': handlers.onArrowUp,
    'ArrowDown': handlers.onArrowDown,
    'ArrowLeft': handlers.onArrowLeft,
    'ArrowRight': handlers.onArrowRight,
    'Home': handlers.onHome,
    'End': handlers.onEnd,
    'Tab': handlers.onTab,
  };

  const handler = keyMap[key];
  if (handler) {
    e.preventDefault();
    handler(e);
  }
}

/**
 * Check if element is visible to screen readers
 */
export function isScreenReaderVisible(element) {
  const style = window.getComputedStyle(element);
  return !(
    style.display === 'none' ||
    style.visibility === 'hidden' ||
    element.getAttribute('aria-hidden') === 'true' ||
    element.hasAttribute('hidden')
  );
}

/**
 * Focus management for SPAs
 */
export function manageFocus() {
  let lastFocusedElement = null;

  return {
    save: () => {
      lastFocusedElement = document.activeElement;
    },
    restore: () => {
      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    },
    set: (element) => {
      if (element && element.focus) {
        element.focus();
      }
    },
  };
}
