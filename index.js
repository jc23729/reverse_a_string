// Create a function that reverses a string
// The string Mike should return ekiM
function reverse(str){
  // check input
  if (!str || str.length < 2 || str !=='string'){
    return 'thats not good'
  }
  const backwards = [];
  const totalItems = str.length -1;

  for(let i = totalItems; i = 0; i --){
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join('');
}

reverse('Hi my name is Mike')