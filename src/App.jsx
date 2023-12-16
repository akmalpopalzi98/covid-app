import "./app.css";
import { GiHealthCapsule } from "react-icons/gi";
import data from "./questions";
import QuestionCard from "./components/QuestionCard";
import { useContext, useState, useEffect, useMemo } from "react";
import { ScoreContext } from "./context/ScoreContext";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { ModalContext } from "./context/ModalContext";
import Start from "./components/Start";

function App() {
  const { score, isAnswered } = useContext(ScoreContext);
  const { openModal, setOpenModal } = useContext(ModalContext);
  const [isStart, setIsStart] = useState(true);

  const [index, setIndex] = useState(0);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const nextQuestion = () => {
    // Check if the current question has been answered
    if (isAnswered) {
      // Check if there are more questions available
      if (index + 1 < data.length) {
        // Move to the next question
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        // Optionally, handle the case when there are no more questions
        console.log("No more questions available");
      }
    } else {
      // Optionally, handle the case when the current question hasn't been answered
      console.log("Please answer the current question");
    }
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
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
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
  }

  return (
    <div style={{ height: "100vh" }}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <h1
        style={{
          padding: "10px",
          color: "white",
          position: "relative",
          zIndex: 2,
        }}
      >
        Your Health <GiHealthCapsule />
      </h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "80%",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "80%",
            backgroundColor: "rgba(131, 145, 146,0.6)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <QuestionCard data={data[index]} />
          {isStart && <Start setIsStart={setIsStart} />}
          <div
            style={{
              position: "absolute",
              top: 2,
              right: 3,
              width: "70px", // Adjust the size as needed
              height: "40px", // Adjust the size as needed
              borderRadius: "6px",
              backgroundColor: "purple", // Set the background color
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white", // Set the text color
              fontWeight: "bold",
            }}
          >
            Score: {score}
          </div>
          <button
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "70px", // Adjust the size as needed
              height: "40px", // Adjust the size as needed
              margin: "10px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black", // Set the text color
              fontWeight: "bold",
            }}
            onClick={nextQuestion}
            disabled={openModal}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
