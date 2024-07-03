function formatText() {
  const inputText = document.getElementById("textInput").value;
  const formattedTextContainer = document.getElementById("formattedText");

  // Clear previous formatted text
  formattedTextContainer.innerHTML = "";

  // Split the input text into lines
  const lines = inputText.split("\n");

  // Process each line
  lines.forEach((line) => {
    // Check for specific keywords to format
    if (line.includes("Best Smart Gadgets")) {
      formattedTextContainer.innerHTML += `<h2>${line}</h2>`;
    } else if (line.includes("Extend the Life")) {
      formattedTextContainer.innerHTML += `<h3>${line}</h3>`;
    } else if (line.includes("Why Repair Instead")) {
      formattedTextContainer.innerHTML += `<h2>${line}</h2>`;
    } else if (line.includes("At R3 Factory")) {
      formattedTextContainer.innerHTML += `<p>${line}</p><ul>`;
    } else if (line.includes("•")) {
      formattedTextContainer.innerHTML += `<li>${line
        .replace("•", "")
        .trim()}</li>`;
    } else {
      formattedTextContainer.innerHTML += `<p>${line}</p>`;
    }
  });

  // Close the list if it was opened
  if (formattedTextContainer.innerHTML.includes("<ul>")) {
    formattedTextContainer.innerHTML += `</ul>`;
  }
}
