import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react({}), svgr(), process.env.USE_VIKE && vike({})],
});
