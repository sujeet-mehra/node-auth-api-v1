const pingController = (req, res) => {
  res.status(200).json({ success: true, message: "Server is live!" });
};

module.exports = pingController;