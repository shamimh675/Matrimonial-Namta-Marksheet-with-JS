let marks = 79

if (marks >= 0 && marks < 33) {
 console.log("You've failed.") 
} else if(marks >= 33 && marks <= 39){
  console.log("You've got 'D")
} else if(marks >= 40 && marks <= 49){
  console.log("You've got 'C'.")
} else if(marks >= 50 && marks <= 59){
  console.log("You've got 'B'.")
} else if(marks >= 60 && marks <= 69){
  console.log("You've got 'A-'.")
} else if(marks >= 70 && marks <= 79){
  console.log("You've got 'A'.")
} else if(marks >= 80 && marks <= 100){
  console.log("You've got 'A+'.")
}
else {
  console.log("Please give a number between 0 to 100.")
}