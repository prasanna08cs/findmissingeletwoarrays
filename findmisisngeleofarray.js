
let a =[ 
  203, 204, 205, 206, 207, 208, 203, 204, 205, 206,
 ];
let b = [
  203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204,
];let miss =[];
(missingNumbers(a,b));

function missingNumbers(arr, brr) {
 
  for(let j=0;j<brr.length;j++){
      let s =checkEle (arr,brr[j]);
    
    if(!s){
      miss.push(brr[j]);
    }
  }
 
}
console.log(miss);

//(checkEle([1,2,3,3],3))
function checkEle(ar, ele){
  
   for(let i=0;i<ar.length;i++){
     
      if(ele == ar[i]){
       
var index = ar.indexOf(ele);
if (index > -1) {
  ar.splice(index, 1);
}
 
//console.log(ar);
        return true;
        
   }
      }
  
  return false;
   }
