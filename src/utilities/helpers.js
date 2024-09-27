export const scrollContainer = (scrollOffset, containerRef) => {
  const container = containerRef.current;
  const startPosition = container.scrollLeft;
  const duration = 300; // milliseconds

  const startTime = performance.now();

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const animateScroll = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const scrollProgress = Math.min(1, elapsedTime / duration);
    const easedProgress = easeInOutQuad(scrollProgress);
    container.scrollLeft = startPosition + scrollOffset * easedProgress;

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

export const rotateVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
  initial: {},
};
