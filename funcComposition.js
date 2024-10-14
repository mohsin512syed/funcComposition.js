function roundNumber(num) {
    return Math.round(num);
  }
  
  function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  function convertToString(arr) {
    return arr.join(", ");
  }
  
  function processNumbers(numbers) {
    return convertToString(sortNumbers(numbers.map(roundNumber)));
  }
  
  console.log(processNumbers([3.7, 1.5, 5.8, 2.4]));
  
