function addData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    let mobile = document.getElementById("mobile").value;

    let table = document.getElementById("outputTable");
    let newRow = table.insertRow(table.rows.length);

    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = email;
    newRow.insertCell(2).innerHTML = pwd;
    newRow.insertCell(3).innerHTML = mobile;

    let fileInput = document.getElementById("fileToUpload");
    let selectedFile = fileInput.files[0];

    if (selectedFile) {
        let image = document.createElement("img");
        image.src = URL.createObjectURL(selectedFile);
        image.style.maxWidth = "50px";
        image.style.maxHeight = "50px";
        newRow.insertCell(4).appendChild(image);
    } else {
        newRow.insertCell(4);
    }

    newRow.insertCell(5).innerHTML =
        '<button onclick="editData(this)" class="btn btn-primary">Edit</button>' +
        '<button onclick="deleteData(this)" class="btn btn-danger">Delete</button>';

    clearInputs();
}

function editData(button) {
    let row = button.parentNode.parentNode;
    let nameCell = row.cells[0];
    let emailCell = row.cells[1];
    let pwdCell = row.cells[2];
    let mobileCell = row.cells[3];

    let nameInput = prompt("Enter the updated name:", nameCell.innerHTML);
    let emailInput = prompt("Enter the updated email:", emailCell.innerHTML);
    let pwdInput = prompt("Enter the updated password:", pwdCell.innerHTML);
    let mobileInput = prompt("Enter the updated mobile details:", mobileCell.innerHTML);

    nameCell.innerHTML = nameInput;
    emailCell.innerHTML = emailInput;
    pwdCell.innerHTML = pwdInput;
    mobileCell.innerHTML = mobileInput;
}

function deleteData(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pwd").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("fileToUpload").value = "";
}
function toogleTableVisibility(){
document.getElementById("outputTable").style.display="table";
}