import low from "lowdb";
import FileAsync from "lowdb/adapters/FileAsync";

import nextConnect from "next-connect";

const adapter = new FileAsync("db.json");

async function database(req, res, next) {
  try {
    if (!req.db) {
      const db = await low(adapter);
      await db.defaults({ subscriptions: [] }).write();
      req.db = db;
    }
  } catch (error) {
    console.log("ERROR", error);
  }

  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
