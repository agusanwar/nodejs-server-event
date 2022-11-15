const e = require("express");

class CustomAPIError extends Error {
    constructor(message){
        super(message);
    }
}

module.exports = CustomAPIError;