export const MAX_NAME_LENGTH = 25;

export function sanitizeInput(val: string): string {
  if (!val) return "";

  return val
    .trim()
    .replace(/<[^>]*>/g, "")
    .replace(/[&<>"']/g, (m) => {
      switch (m) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&#x27;";
        default:
          return m;
      }
    });
}

export function cleanName(value: string) {
  const onlyLetters = value.replace(/[^A-Za-z ]/g, "");

  let cleaned = onlyLetters.replace(/ +/g, " ");

  cleaned = cleaned.trimStart();

  return cleaned.substring(0, MAX_NAME_LENGTH);
}

export function validateName(name: string) {
  const trimmed = name.trim();

  if (!trimmed) {
    return "Full name is required";
  }

  const letters = trimmed.replace(/[^A-Za-z]/g, "").length;

  if (letters < 2) {
    return "Name must contain at least 2 alphabetic characters";
  }

  if (trimmed.length > MAX_NAME_LENGTH) {
    return "Name must not exceed 25 characters";
  }

  return "";
}