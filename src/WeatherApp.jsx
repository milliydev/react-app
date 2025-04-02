import axios from "axios";
import { useState } from "react";
import Weather from "./Weather";
const WeatherApp = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const API_KEY = "0f708583f4e004423e15e2814f614ea4";
    const searchLocation = async (event) => {
        if (event.key === "Enter" && location.trim() !== "") {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
                );
                const updatedData = {
                    ...response.data,
                    main: {
                        ...response.data.main,
                        temp: Math.round(response.data.main.temp),
                    }
                };
                setData(updatedData);
                console.log("Kelgan ma’lumot:", updatedData);
                setLocation("");
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        }
    };
    return (
        <div className="w-full h-full relative">
            <div className="text-center p-4">
                <input
                    type="text"
                    className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-60/100"
                    placeholder="Enter Location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyDown={searchLocation}
                />
            </div>
            <Weather weatherData={data} />
        </div>
    );
};
export default WeatherApp;
