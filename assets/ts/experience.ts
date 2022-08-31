//created a class to hold the data for the jobs since it reduces headaches later
class job{
    title:string;
    company:string;
    company_description:string;
    date:string;
    location:string;
    description:string[];
    constructor(title:string, company:string, company_description:string, date:string, location:string, description:string[]){
        this.title = title;
        this.company = company;
        this.company_description = company_description;
        this.date = date;
        this.location = location;
        this.description = description;
    }
}

//inserts a job into the html
function insert_job(msg:string, job:job): string{
    //open the resume item
    msg = msg.concat("<div class=\"resume-item\">");

    //add basic job information
    msg = msg.concat(`<h4>${job.title}</h4>`);
    msg = msg.concat(`<h5>${job.company}</h5>`);
    msg = msg.concat(`<p><em>${job.company_description}</em></p>`);
    msg = msg.concat(`<p><em>${job.date}</em></p>`);
    msg = msg.concat(`<p><em>${job.location}</p></em>`);

    //use loop to add job bullet points
    msg = msg.concat("<ul>");
    job.description.forEach(descr => {
        msg = msg.concat(`<li>${descr}</li>`);
    });
    msg = msg.concat("</ul>");

    //close resume item
    msg = msg.concat("</div");

    return msg;
}

//dictionary containing experience objects
const experience = {
    "developer": new job(
        "Software Engineering Team Lead",
        "Lonehaven",
        "Front End Development Lab",
        "April 2022 - Present",
        "Ottawa, Ontario, Canada",
        [
            "Work with a variety of front-end programming languages such as HTML, CSS, JavaScript and TypeScript to develop interactive and engaging websites for clients and consumers.",
            "Using databases to derive data insights for strategic decision-making and project planning.",
            "Communicate with clients to determine the best design and implementation approach on a case-by-case basis.",
            "Manage a team of developers and set realistic goals and deadlines for software production.",
            "Make design and engineering decisions for the software that my team builds."
        ]
    ),

    "analyst": new job(
        "Data Scientist",
        "Data Glacier",
        "Data Lab",
        "June 2021 - October 2021",
        "Remote",
        [
            "Collected, monitored and analyzed big data to determine sales trends for clients and their organizations.",
            "Developed visuals for big data using data visualization tools such as R and Seaborn.",
            "Developed predictive models for real estate trends using Scikit-Learn.",
            "Deployed machine learning models to industry using Flask."
        ]
    ),

    "treasurer": new job(
        "Treasurer and Instructor",
        "UTM Boxing Club",
        "Non-Profit Organization",
        "October 2019 - May 2021",
        "Mississauga, Ontario, Canada",
        [
            "Managed accounts with statements and invoices on a bi-weekly basis and maintained record accuracy.",
            "Took a leadership role on the team and implemented strategies to decrease costs while increasing club services.",
            "Part-time instructor, used my communication skills to teach boxing to a class of 8-12 people per week.",
            "Regularly held fundraising and informational events and would interact with a large number of students to market the club.",
            "Collaborated with a member of the Women in Science and Computing society to create a women's only boxing class. The event was a huge success.",
            "Organized a mental health event to help students relieve stress before exams.",
            "Sports Club of the Year 2020: our small team was recognized by the student body for our contribution to the improved physical and mental health on campus."
        ]
    ),

    "bookkeeper": new job(
        "Bookkeeper",
        "Brillion Group",
        "Accounting Firm",
        "February 2019 - August 2019",
        "Milton, Ontario, Canada",
        [
            "Used technologies such as Microsoft Excel and Quickbooks to log clients' financial information.",
            "Responsible for preparing client financial documents for federal audits."
        ]
    )
}

let msg:string = "<h3 class=\"resume-title\">Professional Experience</h3>";

Object.entries(experience).forEach((entry) => {
    msg = insert_job(msg, entry[1]);
});

document.getElementById("experience")!.innerHTML = msg;

export {};