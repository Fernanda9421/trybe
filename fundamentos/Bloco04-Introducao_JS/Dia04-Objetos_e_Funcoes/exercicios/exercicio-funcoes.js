function checkPalindrome (world) {
  let isPalindrome = false;

  if (world === world.split('').reverse().join('')) {
    console.log(isPalindrome = true);
  } else {
    console.log(isPalindrome);
  }
}

checkPalindrome('arara');
