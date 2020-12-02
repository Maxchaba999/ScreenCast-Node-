module.exports = function(module) {
    return function(/*...*/){
        var args = [module.filename[2 ]].concat([].slice.call(arguments));
        console.log.apply(console, args);
    };
};