let count = 1;

document.getElementById("userForm").onsubmit = function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name && email) {
        let table = document.getElementById("userTable");

        let row = table.insertRow();
        row.innerHTML = `
      <td class="border p-2 text-center">${count}</td>
      <td class="border p-2">${name}</td>
      <td class="border p-2">${email}</td>
    `;

        count++;
        this.reset();
    }
};
