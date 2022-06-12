import Particles from "react-tsparticles";
import html from "../../assets/imgs/html.svg";
import css from "../../assets/imgs/css.svg";
import sass from "../../assets/imgs/sass.svg";
import node from "../../assets/imgs/node.svg";
import js from "../../assets/imgs/js.svg";
import ts from "../../assets/imgs/ts.svg";
import jquery from "../../assets/imgs/jquery.svg";
import react from "../../assets/imgs/react.svg";
import mysql from "../../assets/imgs/mysql.svg";
import git from "../../assets/imgs/git.svg";
import vscode from "../../assets/imgs/vscode.svg";
import styles from "./mainParticles.module.css";
import "./Particles.css";
export default function Icons() {
  return (
    <section className={styles.container__icons}>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          detectRetina: true,
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.1,
                size: 2,
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.1,
                },
                radius: 60,
              },
              grab: {
                distance: 500,
                lineLinked: {
                  opacity: 0.1,
                },
              },
              push: {
                quantity: 2,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            lineLinked: {
              blink: false,
              color: "#000",
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.1,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              limit: 20,
              value: 15,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            rotate: {
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
              direction: "random",
              random: true,
              value: 0,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: [
                {
                  src: html,
                  width: 20,
                  height: 20,
                },
                {
                  src: css,
                  width: 20,
                  height: 20,
                },
                {
                  src: sass,
                  width: 20,
                  height: 20,
                },
                {
                  src: mysql,
                  width: 20,
                  height: 20,
                },
                {
                  src: node,
                  width: 20,
                  height: 20,
                },
                {
                  src: jquery,
                  width: 20,
                  height: 20,
                },
                {
                  src: js,
                  width: 20,
                  height: 20,
                },
                {
                  src: ts,
                  width: 20,
                  height: 20,
                },
                {
                  src: react,
                  width: 20,
                  height: 20,
                },
                {
                    src: git,
                    width: 20,
                    height: 20,
                  },
                {
                  src: vscode,
                  width: 20,
                  height: 20,
                },
              ],
              polygon: {
                sides: 5,
              },
              stroke: {
                color: "#000000",
                width: 0,
              },
              type: "image",
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false,
              },
              random: false,
              value: 16,
            },
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "#ffffff",
              lineWidth: 0.5,
            },
            move: {
              radius: 10,
            },
            scale: 1,
            url: "",
          },
          background: {
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </section>
  );
}
