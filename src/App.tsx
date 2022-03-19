import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { encrypt, decrypt, getRandomKey } from "./crypto/Encrypter";
import UserInterface from "./components/UserInterface";

function App() {
  useEffect(() => {
    loadKeys();
  }, []);

  const loadKeys = async () => {
    const key = await getRandomKey();
    console.log("KEY", key);
    const text = encrypt(key, key);
    console.log("ENCRIPT", text);
    console.log("Decrypted", decrypt(text, key));
  };

  return <UserInterface />;
}

export default App;
