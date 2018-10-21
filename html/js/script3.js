let raw_params = getParameter();
let params = JSON.parse(raw_params["params"]);

$("#dest").attr("src", "img/" + params["dest"]);

if(params["success"]) {
  $("#spaceshuttle").addClass("run-spaceshuttle-success");
} else {
  $("#spaceshuttle").addClass("run-spaceshuttle-failure");
}

