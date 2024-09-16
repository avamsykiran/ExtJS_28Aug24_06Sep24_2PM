
export const greetUser = (userName) => `Hello ${userName}`;

export const greetUserByTime = (userName) => {
    var h = (new Date()).getHours();
    var greeting = "";

    if(h>=3 && h<=11) greeting="Good Moring";
    else if(h>11 && h<=15) greeting="Good Noon";
    else greeting="Good Evening";

    return `${greeting} ${userName}`;
};
