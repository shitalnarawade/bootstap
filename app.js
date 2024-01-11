function handleFormSubmit(event) {
    event.preventDefault();
   
    let amount = document.getElementById("amount").value;
    let description = document.getElementById("description").value;
    let category = document.getElementById("category").value;
  
    let myExp = {
      amount,
      description,
      category,
    };
  
    localStorage.setItem(myExp.category, JSON.stringify(myExp));
    let oldData = localStorage.getItem("formData");
    oldData = JSON.parse(oldData) || [];
    if (isediting && editIndex != -1) {
      oldData[editIndex] = myExp;
      document.getElementById("amount").value = "";
      document.getElementById("description").value = "";
      document.getElementById("category").value = "";
  
      isediting = false;
      editIndex = -1;
    } else {
      oldData.push({ amount, description, category });
    }
    localStorage.setItem("formData", JSON.stringify(oldData));
  
    console.log(JSON.parse(localStorage.getItem("formData")));
  
    getusersData();
  }
  function getusersData() {
    document.getElementById("userList").innerHTML = "";
    let oldData = localStorage.getItem("formData");
    let oldData1 = JSON.parse(oldData);
    for (let i = 0; i < oldData1.length; i++) {
      displayUsers(oldData1[i], i);
    }
  }
  
  function displayUsers(myExp, i) {
    var userList = document.getElementById("userList");
    let listItem = document.createElement("li");
    listItem.appendChild(
      document.createTextNode(
        `${myExp.amount} ${myExp.description} ${myExp.category}`
      )
    );
  
    let delBtn = document.createElement("button");
    let delBtnText = document.createTextNode("Delete");
    delBtn.appendChild(delBtnText);
  
    let editBtn = document.createElement("button");
    let editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    listItem.appendChild(editBtn);
    listItem.appendChild(delBtn);
    userList.appendChild(listItem);
    editBtn.addEventListener("click", function (event) {
      document.getElementById("amount").value = myExp.amount;
      document.getElementById("description").value = myExp.description;
      document.getElementById("category").value = myExp.category;
  
      isediting = true;
      editIndex = i;
      //    console.log(myExp);
    });
    delBtn.addEventListener("click", function () {
      let newdata = JSON.parse(localStorage.getItem("formData"));
      newdata.splice(i, 1);
      let newlocal = JSON.stringify(newdata);
      localStorage.setItem("formData", newlocal);
      getusersData();
    });
  }
  
  let isediting = false;
  let editIndex = -1;
  getusersData();
  