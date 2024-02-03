import { GoogleGenerativeAI } from "@google/generative-ai"
const button = document.querySelector(".send");
const input = document.querySelector(".input");
const output = document.querySelector(".ai-message");
const message_area = document.querySelector(".message_area");

const genAi = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

button.addEventListener("click", async () => {
  // ... existing code ...
});

input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    button.click();
  }
});

button.addEventListener("click", async () => {
  if (!input.value) return alert("Please enter a prompt");
  const prompt = input.value;
  message_area.innerHTML += `<div class="message user-message">
  <div class="img"><img class="user" src="./public/my_face-removebg-preview.png" alt=""></div>
  <div class="text">${prompt}</div>
</div>`;
  message_area.scrollTop = message_area.scrollHeight; // Navigate to the bottom of message_area

  const model = genAi.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContentStream(prompt);
  input.value = "";
  const response = await result.response;
  const text = await response.text();
  const formattedText = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
  const formattedTextWithItalic = formattedText.replace(/\*(.*?)\*/g, "<i>$1</i>"); // Add this line to consider text with one asterisk as italic

  // Convert links to anchor tags and color them blue
  const formattedTextWithLinks = formattedTextWithItalic.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" style="color: blue;">$1</a>'
  );

  message_area.innerHTML += `<div class="message ai-message">
  <div class="img"><img src="./public/logo.png" alt=""></div>
  <div class="text">${formattedTextWithLinks}</div>
</div>`;
  message_area.scrollTop = message_area.scrollHeight - message_area.clientHeight; // Navigate to the top of currently added innerHTML
}) 