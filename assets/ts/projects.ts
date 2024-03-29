//research project class
class rsch_project{
    title:string;
    description:string;
    link:string;

    constructor(title:string, description:string, link:string){
        this.title       = title;
        this.description = description
        this.link        = link;
    }
}

//personal project class
class per_project{
    title:string;
    description:string[];
    link:string;

    constructor(title:string, description:string[], link:string){
        this.title       = title;
        this.description = description;
        this.link        = link;
    }
}

//dictionary for research projects
const rsch = {
    "transportation": new rsch_project(
        "Statistical Analysis of Transportation Methods of Students at the University of Toronto",

        `Collaborated with a team of researchers to conduct a study on preferred methods of transportation for university students.
        Gathered and analyzed data to prepare for a formal report and presentation, including data visuals.`,

        `https://github.com/ArhumAhmad/DataVisualization/blob/main/%5B2019%5D%20Proportions%20of%20Transportation%20Methods%20Used%20by%20STA304%20Students.pptx`
    ),

    "rice": new rsch_project(
        `Experimental Analysis of Variables Impacting Preperation Time of Rice`,

        `Collaborated with a team of researchers and data scientists to determine 
        the variables that impact the total cooking time of rice. Gathered experimental data to analyze and visually present using R.`,

        `https://github.com/ArhumAhmad/DataVisualization/blob/main/%5B2020%5D%20STA302%20Final%20Project.pdf`
    )
};

//dictionary for personal projects
const per = {
    "nba": new per_project(
        `NBA Playoffs Prediction Model`,
        [
            `Used Selenium to scrape 29 years-worth of NBA game statistics.`,

            `Cleaned data using Pandas libraries.`,

            `Used Scikit-Learn logistic regression libraries to train the model and achieve almost 80% accuracy on over 100 test cases.`
        ],

        `https://deerhacks-landing-page.vercel.app/`
    ),

    "shoes": new per_project(
        `Convolutional Neural Network for Image Matching`,
        [
            `Designed and built a convolutional neural network (CNN) to predict similarities of images of pair-wise objectes to detect, using collected crowdsourced data as input.`,

            `Built multiple networks to analyze differences in predictions based on number of channels, layers, kernel sizes, etc.`,

            `Batch training and optimization implmented.`
        ],

        `https://github.com/ArhumAhmad/SchoolProjects/blob/main/CSC321%20(Neural%20Networks)/p3/p3.ipynb`
    ),

    "news": new per_project(
        `Text Denoising Autoencoder for News Headlines`,
        [
            `Advanced use of deep learning on a natural language processing task involving news headlines.`,

            `Uses Recurring Neural Networks (RNNs), and autoencoder and decoder, word embeddings, and teacher-forcing 
            methods to learn from hundreds of thousands of news headlines and generates realistic headlines as outputs.`
        ],

        `https://github.com/ArhumAhmad/SchoolProjects/blob/main/CSC321%20(Neural%20Networks)/p4/p4.ipynb`
    )
};

//function to insert research project
function insert_rsch_proj(msg:string, proj:rsch_project): string{
    //open resume item
    msg = msg.concat(`<div class="resume-item">`);

    //insert project title
    msg = msg.concat(`<h4>${proj.title}</h4>`);

    //insert project description
    msg = msg.concat(`<p>${proj.description}</p>`);

    //insert link to project
    msg = msg.concat(`<p><a href="${proj.link}" target="_blank">Link</a></p>`);

    //close resume item
    msg = msg.concat(`</div>`);

    return msg;
}

//function to insert personal project
function insert_per_proj(msg:string, proj:per_project): string{
    //open resume item
    msg = msg.concat(`<div class="resume-item">`);

    //insert project title
    msg = msg.concat(`<h4>${proj.title}</h4>`);

    //insert project description 
    msg = msg.concat("<ul>");
    proj.description.forEach(project => {
        msg = msg.concat(`<li>${project}</li>`);
    });
    msg = msg.concat("</ul>");

    //insert project link
    msg = msg.concat(`<p><a href="${proj.link}" target="_blank">Link</a></p>`);

    //close resume item
    msg = msg.concat("</div>");

    return msg;
}

//create html for research projects and insert into index.html
let msg:string = `<h3 class="resume-title">Research Projects</h3>`;
Object.entries(rsch).forEach(project => {
    msg = insert_rsch_proj(msg, project[1]); //use [1] index of project since [0] is its index within the dictionary
});
msg = msg.concat(`</div>`);
document.getElementById("research")!.innerHTML = msg;

//create html for personal projects and insert into index.html
msg = `<h3 class="resume-title">Personal Projects</h3>`;
Object.entries(per).forEach(project => {
    msg = insert_per_proj(msg, project[1]);
});
msg = msg.concat(`</div>`);
document.getElementById(`per_projects`)!.innerHTML = msg;

export {};