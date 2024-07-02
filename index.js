// code your solution here

function saturdayFun(activity = "roller-skate") { //Function name = saturdayFun, parameter = (activity = "roller-skate")
    return `This Saturday, I want to ${activity}!` // Join strings using interpolation
}

// Define a function using a function expression
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}


//

function wrapAdjective(msg = "*") {
    return function (adj = "special") {
        return `You are ${msg}${adj}${msg}!`
    }
       
}

