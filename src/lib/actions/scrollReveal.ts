/**
 * Svelte action: adds 'visible' class when element enters the viewport.
 * Usage: <div use:scrollReveal>
 */
export function scrollReveal(node: HTMLElement, delay = 0) {
  if (delay) node.style.transitionDelay = `${delay}s`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add('visible');
          observer.unobserve(node);
        }
      });
    },
    { threshold: 0.12 }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
