// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  debugger;
	let node = [];
  //go into document body and check for class
  let children = document.body.childNodes;
  if(document.body.classList.contains(className)) {
    node.push(document.body);
  }
  _.each(children, function(ele) {
    if(ele instanceof Element && ele.children.length <= 0 && ele.classList.contains(className)) {
      node.push(ele);
    } //else {
    //   if(ele instanceof Element && ele.children.length > 0) {
    //     return _.each(ele, getElementsByClassName());
    //   }
    //}
    }); 			
  //if multiple class elements, go down one path
  		//push path to node if class
  //return to fork and go down other path
  		//return getElementsByclass
	//         1
	//        / \
	//     [ 2   3 ]
  //      /\    \
  //   [ 4  5 ] [6]
  //            / \ 
  //         [ 7   8 ]
  return node;
};


// You should use document.body, 
// element.childNodes, 
// and element.classList