import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import ImageContainer from "../components/ImageContainer";
import Tabs from "../components/Tabs";
import Stats from "../components/Stats";

import planetData from "./data.json";
const planets = planetData.reduce((a, c) => {
  a.push(c.name.toLowerCase());
  return a;
}, []);

function App() {
  const params = useParams();
  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [data, setData] = useState(null);
  const [tab, setTab] = useState("overview");

  // Redirect if no match
  useEffect(() => {
    if (!planets.includes(params.planetName)) {
      navigate("/earth");
    }
  }, []);

  // Set state on navigate
  useEffect(() => {
    setTab("overview");
    setData(
      planetData.find(
        (planet) => planet.name.toLowerCase() === params.planetName
      )
    );

    const name =
      params.planetName[0].toUpperCase() + params.planetName.slice(1);
    document.title = `${name} | Planet Facts`;
  }, [params.planetName]);

  // Preload images
  useEffect(() => {
    if (!data?.images) return;

    const imgInternal = new Image();
    const imgGeology = new Image();
    imgInternal.src = data.images.internal;
    imgGeology.src = data.images.geology;

    setImages([imgInternal, imgGeology]);
  }, [data]);

  // Disable scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      return document.body.classList.add("menu-open");
    }
    document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} planets={planets} />

      <main className="main-grid">
        {data ? (
          <>
            <ImageContainer tab={tab} data={data} />
            <Tabs tab={tab} setTab={setTab} planet={data.name.toLowerCase()} />

            <div className="info">
              <h1>{data.name}</h1>
              <p>{data[tab]?.content}</p>
              <p>
                Source:{" "}
                <a
                  href={data[tab]?.source}
                  target="_blank"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: ".5em"
                  }}
                >
                  Wikipedia <img src="assets/icon-source.svg" alt="" />
                </a>
              </p>
            </div>

            <Stats data={data} />
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}

export default App;
