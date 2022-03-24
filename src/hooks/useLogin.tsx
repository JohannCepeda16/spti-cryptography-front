import { IUserInfo } from "../components/UserInterface";
import { encrypt, decrypt } from "../crypto/Encrypter";

export default function useLogin() {
    const baseUrl = "http://localhost:8080/api/login";

    const useCryptography = false; //Switch to encrypt/decrypt data to send
    
    const key = "com.symetric.cryptography.spti";

    const loginWithUrl = async (data: IUserInfo) => {
        fetch(
            `${baseUrl}/url/${
                useCryptography ? encrypt(data.email, key) : data.email
            }/${useCryptography ? encrypt(data.password, key) : data.password}`,
            {
                method: "POST",
            }
        )
            .then((data) => data.json().then((res) => console.log(res)))
            .catch((error) => console.log(error));
    };

    const loginWithParams = async (data: IUserInfo) => {
        fetch(
            `${baseUrl}/params?email=${
                useCryptography ? encrypt(data.email, key) : data.email
            }&password=${
                useCryptography ? encrypt(data.password, key) : data.password
            }`,
            {
                method: "GET",
            }
        )
            .then((data) => data.json().then((res) => console.log(res)))
            .catch((error) => console.log(error));
    };

    const loginWithBody = async (data: IUserInfo) => {
        fetch(`${baseUrl}/body`, {
            method: "POST",
            body: useCryptography
                ? encrypt(JSON.stringify(data), key)
                : JSON.stringify(data),
        })
            .then((data) => data.json().then((res) => console.log(res)))
            .catch((error) => console.log(error));
    };

    return { loginWithUrl, loginWithParams, loginWithBody };
}
