function saturdayFun(activity, def = 'roller-skate') {
    if (activity !== undefined) {
        return `This Saturday, I want to ${activity}!`;
    } else return `This Saturday, I want to ${def}!`;
}

console.log(saturdayFun('party'));

const mondayWork = function(statement, def = 'go to the office') {
if (statement !== undefined) {
    return `This Monday, I will ${statement}.`;
    } else return `This Monday, I will ${def}.`;
}

console.log(mondayWork());


function wrapAdjective(wrap) {
    const innerFunction =  function(compliment, def = 'special') {
        if ((wrap !== undefined) && (compliment !== undefined)) {
        return `You are ${wrap}${compliment}${wrap}!`;
           } else if ((wrap === undefined) && (compliment !== undefined)) {
            return `You are *${compliment}*!`;
            } else if ((wrap !== undefined) && (compliment === undefined)) {
                return `You are ${wrap}${def}${wrap}!`;
            } else return `You are *${def}*!`;
        }
    return innerFunction;
  } 

  console.log(wrapAdjective('||')('a dedicated programmer'));