"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            toast.success("Signup successful!");
            router.push("/login");
        } toast.error(
            error .response?.data?.message || 
            error .message || 
            "Signup failed. Please try again."
        );
         finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-black">
            <h1>{loading ? "Processing..." : "Signup"}</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Username"
            />
            <label htmlFor="email">Email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
            />
            <label htmlFor="password">Password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
            />
            <button
                onClick={onSignup}
                className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 ${
                    buttonDisabled ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-blue-500 text-white"
                }`}
                disabled={buttonDisabled}
            >
                {buttonDisabled ? "No Signup" : "Signup"}
            </button>
            <Link href="/login">
                <a className="text-blue-500 underline">Visit login page</a>
            </Link>
        </div>
    );
}
