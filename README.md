**what is FunctionComposition ?**
answer : In functional programming, function composition is a powerful technique that allows developers to combine multiple functions into a single function. This compositional approach promotes code reuse, modularity, and readability. In JavaScript, the compose function plays a central role in enabling function composition.

**Define Code**
1. roundNumber(num)
This function takes a single number as input and rounds it to the nearest integer using Math.round().
2. sortNumbers(arr)
This function takes an array of numbers as input and sorts them in ascending order. The sorting is done using the Array.prototype.sort() method with a custom comparison function (a, b) => a - b to ensure numerical sorting
3. convertToString(arr)
This function takes an array of numbers and converts it to a single string where each number is separated by a comma and a space using Array.prototype.join(", ").
4. processNumbers(numbers)
This is the main function that takes an array of numbers as input and processes it using the following steps:
Round each number in the array using the map() method, which applies the roundNumber() function to each element.
Sort the rounded numbers using the sortNumbers() function.
Convert the sorted array of rounded numbers to a comma-separated string using convertToString().
