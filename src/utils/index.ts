import { format } from "date-fns-tz";

export const formatTime = (time: number) => format(time, "yyyy-MM-dd HH:mm:ss", { timeZone: "UTC" }) + "(UTC)";
