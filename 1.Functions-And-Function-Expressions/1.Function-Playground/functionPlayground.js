function playWithFunction() {

    var argumentsCount = playWithFunction.arguments.length;
    console.log("Number of arg: " + argumentsCount);

    for (var arg in arguments) {        
        console.log(arg +" "+ typeof arguments[arg]);
    }
    
}

playWithFunction("asd", 121, 12, true, undefined);
playWithFunction(["asd", 121, 12], [23, 56, "dfdfg"]);
playWithFunction.apply(this,["asd", 121, 12, true, undefined]);


function someFun() {

    return playWithFunction.call(this, someFun);
}

someFun("asd", 121);

document.adoptNode()

