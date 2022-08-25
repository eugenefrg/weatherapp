/**
 * Returns a url that points to an icon in Accuweather's domain.
 */
export default function getIconUrl(iconNumber: number) {
  let fileNumber = iconNumber.toString();
  /**
   * if the fileNumber is from 1 to 9, add a trailing zero
   * to match our source file.
   */
  if (fileNumber.length === 1) fileNumber = `0${fileNumber}`;

  /**
   * This is not recommended but for the purpose of this project we will use it.
   * these files are not within our control and is bound to change.
   */
  const sourceFile = `https://developer.accuweather.com/sites/default/files/${fileNumber}-s.png`;
  return sourceFile;
}
