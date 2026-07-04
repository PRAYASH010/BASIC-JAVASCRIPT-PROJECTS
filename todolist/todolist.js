const inputEl = document.querySelector("input");
const addEl = document.querySelector(".add_btn");
const list = document.querySelector("ul");

// Function to handle adding a new item
const addItem = () => {
    const taskText = inputEl.value.trim(); // .trim() removes accidental spaces

    // UX Guardrail: Don't allow empty tasks
    if (taskText === "") {
        inputEl.focus(); // Refocus the input so they can type
        return; 
    }

    // 1. Create the list item element
    const li = document.createElement("li");
    
    // Create a span to hold text so it doesn't conflict with the button
    const textSpan = document.createElement("span");
    textSpan.textContent = taskText;
    li.appendChild(textSpan);

    // 2. Create the delete button cleanly
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete_btn"); // Add a class for CSS styling
    li.appendChild(deleteBtn);

    // 3. Append the completed row to the list
    list.appendChild(li);

    // 4. Clear and refocus the input field (Great UX!)
    inputEl.value = "";
    inputEl.focus();

    // 5. Delete functionality
    deleteBtn.addEventListener("click", () => {
        li.remove(); // Cleaner modern alternative to list.removeChild(li)
    });
};

// Trigger on click
addEl.addEventListener("click", addItem);

// UX Upgrade: Allow pressing 'Enter' to add items too!
inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});