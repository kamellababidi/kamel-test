
const draw = {
  init: function (width, height, padding)  {
    if (width <= 0 || height <= 0) return [];
    if (height < 2) return [Array(width).fill(1)];
    if (width <= padding+2 || height <= padding+2) {
      return [Array.from({length: width}).fill(1),
          ...Array.from({length: height-2}, () => width < 2 ? [2] : [2, ...Array.from({length: width-2 }).fill(0), 2]),
          Array.from({length: width}).fill(1)];
    }

    return [Array.from({length: width}).fill(1),
        ...Array.from({length: padding/2 }, () => [2, ...Array.from({length: width-2 }).fill(0), 2]),
        ...this.init(width - padding - 2, height - padding - 2, padding).map((row,i) => 
            [2, ...Array.from({length: padding/2 }).fill(0), ...row, ...Array.from({length: padding/2 }).fill(0), 2]
        ),
        ...Array.from({length: padding/2 }, () => [2, ...Array.from({length: width-2 }).fill(0), 2]),
        Array.from({length: width }).fill(1)];
  }
};

module.exports = draw;
