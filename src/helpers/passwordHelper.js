export const generatePassword = (length, options) => {
  let characters = "";
  let result = "";

  if (options[0]) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (options[1]) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (options[2]) {
    characters += "0123456789";
  }

  if (options[3]) {
    characters += '!"#$%&/()=?¡¿+*._-';
  }
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

export const securityLevel = (password, options) => {
  let level = 0;
  let levelString = "";
  console.log(password);

  if (password.length > 8) {
    level += 1.2;
  }

  if (options[0]) {
    level += 1.2;
  }

  if (options[1]) {
    level += 1.2;
  }

  if (options[2]) {
    level += 1.2;
  }

  if (options[3]) {
    level += 1.2;
  }

  if (level < 3.5) {
    levelString = "lower";
  } else if (level > 3.5 && level < 4.8) {
    levelString = "medium";
  } else {
    levelString = "high";
  }

  return levelString;
};
