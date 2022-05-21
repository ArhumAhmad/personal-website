//creates dictionary of summary section data
const summary = {
    "name": "Arhum Ahmad",
    "description": "Recent University of Toronto graduate with a demonstrated history of experience in data science, machine learning, and statistical research.",
    "phone_string": "(647)-608-1349",
    "phone_number": "6476081349",
    "email": "arhum.a@live.ca"
};
//writes string to be inserted into html
let msg = `<h4>${summary.name}</h4>
    <p><em>
    ${summary.description}
    </em></p>
    <ul>
    <li><a href="mailto:${summary.email}">${summary.email}</a></li>
    </ul>`;
//writes to html
document.getElementById("summary").innerHTML = msg;
export {};
