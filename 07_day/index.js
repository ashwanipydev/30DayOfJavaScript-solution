function soleveLinEquation(a,b,c){
    if(a === 0 && b === 0){
        console.log(`Infinite solutions (the line is a horizontal line).`);
    }

    if (a === 0) {
        console.log("No solutions (the line is parallel to the y-axis).");
        return;
      }
    
      if (b === 0) {
        console.log("No solutions (the line is parallel to the x-axis).");
        return;
      }

      const y = -c / b;
      const x = (-b * y - c) / a;
    
      return { x, y };

} 

console.log(soleveLinEquation()) // {0}
console.log(soleveLinEquation(1, 4, 4)) // {-2}
console.log(soleveLinEquation(1, -1, -2)) // {2, -1}
console.log(soleveLinEquation(1, 7, 12)) // {-3, -4}
console.log(soleveLinEquation(1, 0, -4)) //{2, -2}
console.log(soleveLinEquation(1, -1, 0)) //{1, 0}
