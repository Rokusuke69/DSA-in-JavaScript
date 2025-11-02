//checks if a user is a valid voter based on their age and name

function checkVoterEligibility(name, age) {
  if (age >= 18) {
    return `${name} is a valid voter.`;
  } else {
    return `${name} is not a valid voter.`;
  }
}

// Example usage:
let userName = "Abhishek";
let userAge = 17;
let result = checkVoterEligibility(userName, userAge);
console.log(result);