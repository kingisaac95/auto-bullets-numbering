export const reformatTextBody = (textBody) => {
  const symbols = {
    "●": "●", //&#9679;
    "-": "-",
    "->": "->",
  };
  const lines = textBody.split("\n");
  /**
   * lastLine - last line typed by user
   * symbol - bullet or number in lastLine
   * lastIndex - last item in lines[]
   * currentLine - holds computed value of the new line
   */
  const lastIndex = lines.length - 1;
  let lastLine = lines[lastIndex].split(" ");
  let symbol = lastLine[0];
  const currentLine = [];

  // validators
  const isNumber = Number(symbol) > 0 && symbol.split("")[1] === ".";
  const isBullet = symbols[symbol];
  const isEmpty = lines[0] === "";

  // if the current line is empty, remove the symbol
  if (lastLine[1] === "" && (isBullet || isNumber)) {
    lines[lastIndex] = "";
    return lines.join("\n");
  }

  /**
   * if the current line is empty without a bullet/number
   * and the user alredy started typing, add the default new line
   */
  if (!isBullet && !isNumber & !isEmpty) {
    currentLine.push("\n");
    return lines.join("\n").concat(currentLine);
  }

  /**
   * check if it's a bullet or number and attach appropriate
   * value to beginning of current line with a space
   */
  if (isBullet) {
    currentLine.push(`\n${symbols[symbol]} `);
  }

  if (isNumber) {
    currentLine.push(`\n${Number(symbol) + 1}. `);
  }

  // reassing the new result of lastLine to lines[]
  lines[lastIndex] = lastLine.join(" ");

  return lines.join("\n").concat(currentLine);
};

export const reformatBullet = (textAreaElement) => {
  const lines = textAreaElement.value.split("\n");
  // get symbol from last line
  const symbol = lines[lines.length - 1].split(" ")[0];
  // replace * with bullet symbol
  if (symbol === "*") {
    // add appropriate bullet with space for formatting
    lines[lines.length - 1] = "● ";
    return (textAreaElement.value = lines.join("\n"));
  }
};
