import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res, next) => {
  const { body } = req;
  const parsed = JSON.parse(body);
  const { email } = parsed;
  const emailSubscribed = req.db
    .get("subscriptions")
    .find({ email })
    .value();

  if (emailSubscribed) {
    res.status(200).json({ status: "SUBSCRIPTION_EXISTS" });
  } else {
    req.db
      .get("subscriptions")
      .push({ email })
      .write();

    res.status(200).json({ status: "SUBSCRIPTION_SUCCESS" });
  }
  return next();
});

export default handler;