export function sendLoginRequest(email, password) {
  return new Promise((resolve, reject) => {
    if (email === "mansi@gmail.com" && password === "mansi123") {
      return resolve(true);
    } else {
      return reject(new Error("Invalid email and password!!"));
    }
  });
}
