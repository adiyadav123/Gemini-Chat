// import { GoogleGenerativeAI } from "@google/generative-ai"
// const button = document.getElementById("button");
// const input = document.getElementById("name");
// const output = document.getElementById("output");

// const genAi = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);


// button.onclick = async () => {
//   const prompt = input.value;
//   const model = genAi.getGenerativeModel({ model: "gemini-pro" });
//   const result = await model.generateContentStream(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text)
//   output.innerHTML = text;
// }