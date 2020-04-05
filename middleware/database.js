import low from "lowdb";
import FileAsync from "lowdb/adapters/FileAsync";

import nextConnect from "next-connect";
import winston from "winston";

const adapter = new FileAsync("db.json");

async function database(req, res, next) {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "khel-kud" },
    transports: [
      new winston.transports.File({ filename: "error.log", level: "error" }),
      new winston.transports.File({ filename: "combined.log" }),
    ],
  });

  try {
    if (!req.db) {
      const db = await low(adapter);
      await db.defaults({ subscriptions: [] }).write();
      req.db = db;
    }
  } catch (error) {
    logger.log((level: "error"), {
      message: error.message,
      stack: error.stack,
    });
  }

  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
