import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number {
    const end_date_utc = this.convertToUtc(end_date);
    const start_date_utc = this.convertToUtc(start_date);

    return dayjs(end_date_utc).diff(start_date_utc, "hours");
  }

  convertToUtc(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  dateNow(): Date {
    return dayjs().toDate();
  }

  compareInDays(start_date: Date, end_date: Date): number {
    const end_date_utc = this.convertToUtc(end_date);
    const start_date_utc = this.convertToUtc(start_date);

    return dayjs(end_date_utc).diff(start_date_utc, "days");
  }

  addDays(days: number): Date {
    return dayjs().add(days, "days").toDate();
  }

  addHours(hours: number): Date {
    return dayjs().add(hours, "hour").toDate();
  }

  compareIfBefore(start_date: Date, end_date: Date): boolean {
    return dayjs(start_date).isBefore(end_date);
  }
}

export { DayjsDateProvider };
