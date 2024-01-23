function handleFormSubmit(event) {
  event.preventDefault();

  let myobj = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };

  // Using Axios

  axios
    .post(
      "https://crudcrud.com/api/2315f3f95c41481b9132e181fd6b8986/appointment",
      myobj
    )
    .then((res) => {
      console.log(res.data);
      getdat();
    })
    .catch((err) => {
      console.log(err);
    });

  //   const string = `${myobj.username}-${myobj.email}-${myobj.phone}`;
  // console.log(string)

  //   const newli = document.createElement("li");

  // EDIT Button

  //   const edit_but = document.createElement("button");
  //   edit_but.id = "e_btn";
  //   edit_but.className = "e_btn";
  //   const edit_text = document.createTextNode("Edit");

  //   del_but.appendChild(del_text);
  //   edit_but.appendChild(edit_text);

  //   const newlitext = document.createTextNode(string);
  //   newli.appendChild(newlitext);
  //   newli.appendChild(del_but);
  //   newli.appendChild(edit_but);
  //   // console.log(newli)

  //   const list = document.querySelector("ul");
  //   list.appendChild(newli);

  //   //console.log(list)

  //   const temp = document.querySelector("ul");
  //console.log(temp)
}

const listings = document.querySelector("ul");
function getdat() {
  axios
    .get(
      "https://crudcrud.com/api/2315f3f95c41481b9132e181fd6b8986/appointment"
    )
    .then((data) => {
      ulSelector.innerHTML = "";
      for (let i = 0; i < data.data.length; i++) {
        show(data.data[i]);
      }
      console.log(data.data);
    });
}
getdat();
const ulSelector = document.querySelector("ul");
function show(myobj) {
  console.log(myobj);
  const string = `${myobj.username}-${myobj.email}-${myobj.phone}`;
  console.log(string);

  const newli = document.createElement("li");

  const del_but = document.createElement("button");
  del_but.id = "d_btn";
  del_but.className = "d_btn";
  del_but.style.margin = "2px";
  del_but.style.backgroundColor = "orangered";
  const del_text = document.createTextNode("Delete1");
  del_but.appendChild(del_text);
  del_but.addEventListener("click", function (event) {
    axios
      .delete(
        "https://crudcrud.com/api/2315f3f95c41481b9132e181fd6b8986/appointment/" +
          myobj._id
      )
      .then((res) => {
        console.log(res);
        getdat();
      });
    //  console.log("Click hello",myobj._id)
  });

  newli.appendChild(del_but);

  const edit_but = document.createElement("button");
  edit_but.id = "e_btn";
  edit_but.className = "e_btn";
  const edit_text = document.createTextNode("Edit");
  edit_but.appendChild(edit_text);
  newli.appendChild(edit_but);

  const newlitext = document.createTextNode(string);
  newli.appendChild(newlitext);

  ulSelector.appendChild(newli);
}
