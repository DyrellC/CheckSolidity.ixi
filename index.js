var System = java.lang.System;

var iri = com.iota.iri;
var Callable = iri.service.CallableRequest;
var Response = iri.service.dto.IXIResponse;
var ErrorResponse = iri.service.dto.ErrorResponse;

var Set = Java.type('java.util.LinkedHashSet');
var tangle = IOTA.tangle;
var transactionValidator = IOTA.transactionValidator;

var HashFactory = iri.model.HashFactory;


function checkSolidity(request){
    var hash = HashFactory.TRANSACTION.create(request.get("hash"));

    print("Checking solidity of tx " + hash);
    var solid = transactionValidator.checkSolidity(hash);
 
    return Response.create({
        solid: solid
    });
}


API.put("checkSolidity", new Callable({ call: checkSolidity }))
