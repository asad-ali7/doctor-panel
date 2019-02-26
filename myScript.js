$.validator.addMethod('regex', function(value, element, param) {
    return this.optional(element) ||
        value.match(typeof param == 'string' ? new RegExp(param) : param);
},
'Please enter a value in the correct format.');
let toggleDiv = (id) => {
    // var x = document.getElementById(id);
    // if (x.style.display == "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
    // $("#"+id).toggle();
    $(`#${id}`).toggle();
}
//doctors array
let doctors = [{
    name: 'Saad',
    email: 'saad@gmail.com',
    age: 16,
    address: 'abcd',
    city: 'xyz',
    gender: 'Male',
    password: '12345678'
},{
    name: 'Asad',
    email: 'asad@gmail.com',
    age: 16,
    address: 'abcd',
    city: 'xyz',
    gender: 'Male',
    password: '12345678'
}]

let layoutToggle = () =>{
    toggleDiv('data_table');
    toggleDiv('data_form');
    toggleDiv('addDoctorButton');
    toggleDiv('back');
    
}

let updateTable = () =>{
    $("#data_table table tbody").html('');
    doctors.forEach(function (item, index) {
        $('#data_table table tbody').append(`<tr><td>${item.name}</td><td>${item.email}</td><td>${item.age}</td><td>${item.address}</td><td>${item.city}</td><td>${item.gender}</td></tr>`)
    })
}  
$(document).ready(function () {
    toggleDiv('data_form');
    toggleDiv('back');
    updateTable();
    $("#patient_form").validate({
        rules: {
            "name": {
                required: true,
                regex:'^[a-zA-Z\\s]+$',
                minlength: 3,
            },
            "email": {
                required: true,
                maxlength: 255,
                regex:'^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
            },
            "age": {
                required: true,
            },
            "address": {
                required: true,
            },
            "city": {
                required: true,
            },
            "gender": {
                required: true,
            },
            "password": {
                required: true,
                minlength: 8,
            },
        },

        messages: {
            "name": {
                minlength: "Name should contain atleast 3 characters",
                required: "Field is required",
                regex: "your name should contain only characters",
            },
            "email": {
                email: "Please enter the email in right format",
                required: "Field is required",
                maxlength: "your email should not contain more than 255 characters.",
                regex:"Write email in that format abc@example.com",
            },
            "age": {
                required: "Field is required",
            },
            "address": {
                required: "Field is required",
            },
            "city": {
                required: "Field is required",
            },
            "gender": {
                required: "Field is required",
            },
            "password": {
                required: "Field is required",
                minlength: "Password should contain atleast 8 charcters",
            },
        },
        submitHandler: function (form) {
            console.log("dhnjs ndbchjz jdbhdgbfc", $("#patient_form").serializeJSON());
            
            doctors.push($("#patient_form").serializeJSON());
            updateTable();
            layoutToggle();
            // form.submit();
        }
    });

});




// let myFunction = () =>{
//     console.log("dhnjs ndbchjz jdbhdgbfc",$("#patient_form").serializeJSON());
//     var  data= document.getElementById("patient_form").elements;
//     for(var i=0 ; i<data.length; i++){
//         document.write(data[i].value + "\n");
//     }
// }