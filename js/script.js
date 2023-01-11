// programming 
var stdInfo = [];

document.getElementById('submit-buttom').addEventListener('click', function (e) {
    // document.getElementById('student-info-form')
    e.preventDefault();
    // Student name collect
    const inputName = document.getElementById('Name');
    const Names = inputName.value;

    // Student roll collect
    const inputRoll = document.getElementById('roll');
    const Roll = inputRoll.value;

    // Student Id collect 
    const inputId = document.getElementById('Id');
    const Id = inputId.value;

    // result area
    // document.write('Student Name :' + 'Student Roll :' + 'Student ID :');
    // const nameContainer = document.getElementById('student-info-name');
    // const rollContainer = document.getElementById('student-info-roll');
    // const idContainer = document.getElementById('student-info-id');

    // nameContainer.innerHTML = Names;
    // rollContainer.innerHTML = Roll;
    // idContainer.innerHTML = Id;

    stdInfo.push({
        name: Names,
        id: Id,
        roll: Roll,
    });

    let tableData = `
        <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>ID</th>
            <th>Action</th>
        </tr>
    `;
    // delete stdInfo[index];
    stdInfo.forEach(function (info, index) {
        tableData = tableData + `
            <tr>
                <td>${info.name}</td>
                <td>${info.roll}</td>
                <td>${info.id}</td>
                <td>
                    <button data-index="${index}">Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        `;
    });

    document.getElementById('info-container').innerHTML = tableData;
})