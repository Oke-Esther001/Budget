var latestudent = 'Emmanuel'

console.log(latestudent);
// localStorage.setItem("student", latestudent)
localStorage.pupil = latestudent

var arrayofStudent = [
    {
        name: 'Emmanuel',
        age: 20,
        height: 1.8,
    },
    {
        name: 'Kenny',
        age: 200,
        height: 1.6,
    },
    {
            name: 'Kehnie',
            age: 200,
            height: 1.6,
    },
]
localStorage.setItem("allstudents",JSON.stringify(arrayofStudent))