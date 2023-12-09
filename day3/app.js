// A-2
// var input = prompt("Enter Your email")
// function isValid(text){
//     var index = text.indexOf("@")
//     return index != -1 && index != 0 && index != text.length - 1
// }
// console.log(isValid(input))

// A-3
// function stringCount(s1, s2) {
// 	s1 = s1.toLowerCase()
// 	s2 = s2.toLowerCase()
// 	var res = s2.split(s1)
// 	return res.length - 1
// }

// console.log(stringCount("a", "editable"))
// console.log(stringCount("c", "Chamber of secrets"))
// console.log(stringCount("big", "big fat big"))

// A-4
// var students = [
// 	{
// 		name: "Bondok",
// 		degree: 91,
// 	},
// 	{
// 		name: "Loza",
// 		degree: 75,
// 	},
// 	{
// 		name: "Fozdoa",
// 		degree: 100,
// 	},
// 	{
// 		name: "Smsm",
// 		degree: 48,
// 	},
// 	{
// 		name: "Smsma",
// 		degree: 50,
// 	},
// ]
// 1-
// function findStudentWithDegreeBetween90And100(students) {
// 	return students.find((student) => student.degree >= 90)
// }
// console.log(findStudentWithDegreeBetween90And100(students).name)

// 2-
// function studentsWithDegreeLessThan60(students) {
// 	return students.filter((student) => student.degree < 60)
// }
// console.log(studentsWithDegreeLessThan60(students).map((student) => student.name))

// 3-
// students.push({
// 	name: "Zekwa",
// 	degree: 100,
// })

// for (const student of students) {
// 	console.log(`${student.name} got ${student.degree}`)
// }

// 4-
// students.pop()
// for (const student of students) {
// 	console.log(`${student.name} got ${student.degree}`)
// }

// 5-
// students.sort((a, b) => a.name > b.name)
// console.log(students)
