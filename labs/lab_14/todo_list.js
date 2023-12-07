"use strict";

const domain = "https://jsonplaceholder.typicode.com";

const displayUsers = async () => {
    try {
      const response = await fetch(`${domain}/users`);
      const users = await response.json();
  
      const usersSelect = document.getElementById("users");

      users.forEach(user => {
        const option = document.createElement("option");
        option.value = user.id;
        option.text = user.name;
        usersSelect.appendChild(option);
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    displayUsers();

    document.getElementById("view_list").addEventListener("click", async () => {
      const userId = document.getElementById("users").value;
  
      try {
        const response = await fetch(`${domain}/todos?userId=${userId}`);
        const todoList = await response.json();
  
        const listContainer = document.getElementById("list");
        listContainer.innerHTML = "";
  
        if (todoList.length > 0) {
          const table = document.createElement("table");
          const header = table.insertRow();
          header.insertCell().textContent = "ID";
          header.insertCell().textContent = "Title";
          header.insertCell().textContent = "Completed";
  
          todoList.forEach(todo => {
            const row = table.insertRow();
            row.insertCell().textContent = todo.id;
            row.insertCell().textContent = todo.title;
            row.insertCell().textContent = todo.completed ? "Yes" : "No";
          });
  
          listContainer.appendChild(table);
        } else {
          listContainer.textContent = "No todos found for the selected user.";
        }
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    });
  });