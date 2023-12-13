/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import dayjs from "dayjs";
import pino from "pino";
import PinoPretty from "pino-pretty";

const log = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  prettifier: PinoPretty,
  timestamp: () => `,"time":"${dayjs().format()}"`,
});
export { log };
