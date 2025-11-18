export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) => {
  e.preventDefault();
  const target = document.querySelector(href);

  if (!target) return;

  const offsetTop = target.getBoundingClientRect().top + window.scrollY;
  const start = window.scrollY;
  const distance = offsetTop - start;
  const duration = 400; 
  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animation = (currentTime: number) => {
    if (!startTime) startTime = currentTime;

    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};
