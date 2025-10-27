function registerStudents(input) {
    const courses = new Map();

    for (let line of input) {
        if (line.includes(':')) {
            const [courseNameRaw, capacityStrRaw] = line.split(':');
            const courseName = courseNameRaw.trim();
            const capacity = Number(capacityStrRaw.trim());

            if (!courses.has(courseName)) {
                courses.set(courseName, { capacity, students: [] });
            } else {
                courses.get(courseName).capacity += capacity;
            }

        } else if (line.includes('joins')) {
            const match = line.match(/^(.+)\[(\d+)\] with email (.+) joins (.+)$/);
            if (!match) continue;

            const [, username, creditsStr, email, courseName] = match;
            const credits = Number(creditsStr);

            if (courses.has(courseName)) {
                const course = courses.get(courseName);
                if (course.students.length < course.capacity) {
                    course.students.push({ username, email, credits });
                }
            }
        }
    }

    // Сортиране по брой студенти в низходящ ред
    const sortedCourses = [...courses.entries()]
        .sort((a, b) => b[1].students.length - a[1].students.length);

    for (let [courseName, courseData] of sortedCourses) {
        const freePlaces = courseData.capacity - courseData.students.length;
        console.log(`${courseName}: ${freePlaces} places left`);

        const sortedStudents = courseData.students
            .sort((a, b) => b.credits - a.credits);

        for (let student of sortedStudents) {
            console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
        }
    }
}

registerStudents(['JavaBasics: 2', 'user1[25] withemail user1@user.com joinsC#Basics', 'C#Advanced: 3', 'JSCore:4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore'])