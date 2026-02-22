

// Default Tab Button Filter 
let tabBtn = "All"

function tabButton(event, id) {
    
    tabBtn = id;

    const tabBtns = document.querySelectorAll(".tab-btn");

    tabBtns.forEach(btn => {
        btn.classList.remove("bg-black", "text-white");
        btn.classList.add("bg-gray-200", "text-black");
    });

    event.currentTarget.classList.remove("bg-gray-200", "text-black");
    event.currentTarget.classList.add("bg-black", "text-white");
}