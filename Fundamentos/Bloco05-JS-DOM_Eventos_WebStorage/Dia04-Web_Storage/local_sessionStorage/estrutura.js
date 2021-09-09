let organization = {
  name: "trybe",
  since: 2019
}

// objeto "storage" pode ser localStorage ou sessionStorage

localStorage.setItem("trybe", JSON.stringify(organization))
let org = JSON.parse(localStorage.getItem("trybe"))
console.log(org) // { name: "trybe", since: 2019 }

let classes = ["2019/set", "2019/oct"]
localStorage.setItem("classes", JSON.stringify(classes))
let cls = JSON.parse(localStorage.getItem("classes"))
console.log(cls) // ["2019/set", "2019/oct"]