export const scrollTop = (behavior = "instant") => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior,
  });
};
