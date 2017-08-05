// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
   let helper = function(obj) {

// =============================================================================
// 			Primitives
// =============================================================================

   if(typeof obj === "number" || typeof obj === "boolean") {
       return '' + obj;
   }

   if(obj === null) {
   	return "null";
   }

   if (typeof obj === "string"){
       return '"'+ obj + '"';
   }

// =============================================================================
// 			Array
// =============================================================================


	if (Array.isArray(obj)){
		let output = [];
        if(obj.length <= 0){
              output.push([]);
               } else {
               obj.forEach(function(e){
                output.push(helper(e))
    		});
           }
           return '[' + output + ']';
    }

   if(obj === undefined) {
	   	if(Array.isArray(obj)) {
	   		return null;
	   	} else if(typeof obj === 'object') {
	   		return;
	   	}
   }

// =============================================================================
// 			Symbols
// =============================================================================


   if(typeof obj === 'symbol') {
   	return;
   }

// =============================================================================
// 			Objects
// =============================================================================

   if(typeof obj === 'object') {
		if(Object.keys(obj).length > 0) {
			for(key in obj) {
				if(obj[key] instanceof Function) {
					return '{}';
				}
			}

			let objKeys = Object.keys(obj);
			let arrOfValues = [];

			objKeys.forEach(function(key) {
				if(obj[key] !== 'function') {
					var keyOut = '"' + key + '":' + helper(obj[key]);
				} else {
					'{}';
				}

				arrOfValues.push(keyOut);
			});
			return '{' + arrOfValues + '}';
		} else {
			return '{}';
		}
	}   
}

   return helper(obj);
	 
};

// Boolean, Number, and String objects are converted to the corresponding primitive values during 
// stringification, in accord with the traditional conversion semantics.


// If undefined, a function, or a symbol is encountered during conversion it is either omitted (when it is found in an object) 
// or censored to null (when it is found in an array). JSON.stringify can also just return undefined 
// when passing in "pure" values like JSON.stringify(function(){}) or JSON.stringify(undefined).

//All symbol-keyed properties will be completely ignored, even when using the replacer function.

//Non-enumerable properties will be ignored

  