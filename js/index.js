var text = "Arman Shahriar"

text = text.length

document.write("Number of character " + text + "<br>" + "<br>")


var text = prompt("Enter your name: ")

text = text.length

document.write("Number of character " + text + "<br>" + "<br>")


var text = "Arman Shahriar"
document.write(text.charAt(2) + "<br>" + "<br>")

var text = "Arman";
text = text.toUpperCase();
document.write(text + "<br>" + "<br>")

var text = "Arman";
text = text.toLowerCase();
document.write(text + "<br>" + "<br>")

var text1 = "Arman"
var text2 = "Shahriar"

document.write(text1.concat(text2) + "<br>" + "<br>")

var text1 = "Bangadesh";
text = text1.slice(0, 2);
document.write(text + "<br>" + "<br>")


// Task
var firstName = prompt("Enter your first name: ")
var lastName = prompt("Enter your last name: ")
var fullName = (firstName.concat(lastName))
document.write(fullName + "<br>" + "<br>")


fullName = fullName.toUpperCase()
document.write(fullName + "<br>" + "<br>")


fullName = fullName.slice(2, 4)
document.write(fullName + "<br>" + "<br>")

fullName = fullName.length
document.write(fullName + "<br>" + "<br>")