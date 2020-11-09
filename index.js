const colors = require('./colors-code')

class color {
    constructor() {

    }
    cyan(string) {
        if(typeof string !== 'string') throw new Error(`The param must be a string.`)
        return `${colors.cyan.first}${string}${colors.cyan.final}`
    } 
    yellow(string) {
        if(typeof string !== 'string') throw new Error(`The param must be a string.`)
        return `${colors.yellow.first}${string}${colors.yellow.final}`
    }
    black(string) {
        if(typeof string !== 'string') throw new Error(`The param must be a string.`)
        return `${colors.black.first}${string}${colors.black.final}`
    }
    white(string) {
        if(typeof string !== 'string') throw new Error(`The param must be a string.`)
        return `${colors.white.first}${string}${colors.white.final}`
    }
    red(string) {
        if(typeof string !== 'string') throw new Error(`The param must be a string.`)
        return `${colors.red.first}${string}${colors.red.final}`
    }
    magenta(string) {
        if(typeof string !== 'string') throw new Error(`The param must be a string.`)
        return `${colors.magenta.first}${string}${colors.magenta.final}`
    }
    green(string) {
        if(typeof string !== 'string') throw new Error(`The param must be a string.`)
        return `${colors.green.first}${string}${colors.green.final}`
    }
    blue(string) {
        if(typeof string !== 'string') throw new Error(`The param must be a string.`)
        return `${colors.blue.first}${string}${colors.blue.final}`
    }
    grey(string) {
        if(typeof string !== 'string') throw new Error(`The param must be a string.`)
        return `${colors.grey.first}${string}${colors.grey.final}`
    }
    gray(string) {
        if(typeof string !== 'string') throw new Error(`The param must be a string.`)
        return `${colors.grey.first}${string}${colors.grey.final}`
    }
}

module.exports = color