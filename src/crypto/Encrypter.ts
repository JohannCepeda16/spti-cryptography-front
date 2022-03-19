var CryptoJS = require("crypto-js");

export const getRandomKey = async () => {
  const response = fetch(
    "https://random.justyy.workers.dev/api/random/?cached&n=128",
    {
      method: "GET",
    }
  )
    .then((res) =>
      res
        .json()
        .then((data) => data)
        .catch((error) => console.log("Failed to convert json"))
    )
    .catch((error) => console.log(error));

  return response;
};

export const encrypt = (value: string, secretKey: string) => {
  const ciphertext = CryptoJS.DES.encrypt(value, CryptoJS.enc.Utf8.parse(secretKey), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();

  return ciphertext;
};

export const decrypt = (ciphertext: string, secretKey: string) => {
  const code = CryptoJS.DES.decrypt(
    ciphertext,
    CryptoJS.enc.Utf8.parse(secretKey),
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }
  ).toString(CryptoJS.enc.Utf8);
  return code;
};
