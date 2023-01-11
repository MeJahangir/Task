// programming 
document.getElementById('submit-buttom').addEventListener('click', function () {
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
    document.write('Student Name :' + 'Student Roll :' + 'Student ID :');
})