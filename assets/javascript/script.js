function sendMessage() {
      const input = document.getElementById("chatInput");
      const messages = document.getElementById("chatMessages");

      if (input.value.trim() !== "") {
        const newMessage = document.createElement("div");
        newMessage.classList.add("message", "user");
        newMessage.textContent = input.value;
        messages.appendChild(newMessage);
        messages.scrollTop = messages.scrollHeight;
        input.value = "";
      }
    }