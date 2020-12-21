console.log('test script');

function insertPersons(persons) {
    const tbody = document.querySelector('#list tbody');
    const firstName = data.firstName;
    const lastName = data.lastName;
    const gitHub = data.gitHub;

    const obj = {
        firstName,
        lastName: lastName,
        gitHub: gitHub
   }

console.log({ firstName, lastName, gitHub });

tbody.innerHTML = `<tr>
    <td>Stanca</td>
    <td>Stirb</td>
    <td><a target="_blank" href="https://github.com/StancaMaria">Ghithub</a></td>
</tr>`;
}

fetch('team.json')
    .then(res => res.json())
    .then(data => {
        insertPersons(data);
    });