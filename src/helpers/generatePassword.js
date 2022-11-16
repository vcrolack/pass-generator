export const generatePassword = (length, options) => {
  let characters = ''
  let result = ''

  if (options[0]) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (options[1]) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (options[2]) {
    characters += '0123456789';
  }

  if (options[3]) {
    characters += '!"#$%&/()=?¡¿+*._-';
  }
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}