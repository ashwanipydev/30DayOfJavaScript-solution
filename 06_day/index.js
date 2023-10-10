console.log("💻 Exercises:Day 6");
//* Exercises: Level 1

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


  const array = [1,2,3,4,5,6,7,8,9,10]
  
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log("For Loop: ",element);
  }

  let index = 0
  while (index < array.length) {
    console.log('While Loop:',array[index]);
    index++
  }

  let index1 = 0
  do {
    console.log('DO while',array[index1]);
    index1++
  } while(index1 < array.length)
  
  
  




  for (let i = 10; i > 0; i--) {
    const element = i;
    console.log("For Loop: ",element);
  }

  let i = 10
  while (i > 0 ) {
    console.log('While Loop:', i);
    i--
  }

  let i1 = 10
  do {
    console.log('DO while', i1);
    i1--
  } while(i1 > 0)



  function iterate(n){
    for(let i = 0; i <= n; i++){
        console.log(`Zero To N : ${i+1}`)
    }
  }
  
iterate(5)


function star(n){
    for(let i = 1; i <= n; i++){
        console.log("row: ",i);
        for(let j = 0; j <= i ; j++){
            console.log("col: ",++j);
        }
    }
}


star(3)