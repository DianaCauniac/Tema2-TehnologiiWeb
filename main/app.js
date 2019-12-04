function addTokens(input, tokens){
     if(typeof input !== "string"){
        throw new Error('Invalid input');
    }
    
    
    if(input.length <= 6){
        throw new Error('Input should have at least 6 characters');
    }
    
    tokens.forEach(token => {
       if(typeof token.tokenName !== 'string'){
           throw new Error("Invalid array format");
       } 
    });
    
    if(!input.includes('...')){
        return input;
    }
    
    tokens.forEach(token => {
        var changeStr = "${" + token.tokenName + "}";
        input = input.replace('...', changeStr);
    });
    
    return input
}

const app = {
    addTokens: addTokens
}

module.exports = app;