const stickyPositions = ({ addUtilities }) => {
  const intialRemSize = 0.25;
  const stickySizes = [ ...Array(12).keys() ].map(i => (i + 1) * 2);

  const stickySizesMap = stickySizes
    .map(size => ({
      [`.top-${size}`]: { top: `${intialRemSize * size}rem` },
      [`.bottom-${size}`]: { bottom: `${intialRemSize * size}rem` },
    }));
  const utilities = Object.assign({}, ...stickySizesMap);

  addUtilities(utilities);
};

module.exports = stickyPositions;
