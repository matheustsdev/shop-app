import axios from "axios";
import { Platform } from "react-native";

export const api = axios.create({
  baseURL:
    Platform.OS === "ios" ? "http://localhost:8080" : "http://10.0.2.2:8080",
});
