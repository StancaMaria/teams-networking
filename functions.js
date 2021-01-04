function insertPersons(persons) {
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML = getPersonsHtml(persons);
}

function getPersonsHtml (persons) {
    return persons.map(getPersonHtml).join("");
}

function getPersonHtml (person) {
    const gitHub = person.gitHub;
    return `<tr>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td><a target="_blank" href="https://github.com/${gitHub}">Github</a></td>
    </tr>`;
}

let allPersons = [];

fetch('team.json')
  .then(res => res.json())
    .then(data => {
        allPersons = data;
        insertPersons(data);
  });

function searchPersons(text) {
    console.warn("search", text, allPersons);
    return allPersons.filter(person => {
        console.info(person.firstName);
        return person.firstName.indexOf(text) != -1;
    });
  }
    
const search = document.getElementById('search');
search.addEventListener("input", e => {
    const text = e.target.value;
  
    const filtrare = searchPersons(text);

    insertPersons(filtrare)
})