const prettier = require("prettier");
const prettierPluginLatex = require("prettier-plugin-latex");

window.addEventListener("DOMContentLoaded", () => {
  /**
   * @type {HTMLTextAreaElement}
   */
  const inputTextArea = document.querySelector("#input");
  const outputTextArea = document.querySelector("#output");
  const button = document.querySelector("#format");

  button.addEventListener("click", async () => {
    const input = inputTextArea.value;

    const output = await prettier.format(input, {
      parser: "latex-parser",
      plugins: [prettierPluginLatex],
    });

    outputTextArea.value = output;
  });
});
