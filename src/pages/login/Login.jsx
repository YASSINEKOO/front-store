import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import banquePopulaireLogo from "../../assets/images/logo.jpeg";

const Login = () => {
    const { setAuthUser, setIsLoggedIn } = useAuth();
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setMail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (mail === "basma@pca.ma" && password === "1234") {
            setAuthUser({ Name: "polo" });
            setIsLoggedIn(true);
            navigate("/dashboard");
        }
    };

    return (
        <div
            className="flex justify-center items-center h-screen bg-gray-200"
            style={{ position: "relative" }}
        >
            <div
                className="surface-card p-4 shadow-lg rounded-lg"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <div className="text-center mb-5">
                    <img
                        src={banquePopulaireLogo}
                        alt="Banque Populaire"
                        height={70}
                        className="mx-auto mb-3"
                    />
                    <div className="text-3xl font-medium text-gray-600">
                        Welcome Back
                    </div>
                </div>

                <div className="surface-card p-4 shadow-md rounded-lg">
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="email"
                                className="block text-black font-medium mb-2 text-lg"
                            >
                                Email
                            </label>
                            <InputText
                                id="email"
                                type="text"
                                placeholder="Email address"
                                className="w-full p-2 border border-gray-400 rounded-sm"
                                value={mail}
                                onChange={handleEmailChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="password"
                                className="block text-black font-medium mb-2 text-lg"
                            >
                                Password
                            </label>
                            <InputText
                                id="password"
                                type="password"
                                placeholder="Password"
                                className="w-full p-2 border border-gray-400 rounded-sm"
                                value={password}
                                onChange={handlePasswordChange}
                                toggleMask
                            />
                        </div>

                        <Button
                            label="Log In"
                            icon="pi pi-user"
                            className="w-full p-button-raised p-button-secondary rounded"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;