module.exports = function toReadable (number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let hundred, ten, unit;

  unit = number % 10;
  ten = number % 100;
  hundred = (number - ten) / 100;

  if (ten >= 10 && ten < 20) {
    unit = 0;
  }

  if (number === 0) return 'zero';

  return `${hundred > 0 ? units[hundred] + ' hundred' : ''} ${(ten >= 10 && ten < 20) ? units[ten] : tens[(ten - unit) / 10]} ${unit > 0 ? units[unit] : ''}`.trim().split("  ").join(" ");
}
