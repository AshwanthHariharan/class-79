var NamesOfStudent = [];

function display() {
    var studentone = document.getElementById("1").value;
    var studenttwo = document.getElementById("2").value;
    var studentthree = document.getElementById("3").value;
    var studentfour = document.getElementById("4").value;

    NamesOfStudent.push(studentone);
    NamesOfStudent.push(studenttwo);
    NamesOfStudent.push(studentthree);
    NamesOfStudent.push(studentfour);
    console.log(NamesOfStudent);
    document.getElementById("showDiv").innerHTML = NamesOfStudent;
    document.getElementById("Submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}

function sort() {
NamesOfStudent.sort();
console.log(NamesOfStudent);
document.getElementById("showDiv").innerHTML = NamesOfStudent;
}