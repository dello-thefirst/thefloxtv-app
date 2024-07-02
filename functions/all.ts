export function getWordRange(text: string, range: number) {
  const words = text.split(/\s+/);
  if (words.length > range) {
    const firstXWords = words.slice(0, range);
    const result = firstXWords.join(" ") + "... ";
    return result;
  } else {
    const result = text;
    return result;
  }
}

export function getLetterRange(text: string, range: number) {
  const letters = text.split("");
  const firstXLetters = letters.slice(0, range);
  const result = firstXLetters.join("");
  return result;
}

export function convertMinutesToHoursAndMinutes(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}` + `${hours > 1 ?  ' hours ' : ' hour '}` + `${minutes} mins`
}
