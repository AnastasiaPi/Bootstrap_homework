var data = [];
var nam = 1;
b1.addEventListener("click", function() {
    nam += 1;
    let y = document.getElementsByTagName("input");
    for (var i = 0; i < y.length; i++) {
        data[i] = y[i].value;
    }

    var node = '<div class="row1"> <form> <div class="form-row align-items-center"> <div class="col-auto"> <label class="sr-only" for="inlineFormInput">Name</label> <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe"> </div> <div class="col-auto"> <label class="sr-only" for="inlineFormInputGroup">Username</label> <div class="input-group mb-2"> <div class="input-group-prepend"> <div class="input-group-text">@</div> </div> <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username"> </div> </div> <div class="col-auto my-1"> <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label> <select class="custom-select mr-sm-2" id="inlineFormCustomSelect"> <option selected>Choose...</option> <option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option> </select> </div> <div class="col-auto"> <div class="form-check mb-2"> <input class="form-check-input" type="checkbox" id="autoSizingCheck"> <label class="form-check-label" for="autoSizingCheck"> Remember me </label> </div> </div> <div class="col-auto"> <button type="submit" class="btn btn-primary mb-2">Submit</button> </div> </div> </form> </div>';

    document.getElementsByClassName("wrap")[0].innerHTML = document.getElementsByClassName("wrap")[0].innerHTML + node;

    for (var i = 0; i < y.length; i++) {
        if (data[i] != undefined) {
            y[i].value = data[i];
        } else {
            y[i].value = '';
        }
    }

})

b2.addEventListener("click", function() {

    var node = document.getElementsByClassName("row1")[nam - 1];
    if (node != undefined) {
        document.getElementsByClassName("wrap")[0].removeChild(node);
        nam -= 1;
        data = data.slice(4);

    }

})

b3.addEventListener("click", function() {
    let y = document.getElementsByTagName("input");
    data = [];
    for (var i = 0; i < y.length; i++) {
        y[i].value = '';

    }
})