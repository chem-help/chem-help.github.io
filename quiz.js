let totalPoints = 0
let currentPoints = 0

function funcName (correct, points) {
  if (correct) {
    currentPoints = currentPoints + points
    totalPoints = totalPoints + points
  }
  else {
		totalPoints = totalPoints + points
  }
	change.innerText = currentPoints + "/" + totalPoints
}