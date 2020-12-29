const validateCharacterClass = (charClass: string) => {
  const SUPPORTED_CHAR_CLASSES = ["d", "w", "s"];
  if (!SUPPORTED_CHAR_CLASSES.includes(charClass))
    throw new Error(`${charClass} is not a supported character class`);
};

export const charIsOfCharacterClass = (char: string, charClass: string) => {
  validateCharacterClass(charClass);
  if (char.length !== 1 || charClass.length !== 1)
    throw new Error(`char and charClass must have length of 1`);

  return new RegExp(`^\\${charClass}$`).test(char);
};

export const removeMaskFromValue = (maskedValue: string, mask: string) => {
  if (maskedValue.length !== mask.length)
    throw new Error(`maskedValue and mask must have the same length.`);

  return Array.from(maskedValue)
    .filter((c, idx) => (mask[idx] === "*" ? true : false))
    .join("");
};

export const applyPlaceholderOnMask = (placeholder: string, mask: string) => {
  const iterator = placeholder[Symbol.iterator]();
  return Array.from(mask)
    .map((char) => (char === "*" ? iterator.next().value : char))
    .join("");
};

export const applyValueOnMask = (
  value: string,
  placeholder: string,
  mask: string
) => {
  let i = 0;
  let maskedValue = "";
  for (let char of mask) {
    if (char === "*") {
      maskedValue += value[i] ? value[i] : placeholder[i];
      i++;
    } else {
      maskedValue += char;
    }
  }
  return maskedValue;
};

export const countFocusPosition = (value: string, mask: string) => {
  const numberOfAsterisks = (mask.match(/\*/g) || []).length;

  if (value.length === numberOfAsterisks) return mask.length;
  if (value.length === 0) return mask.indexOf("*");

  let count = 0;

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === "*") {
      if (count < value.length) {
        count++;
        continue;
      }
      count = i;
      break;
    }
  }
  return count;
};

export const formatValue = (
  value: string,
  placeholder: string,
  mask: string
) => {
  if (!value) return applyPlaceholderOnMask(placeholder, mask);
  const result = applyValueOnMask(value, placeholder, mask);
  return result;
};

export const validateInput = (
  initial: string,
  format: string,
  placeholder: string,
  mask: string
) => {
  if (format.length !== placeholder.length)
    throw `{format} and {placeholder} must have the same length.`;
  if (initial.length > placeholder.length)
    throw `{initial} can't be longer than {placeholder}.`;

  const numberOfAsterisks = (mask.match(/\*/g) || []).length;
  if (numberOfAsterisks !== placeholder.length)
    throw `Number of asterisks in {mask} must be the same as the length of {placeholder}.`;
};

export const handleNewKey = (key: string, value: string, format: string) => {
  const BACKSPACE_KEY = "Backspace";
  try {
    if (key === BACKSPACE_KEY) {
      return value.length > 0 ? value.substr(0, value.length - 1) : value;
    } else if (value.length < format.length) {
      const newValue = value + key;
      const position = newValue.length - 1;
      const charClass = format[position];
      if (charIsOfCharacterClass(key, charClass)) return newValue;
    }
  } catch (e) {
    return value;
  }
  return value;
};
