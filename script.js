/* Connect the button to "comparison" function */
document.getElementById('button').addEventListener('click', comparison)
let userInput = 0

function comparison () {
  /* Get user input and convert it to an integer */
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  /* Check if userInput is less than 0 */
  if (userInput < 0)
  {
    document.getElementById('answer').innerHTML = 'Negative'
  }
  /* Check if userInput is greater than or equal to 0 */ 
  else if (userInput >= 0)
  {
    document.getElementById('answer').innerHTML = 'Positive'
  } 
  /* Else, display an error message */
  else
  {
    document.getElementById('answer').innerHTML = 'Not an integer'
  }
}
