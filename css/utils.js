exports.em = (px, context = 16) => `${Math.floor(px / context)}em`;

exports.px = px => `${px}px`;

const wrapUnits = (value, em = false, context = 16) =>
  em ? em(value) : `${value}px`;

/*
 * Scale:
 *  1 === 12px
 *  2 === 14px
 *  3 === 16px
 *  4 === 18px
 *  5 === 20px
 *  6 === 24px
 *  7 === 28px
 *  8 === 32px
 *  9 === 36px
 * More Information:
 * This scale is calculated using the following formula:
 * Ex: Step = 7
 * Take the step in the scale, subtract 2 and divide by 4
 * Ex: (7-2)/4 === 1.25
 * Round down from that number
 * Ex: 1.25 -> 1
 * Add 1 and multiply by 2
 * Ex: (1+1) * 2 === 4
 * Add the result of the formula for the previous step
 * Ex: 4 + _gettypescale(6) === 4 + 24 === 28
 * If the step is equal to one, return 12
 * Typescale calculator can be found here:
 * https://s.codepen.io/wuz/full/RdVOgG/yPkJjXZmegek
 */
const _typescale = step =>
  step > 1 ? Math.floor((step - 2) / 4 + 1) * 2 + _typescale(step - 1) : 12;

exports.typescale = step => _typescale(step);

exports.spacing = (step, defaultUnit = 2) =>
  Math.pow(Number(defaultUnit), Number(step) + 4);

exports.r = math => eval(math);
