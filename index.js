'use strict';
/*
var RULES = {
  '1': 'I',
  '5': 'V',
  '10': 'X',
  '50': 'L',
  '100': 'C',
  '500': 'D',
  '1000': 'M'
};

var ALL_RULES = Object.keys(RULES).reduce(function(allRules, step, i, steps) {
  allRules[step] = RULES[step];
  var extra = createExtraRule({
    next: steps[i + 1],
    current: step,
    prev: steps[i - 1]
  });
  if (extra) {
    allRules[extra.step] = extra.rule;
  }
  return allRules;
}, {});

function createExtraRule(steps) {
  if (steps.current.length > 3) {
    return null;
  }
  if (steps.current[0] === '5') {
    return create9ishRule(steps);
  }
  if (steps.current[0] === '1') {
    return create4ishRule(steps);
  }
}

function create4ishRule(steps) {
  return {
    step: steps.next - steps.current,
    rule: RULES[steps.current] + RULES[steps.next]
  };
}

function create9ishRule(steps) {
  return {
    step: steps.next - steps.prev,
    rule: RULES[steps.prev] + RULES[steps.next]
  };
}*/

var ALL_RULES = {
  '1': 'I',
  '4': 'IV',
  '5': 'V',
  '9': 'IX',
  '10': 'X',
  '40': 'XL',
  '50': 'L',
  '90': 'XC',
  '100': 'C',
  '400': 'CD',
  '500': 'D',
  '900': 'CM',
  '1000': 'M'
};

function int2roman(input) {
  validateInput(input);
  return Object.keys(ALL_RULES).
    map(toInt).
    sort(descendingComparator).
    reduce(reduceStep(input), '');
}

function validateInput(input) {
  if (input > 3000) {
    throw new Error('Input number can not be higher than 3000');
  }
  if (input <= 0) {
    throw new Error('Input number can not be less than 1');
  }
}

function toInt(i) {
  return parseInt(i, 10);
}

function descendingComparator(a, b) {
  return b - a;
}

function reduceStep(input) {
  return function (output, i) {
    while (i <= input) {
      output += ALL_RULES[i];
      input -= i;
    }
    return output;
  };
}
/*
function int2roman(input) {
  validateInput(input);
  return recursiveInt2roman(input)
}

function recursiveInt2roman(input) {
  if (!input) {
    return '';
  }
  var highestStep = Object.keys(ALL_RULES).
    map(toInt).
    filter(getLessAndEqualThan(input)).
    pop();
  return ALL_RULES[highestStep] + recursiveInt2roman(input - highestStep);
}

function getLessAndEqualThan(input) {
  return function(i) {
    return i <= input
  };
}
*/

module.exports = int2roman;

