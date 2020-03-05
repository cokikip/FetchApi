const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(response => {
  return response.json();
  console.log(response);
}).then(people=>{
  const names = people.map(person => person.name).join("\n");
console.log(names);
});
