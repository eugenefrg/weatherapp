import moment from "moment";
import { TimeOfDayColors } from "./timeOfDayColors";

/**
 * This determines wether the current time is day or night.
 * Intended to also handle the color changing to emphasize what
 * the current time is. This function is yet to be used.
 */
export const getTimeOfDay = (date: string): TimeOfDayColors => {
  const currentHour = moment(date).hour();
  if (currentHour >= 12) {
    return TimeOfDayColors.day;
  } else {
    return TimeOfDayColors.night;
  }
};
