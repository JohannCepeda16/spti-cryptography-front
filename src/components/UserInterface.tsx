import { Button, Grid, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import useLogin from "../hooks/useLogin";

export interface IUserInfo {
    email: string;
    password: string;
}
export default function UserInterface() {
    const { loginWithBody, loginWithParams, loginWithUrl } = useLogin();
    const [userInfo, setUserIfo] = useState<IUserInfo>({
        email: "",
        password: "",
    });

    const handleData = (e: any) => {
        setUserIfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log(userInfo);
		loginWithBody(userInfo);
		loginWithParams(userInfo);
		loginWithUrl(userInfo);
    };

    return (
        <Grid container style={{ padding: "20px" }}>
            <h3
                style={{
                    display: "block",
                    paddingLeft: "20px",
                    width: "100%",
                    padding: "20px",
                    backgroundColor: "#262626",
                    color: "white",
                }}
            >
                <IconButton size="medium">
                    <BloodtypeIcon style={{ color: "red" }} />
                </IconButton>
                Banco internacional de sangre
            </h3>
            <Grid item xs={12} md={6} lg={6}>
                <label
                    style={{
                        display: "block",
                        width: "400px",
                        textAlign: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    Bienvenido al banco de sangre, ingresa a tu cuenta para
                    conocer tus productos, peticiones y servicios
                </label>
                <div
                    style={{
                        width: "400px",
                        textAlign: "center",
                        border: "1px solid #000",
                        alignSelf: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "40px",
                    }}
                >
                    <h4
                        style={{
                            margin: 0,
                            textAlign: "center",
                            backgroundColor: "#262626",
                            color: "white",
                        }}
                    >
                        Datos de usuario
                    </h4>
                    <div style={{ padding: "20px" }}>
                        <label style={{ display: "block", margin: "5px" }}>
                            *Ingresa tu usuario
                        </label>
                        <TextField
                            style={{ display: "block" }}
                            name="email"
                            value={userInfo.email}
                            onChange={handleData}
                            placeholder="username"
                            type="email"
                        />
                        <label style={{ display: "block", margin: "5px" }}>
                            *Ingresa tu contraseña
                        </label>
                        <TextField
                            style={{ display: "block" }}
                            name="password"
                            value={userInfo.password}
                            onChange={handleData}
                            placeholder="********"
                            type={"password"}
                        />
                    </div>
                    <Button
                        style={{
                            backgroundColor: "#262626",
                            margin: "10px",
                            width: "auto",
                        }}
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Ingresar
                    </Button>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <img
                    style={{ display: "block", margin: "auto" }}
                    width="500px"
                    src="https://img.freepik.com/foto-gratis/vista-superior-medico-paciente-manos-sosteniendo-corazon-rojo-sobre-mesa-blanca_38391-541.jpg?w=540"
                />
                <label style={{ display: "block", textAlign: "center" }}>
                    Trabajamos para brindarte las mejores alternativas para tu
                    salud{" "}
                    <a
                        style={{
                            display: "block",
                            textDecoration: "underline",
                        }}
                    >
                        Conoce mas
                    </a>
                </label>
            </Grid>
        </Grid>
    );
}
