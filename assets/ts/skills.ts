//builds container for skills
const skills = {
    "technical": [
        "Machine Learning and Neural Networks",
        "Data Analysis and Cleaning",
        "Web Scraping"
    ],

    "langs": [
        "Python",
        "TypeScript and JavaScript",
        "R and RStudio",
        "C#",
        "Java",
        "HTML",
        "C"
    ],

    "frameworks": [
        "PyTorch",
        "Scikit-Learn",
        "TensorFlow",
        "Pandas",
        "Numpy"
    ],

    "other": [
        "Teamwork and Collaboration",
        "Analytical Thinking and Problem Solving",
        "Communication Ability",
        "Fast Learner",
        "Self Motivated",
        "Takes Initiative",
        "Time Management",
        "Patience",
        "Agile Methodology"
    ]
}

//function to parse list of skills and add them to the html as a list
function make_skill_list(msg:string, skills:string[]){
    skills.forEach(skill => {
        msg = msg.concat(`<li>${skill}</li>`);
    });
    return msg;
}

let msg:string = "<h4>Technical Skills</h4><ul>";

//Append non-language and framework technical skills
msg = make_skill_list(msg, skills.technical);

//append frameworks
msg = msg.concat("<li>Frameworks<ul>");
msg = make_skill_list(msg, skills.frameworks);
msg = msg.concat("</ul></li>");

//append languages
msg = msg.concat("<li>Programming Languages</li><ul>");
msg = make_skill_list(msg, skills.langs);
msg = msg.concat("</ul></li>");

//close list
msg = msg.concat("</ul>");

//write technical skills to html
document.getElementById("tech_skills")!.innerHTML = msg;

//resets string for the other skills
msg = "<h4>Other Skills</h4><ul>";
msg = make_skill_list(msg, skills.other);
msg = msg.concat("</ul>");

//write soft skills to html
document.getElementById("other_skills")!.innerHTML = msg;

export {};