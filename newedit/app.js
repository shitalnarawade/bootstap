function handleFormSubmit(event) {
    event.preventDefault();
  
    let myobj = {
      name: event.target.name.value, 
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
  
    // Using Axios
    let apirequest = "";
  
    if (isediting) {
      apirequest = axios.put(
        "https://crudcrud.com/api/8731e879c51c41709ecfb80e6f38b9d1/appointment/" +
          edtingobj._id,
        myobj
      );
    } else {
      apirequest = axios.post(
        "https://crudcrud.com/api/8731e879c51c41709ecfb80e6f38b9d1/appointment",
        myobj
      );
    }
  
    apirequest
      .then((res) => {
        console.log(res.data);
        getdat();
        edtingobj = {};
        isediting = false;
      })
      .catch((err) => {
        console.error("Error:", err); 
      });
  }
  
  const ulSelector = document.querySelector("ul");
  
  function getdat() {
    axios
      .get("https://crudcrud.com/api/8731e879c51c41709ecfb80e6f38b9d1/appointment")
      .then((data) => {
        ulSelector.innerHTML = "";
        for (let i = 0; i < data.data.length; i++) {
          show(data.data[i]);
        }
        console.log(data.data);
      })
      .catch((err) => {
        console.error("Error:", err); 
      });
  }
  
  getdat();
  
  function show(myobj) {
    console.log(myobj);
    const string = `${myobj.name}-${myobj.email}-${myobj.phone}`; 
    const newlitext = document.createTextNode(string);
    console.log(string);
  
    const newli = document.createElement("li");
    const del_but = document.createElement("button");
    del_but.id = "d_btn";
    del_but.className = "d_btn";
    del_but.style.margin = "2px";
    del_but.style.backgroundColor = "orangered";
    const del_text = document.createTextNode("Delete");
    del_but.appendChild(del_text);
    del_but.addEventListener("click", function () {
      axios
        .delete(
          "https://crudcrud.com/api/8731e879c51c41709ecfb80e6f38b9d1/appointment/" +
            myobj._id
        )
        .then((res) => {
          console.log(res);
          getdat();
        })
        .catch((err) => {
          console.error("Error:", err); 
        });
    });
  
    
  
    const edit_but = document.createElement("button");
    edit_but.id = "e_btn";
    edit_but.className = "e_btn";
    const edit_text = document.createTextNode("Edit");
    edit_but.appendChild(edit_text);
    
    edit_but.addEventListener("click", function () {
      document.getElementById("name").value = myobj.name;
      document.getElementById("email").value = myobj.email;
      document.getElementById("phone").value = myobj.phone;
      isediting = true;
      edtingobj = myobj;
    });
  
    
    newli.appendChild(newlitext);
    newli.appendChild(del_but);
    newli.appendChild(edit_but);
    ulSelector.appendChild(newli);
  }
  
  let isediting = false;
  let edtingobj = {};
  