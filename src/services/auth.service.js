const { authRepository } = require("../repositories");

const authService = async function (data) {
  try {
    const user = await authRepository.create(data);
    return user;
  } catch (error) {
    throw error;
  }
};
module.exports = authService;
