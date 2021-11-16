const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};


/**
 * A method called “findPerson” that takes two arguments,
a type (either a student or teacher), and an id.
It will return a particular object of that person. {1}
 */
school["findPerson"] = function (type, id) {
    let obj = {};
    if (type === "student") {
        school.students.forEach((item) => {
            if (item.id === id) {
                obj = item;
            }

        });
    }
    else if (type === "teacher") {
        school.teachers.forEach((item) => {
            if (item.id === id) {
                obj = item;
            }

        });
    }
    return obj;
};
//console.log(school.findPerson("student",13));

/**
 * A method called “assignStudent” that takes two
arguments, a student’s id and a subject.
Assign all of the students to the first available teacher who
teaches that subject and who is not in full capacity. If all of
the teachers are in full capacity log to the console “Sorry,
no available teachers left”.  {2}
 */
school["assignStudent"] = function (id, subject) {
    newObj = {};
    school.students.forEach((item) => {
        if (item.id === id) {
            newObj = item;
        }
    });
    school.teachers.forEach((item) => {
        if (item.capacityLeft) {
            if (item.subjects.includes(subject)) {
                item.students.push(newObj);
                item.capacityLeft--;
            }
        } else {
            console.log("Sorry, no available teachers left");
        }

    });

};




/**
 * A method called “assignTeachersSubject” that takes two
arguments, the teacher’s id, a new subject.
Assign the new subject to that particular teacher if that
subject doesn’t exist in their array of subjects    {3}
 */
school["assignTeachersSubject"] = function (teacherId, newSubject) {
    school.teachers.forEach((item) => {

        if (item.id === teacherId) {

            if (item.subjects.includes(newSubject) === false) {
                item.subjects.push(newSubject);
            }
            else {
                console.log("already exists");
            }

        } else {
            console.log("wrong teacher id");
        }
    });
};


/**
 * Create a new method of anything you want.    {4}
 *we'll add a new teacher a gym teacher.*/
school["addNewTeacher"] = function (teachId, teachName, subject, students, capacityLeft) {
    let newObj = { id: teachId, name: teachName, subject: ["sports"], students: [], capacityLeft: 50 };
    school.teachers.push(newObj);
    return console.log("teacher added");
};
