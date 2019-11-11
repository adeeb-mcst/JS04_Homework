// (function() {
//   console.log(data.people[0]);
// })();

let logData = function() {
  for (k in data.people) {
    console.log(data.people[k]);
  }
};

let logNames = function() {
    for (k in data.people) {
        console.log(data.people[k].name);
      }
};

let logNameEyes = function() {
    for (k in data.people) {
        console.log(data.people[k].name, data.people[k].eye_color);
      }
};

let logByMass = function() {
    for (k in data.people) {
        if(data.people[k].mass > 75) {
            console.log(data.people[k].name, data.people[k].mass);
        }
      }
};
