// Data
let allJobs = [
    { id: 1, company: "Google", position: "Frontend Developer", location: "Remote", type: "Full-Time", salary: "$4000", description: "Develop modern UI using React.", status: "" },
    { id: 2, company: "Amazon", position: "Backend Developer", location: "USA", type: "Full-Time", salary: "$4500", description: "Work with Node.js and databases.", status: "" },
    { id: 3, company: "Microsoft", position: "UI Designer", location: "Canada", type: "Contract", salary: "$3500", description: "Design user-friendly interfaces.", status: "" },
    { id: 4, company: "Tesla", position: "Software Engineer", location: "USA", type: "Full-Time", salary: "$5000", description: "Build scalable applications.", status: "" },
    { id: 5, company: "Meta", position: "Product Manager", location: "Remote", type: "Full-Time", salary: "$4800", description: "Manage product lifecycle.", status: "" },
    { id: 6, company: "Spotify", position: "Mobile Developer", location: "Sweden", type: "Full-Time", salary: "$4200", description: "Build Android/iOS apps.", status: "" },
    { id: 7, company: "Airbnb", position: "QA Engineer", location: "UK", type: "Part-Time", salary: "$3000", description: "Test web applications.", status: "" },
    { id: 8, company: "Netflix", position: "DevOps Engineer", location: "Remote", type: "Full-Time", salary: "$4700", description: "Manage cloud infrastructure.", status: "" }
];


function updateDashboard() {
    document.getElementById("totalJobCount").innerText = allJobs.length;
    document.getElementById("interviewCount").innerText = allJobs.filter(j => j.status === "Interview").length;
    document.getElementById("rejectedCount").innerText = allJobs.filter(j => j.status === "Rejected").length;
}




// Default Tab Button Filter 
let currentTab = "All"

function tabButton(event, id) {
    
    currentTab = id;

    const tabBtns = document.querySelectorAll(".tab-btn");

    tabBtns.forEach(btn => {
        btn.classList.remove("bg-black", "text-white");
        btn.classList.add("bg-gray-200", "text-black");
    });

    event.currentTarget.classList.remove("bg-gray-200", "text-black");
    event.currentTarget.classList.add("bg-black", "text-white");
}




