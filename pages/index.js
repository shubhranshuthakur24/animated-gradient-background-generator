import Head from "next/head";
import Image from "next/image";
import { SettingsProvider } from "../context/SettingsContext";
import AnimatedBackground from "../component/AnimatedBackground";
import Controls from "../component/Controls";
import Output from "../component/Output";

export default function Home() {
  return (
    <>
      <Head>
        <title>Animated Gradient Background Generator</title>
        <meta
          name="description"
          content="A tool for creating animated background gradients in pure CSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SettingsProvider>
        <AnimatedBackground>
          <main style={{ textAlign: "center", padding: "32px 32px 0" }}>
            <h1 style={{ fontWeight: 200, padding: "16px", fontSize: "3em" }}>
              Animated Gradient Background Generator
            </h1>
            <Controls />
            <Output />
          </main>
          <footer style={{ textAlign: "center", padding: "0 32px 64px" }}>
            <p>
              Created by :<br></br>
              <span
                style={{
                  background: "rgba(0,0,0,.25)",
                  maxWidth: "640px",
                  borderRadius: "8px",
                  margin: "auto",
                  padding: "32px",
                }}
              >
                <a href="https://www.linkedin.com/in/shubhranshu-thakur/">
                  Shubhranshu Thakur
                </a>
              </span>
            </p>
          </footer>
        </AnimatedBackground>
      </SettingsProvider>
    </>
  );
}
