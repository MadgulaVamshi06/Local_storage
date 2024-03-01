const userDataForm = document.getElementById("userDataForm");
const displayArea = document.getElementById("displayArea");
let dataarry = [];

userDataForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  let obj = {
    name,
    age,
  };

  dataarry.push(obj),
    localStorage.setItem("task-list", JSON.stringify(dataarry));

  userDataForm.reset();

  displayUserData();
});

function displayUserData() {
  let getarry = JSON.parse(localStorage.getItem("task-list"));
  tabledata(getarry);

  function tabledata(getdataArry) {
    var tbody = document.querySelector("tbody");
    var thead = document.querySelector("thead");

    getdataArry.forEach(function (ele, i) {
      tbody.innerHTML = "";

      var th1 = document.createElement("th");
      th1.innerText = "Name";

      var th2 = document.createElement("th");
      th2.innerText = "Age";

      var tr = document.createElement("tr");

      var td1 = document.createElement("td");
      td1.innerText = ele.name;

      var td2 = document.createElement("td");
      td2.innerText = ele.age;

      thead.append(th1,th2)
      tr.append(td1, td2);
      tbody.append(tr);
    });
  }
}

function clear_table_content() {
  localStorage.removeItem("task-list");
}

window.onload = clear_table_content;
