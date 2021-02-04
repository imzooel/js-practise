const student = {
    id: 20020,
    name: "Mohammad Zahdul Islam",
    dept: "CS",
    courseCount: 4,
    institute: "IST",
    getInfo: function () {
        console.log(`
        ${this.name}
        who is currently studying at ${this.institute} in ${this.dept} department.
        He's enrolled ${this.courseCount} courses.
        `);
    }
}

const student2 = {
    id: 20040,
    name: "Justin Bieber",
    dept: "music",
    courseCount: 7,
    institute: "Hulululu",
}

// .bind() gives the reference back and I have to manually call that
student.getInfo.bind(student2)();

// while .call() directly call the function.
student.getInfo.call(student2);

