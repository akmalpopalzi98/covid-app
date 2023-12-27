import { GiHealthCapsule } from "react-icons/gi";
import data from "../questions";
import QuestionCard from "../components/QuestionCard";
import { useContext, useState, useEffect, useMemo } from "react";
import { ScoreContext } from "../context/ScoreContext";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ModalContext } from "../context/ModalContext";
import { QuestionContext } from "../context/QuestionContext";
import { TiArrowRightOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import LogOut from "../components/LogOut";

function MainPage() {
  const { score, isAnswered } = useContext(ScoreContext);
  const { openModal } = useContext(ModalContext);
  const { index, setIndex } = useContext(QuestionContext);
  const [init, setInit] = useState(false);
  const [finish, setFinish] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
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
        setFinish(true);
        navigate("/feedback");
      }
    } else {
      // Optionally, handle the case when the current question hasn't been answered
      alert("Please answer the current question");
    }
  };

  const options = useMemo(
    () => ({
      name: "Virus",
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#323031",
          distance: 150,
          enable: false,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          outModes: "bounce",
          speed: 6,
        },
        number: {
          density: {
            enable: true,
          },
          value: 170,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          options: {
            image: {
              height: 32,
              replaceColor: true,
              src: "https://particles.js.org/images/sars-cov-2.png",
              width: 32,
            },
          },
          type: "image",
        },
        size: {
          value: 16,
        },
      },
      background: {
        color: "#323031",
      },
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

      <LogOut />
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
          <div
            style={{
              position: "absolute",
              top: 2,
              right: 3,
              width: "10%", // Adjust the size as needed
              height: "8%", // Adjust the size as needed
              borderRadius: "6px",
              backgroundColor: " #a93226 ", // Set the background color
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white", // Set the text color
              fontWeight: "bold",
            }}
          >
            Score: {score}
          </div>
          <div
            style={{
              position: "absolute",
              top: 2,
              left: 3,
              width: "10%",
              height: "8%",
              borderRadius: "6px",
              backgroundColor: "purple",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Question: {index + 1}/{data.length}
          </div>
          <button
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "10%",
              height: "8%",
              margin: "10px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              fontWeight: "bold",
              backgroundColor: " #45b39d ",
            }}
            onClick={nextQuestion}
            disabled={openModal}
          >
            {index + 1 == data.length ? "Finish" : <TiArrowRightOutline />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
