// i/p {a:1,b:1}
// expected o/p [["a",1],["b",2]]
let array = []
function objToArray(object){
  
  for(let i in object){
    array.push([i,object[i]])
  }

}

console.log(objToArray({a:1,b:2}))
console.log(array,"a")