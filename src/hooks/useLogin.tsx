import { IUserInfo } from "../components/UserInterface";

export default function useLogin() {
    const baseUrl = "http://localhost:8080/api/login";

    const loginWithUrl = async (data: IUserInfo) => {
        fetch(`${baseUrl}/url/${data.email}/${data.password}`, {
            method: "POST",
        })
            .then((data) => data.json().then((res) => console.log(res)))
            .catch((error) => console.log(error));
    };

    const loginWithParams = async (data: IUserInfo) => {
        fetch(
            `${baseUrl}/params?email=${data.email}&password=${data.password}`,
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
            body: JSON.stringify(data),
        })
            .then((data) => data.json().then((res) => console.log(res)))
            .catch((error) => console.log(error));
    };

    return { loginWithUrl, loginWithParams, loginWithBody };
}
