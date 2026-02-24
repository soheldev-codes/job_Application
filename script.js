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



// Default Tab Button Filter 
let currentTab = "All"

function tabButton(event, tab) { 
    currentTab = tab;
    const tabBtns = document.querySelectorAll(".tab-btn");
    tabBtns.forEach(btn => {
        btn.classList.remove("bg-black", "text-white");
        btn.classList.add("bg-gray-200", "text-black");
    });
    event.currentTarget.classList.remove("bg-gray-200", "text-black");
    event.currentTarget.classList.add("bg-black", "text-white");
     renderJobs();
}




function updateDashboard() {
    document.getElementById("totalJobCount").innerText = allJobs.length;
    document.getElementById("interviewCount").innerText = allJobs.filter(j => j.status === "Interview").length;
    document.getElementById("rejectedCount").innerText = allJobs.filter(j => j.status === "Rejected").length;
}

function renderJobs() {

    updateDashboard();
    const container = document.getElementById("jobsContainer")
    const emptyState = document.getElementById("emptyState")

    container.innerHTML = "";

    let filterJobs;

    if (currentTab === "All") {
        filterJobs = allJobs;
    } else {
        filterJobs = allJobs.filter(job => job.status === currentTab);
    }

    // Avalaible Jobs Count Conditional Use
    const tabCount =  document.getElementById("tabCount")

     if (currentTab === "All") {
       tabCount.innerText = filterJobs.length + " Jobs";
    } else {
        tabCount.innerText = filterJobs.length ? filterJobs.length + " of " + allJobs.length + " jobs" : filterJobs.length + " jobs";
    }


    

    // No Jobs Then Show Empty State Design
     if (filterJobs.length === 0) {
        emptyState.classList.remove("hidden");
        return;
    } else {
        emptyState.classList.add("hidden");
    }


    filterJobs.forEach(job => {
        const card = document.createElement("div");
        card.className = "bg-white mt-5 p-5 rounded-xl shadow sm:flex  justify-between";

        card.innerHTML = `
            <div>
            <h3 class="text-lg font-bold">${job.company}</h3>
            <p class="text-sm text-gray-500">${job.position}</p>
            <p class="text-sm mt-2">${job.location} • ${job.type}</p>
            <p class="text-sm font-semibold mt-2">${job.salary}</p>
            ${job.status ? `
            <span class="inline-block mt-3 mb-2 px-3 py-1 text-xs font-semibold rounded
                ${job.status === "Interview"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-red-100 text-red-700"}">
                ${job.status}
            </span>` : ""}
            <p class="text-gray-600 text-sm mt-2">${job.description}</p>

            <div class="flex gap-2 mt-4">
                <button onclick="markInterview(${job.id})"
                    class="px-3 py-1 text-sm rounded ${job.status === "Interview" ? "bg-blue-600 text-white" : "bg-gray-200"}">
                    Interview
                </button>

                <button onclick="markRejected(${job.id})"
                    class="px-3 py-1 text-sm rounded ${job.status === "Rejected" ? "bg-red-600 text-white" : "bg-gray-200"}">
                    Rejected
                </button>
            </div>
            </div>
            <div class="mt-5 sm:m-px">
                <button onclick="deleteJob(${job.id})"
                  class="px-3 py-1 text-sm rounded bg-black text-white ">
                    Delete
                </button>
            </div>
        `;

        container.appendChild(card);
    });

    updateDashboard();

}


function markInterview(id) {
    const job = allJobs.find(j => j.id === id);
    job.status = job.status === "Interview" ? "" : "Interview";
    renderJobs();
}

function markRejected(id) {
    const job = allJobs.find(j => j.id === id);
    job.status = job.status === "Rejected" ? "" : "Rejected";
    renderJobs();
}

function deleteJob(id) {
    allJobs = allJobs.filter(j => j.id !== id);
    renderJobs();
}



 renderJobs()





