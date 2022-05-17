const education = {
    "degree": "Bachelor in Statistics &amp; Computer Science",
    "year": "2022",
    "school": "The University of Toronto",
    "courses": [
        "Neural Networks and Deep Learning",
        "Design and Analysis of Experiments",
        "Software Design",
        "Linear Algebra",
        "Machine Learning",
        "Survey, Sampling, and Observational Data in Statistics",
        "Methods of Data Analysis",
        "Probability and Statistics"
    ]
};
//Built the html code until the list of courses begins
let msg = `
<h4>${education.degree}</h4>
<h5>${education.year}</h5>
<p><em>${education.school}</em></p>
<h4>Courses Taken</h4>
<ul>
`;
//use a loop to add the list of courses
education.courses.forEach(course => {
    msg = msg.concat(`<li>${course}</li>`);
});
//close the loop
msg = msg.concat("</ul>");
//write to html
document.getElementById("education").innerHTML = msg;
export {};
