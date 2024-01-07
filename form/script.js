const users = [];

const handleSubmit = (event) => {
    event.preventDefault();

    const form = document.forms['userForm'];

    const firstname = form['firstname'].value;
    const lastname = form['lastname'].value;
    const age = form['age'].value;
    const phone = form['phone'].value;
    const dob = form['dob'].value;
    const gender = form['gender'].value;

    if (!(firstname && lastname && age && phone && dob && gender)) {
        return document.getElementById('danger').innerHTML = "Fill all fields"
    }

    users.push({ firstname, lastname, age, phone, dob, gender }) //adding in the users array
    form.reset(); //resetting form


    document.getElementById('user-table').innerHTML = generateTable(users);
}


const searchUser = () => {
    const inputKeyword = document.getElementById('searchKeyword').value;
    const foundUser = users.filter((user) => user.firstname.toLowerCase() == inputKeyword.toLowerCase() || user.lastname.toLowerCase() == inputKeyword.toLowerCase() || user.phone == inputKeyword || user.gender == inputKeyword)
    if (inputKeyword !== "") {
        document.getElementById('user-table').innerHTML = generateTable(foundUser);
    } else {
        document.getElementById('user-table').innerHTML = generateTable(users);
    }
}

const generateTable = (data) => {
    let table = '<table border="1">';
    table += "<tr><th>First Name</th> <th>Last Name</th> <th>Age</th> <th>Phone Number</th> <th>Date of Birth</th> <th>Gender</th></tr>";
    data.forEach(user => {
        table += `<tr><td>${user.firstname}</td><td>${user.lastname}</td><td>${user.age}</td><td>${user.phone}</td><td>${user.dob}</td><td>${user.gender}</td>`
    });
    return table;
}

const sortTable = () => {
    const sortedUsers = users.sort((a, b) => b.age - a.age)
    console.log('sortedUsers', sortedUsers);
    if (sortedUsers) {
        document.getElementById('user-table').innerHTML = generateTable(sortedUsers);
    }
}




