import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

import fs from "fs"
import path from "path"

const certPath = path.resolve(__dirname, "../cert/localhost+2.pem")
const keyPath = path.resolve(__dirname, "../cert/localhost+2-key.pem")

export default defineConfig({
    server:{
        port: 3000,
        proxy: {
            "/api": {
                target: "http://localhost:3100",
                changeOrigin: true,
                secure: false,
                rewrite: path => path.replace(/^\/api/, "")
            }
        }
    }
})