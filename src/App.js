import arab from "./assets/arab.png";
import globe from "./assets/language.png";
import Select from "react-select";
import notify from "./assets/Group 19.png";
import bubble from "./assets/speech-bubble.png";
import glass from "./assets/magnifying-glass.png";
import path from "./assets/Path.png";
import Bitmap from "./assets/Bitmap.png";
import menu from "./assets/menu.png";
import menu12 from "./assets/Group.png";
import result from "./assets/results.png";
import pres from "./assets/pres.png";
import sekh from "./assets/sekh.png";
import Gr1 from "./assets/Group 4.png";
import g1 from "./assets/g1.png";
import g2 from "./assets/g2.png";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const options = [
    { value: "1", label: "English" },
    { value: "2", label: "Hindi" },
    { value: "3", label: "Urdu" },
    { value: "4", label: "Tamil" },
    { value: "5", label: "Telugu" },
    { value: "6", label: "Spanish" },
    { value: "7", label: "British" },
    { value: "8", label: "Arabic" },
    { value: "9", label: "Bulgarian" },
    { value: "10", label: "Chinese" },
    { value: "11", label: "Danish" },
    { value: "12", label: "Dutch" },
  ];
  const [selectedOption, setSelectedOption] = useState([]);
  useEffect(() => {
    
  }, []);
 
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-1">
          <a href="">
            <img src={globe} alt="" className="img1" />
          </a>
          <Select
            options={options}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            isMulti
            isSearchable
            placeholder="English"
            styles={{
              placeholder: (baseStyle, state) => ({
                ...baseStyle,
                color: state.isFocused ? "blue" : "red",
              }),
            }}
          ></Select>
        </div>
        <div>
          <a href="">
            <img src={bubble} alt="" className="img2" />
          </a>
          <a href="">
            <img src={notify} alt="" className="img2" />
          </a>
          <a href="">
            <img src={glass} alt="" className="img2" />
          </a>
        </div>
        <div className="App-3">
          <a href="">
            <img src={arab} alt="" className="img3" />
          </a>
          <div>
            <h2>Mohamed</h2>
            <p>Your activities</p>
          </div>
          <a href="">
            <img src={path} alt="" className="img4" />{" "}
          </a>
        </div>
      </header>
      <sidebar className="App-side">
        <div className="side1">
          <a href="">
            <img src={menu} alt="" className="img5" />
          </a>
          <a href="">
            <img src={Bitmap} alt="" className="img6" />
          </a>
        </div>
        <div className="s2">
          <button className="b123">
            <a href="">
              <img src={menu12} alt="" />
            </a>
          </button>
          <a href="">
            <img src={pres} alt="" className="im1" />
          </a>
          <a href="">
            <img src={result} alt="" className="im1" />
          </a>
        </div>
      </sidebar>
      <main>
        <div className="m1">
          <div className="m12">
            <div className="m13">
              <div className="m33">
                <h4 style={{ color: "#068eee" }}>OPD</h4>
                <h1>02</h1>
              </div>
              <a href="">
                <img src={Gr1} alt="" className="34" />{" "}
              </a>
            </div>
            <div className="m13">
              <div className="m33">
                <h4 style={{ color: "#068eee" }}>Admission</h4>
                <h1>02</h1>
              </div>
              <img src={Gr1} alt="" className="34" />
            </div>
            <div className="m13">
              <div className="m33">
                <h4 style={{ color: "#068eee" }}>Emergency</h4>
                <h1>02</h1>
              </div>
              <img src={Gr1} alt="" className="34" />
            </div>
            <div className="m13">
              <div className="m33">
                <h4 style={{ color: "#068eee" }}>Consultation</h4>
                <h1>02</h1>
              </div>
              <img src={Gr1} alt="" className="34" />
            </div>
          </div>

          <div className="m23">
            <h4 style={{ color: "#068eee" }}>pinned medical report</h4>
            <img src={g1} alt="" className="m65" />
            <img src={g2} alt="" className="m65" />
            <img src={g1} alt="" className="m65" />
          </div>
          <div className="m23"></div>
          <div></div>
        </div>
        <div className="l2">
          <div className="l6">
            <div className="l3">
              <h3>upcoming opd appointment</h3>
              <button className="l4">
                <span>+</span>
                <p>Add appointment</p>
              </button>
            </div>
            <div className="l5">
              <div className="l7">
                <div className="l9">
                  <img src={sekh} alt="" className="l10" />
                  <h3>Mohammad jaleel</h3>
                </div>
                <h4 style={{ color: "#348bc8" }}>nutrition dept</h4>
                <p>
                  OPD :{" "}
                  <span>
                    <b>AHGf7668</b>
                  </span>
                </p>
                <p>31/10/2021</p>
                <h1 style={{ color: "#206493" }}>8:01 PM</h1>
              </div>
              <div className="l7">
                <div className="l9">
                  <img src={sekh} alt="" className="l10" />
                  <h3>Mohammad jaleel</h3>
                </div>
                <h4 style={{ color: "#348bc8" }}>nutrition dept</h4>
                <p>
                  OPD :{" "}
                  <span>
                    <b>AHGf7668</b>
                  </span>
                </p>
                <p>31/10/2021</p>
                <h1 style={{ color: "#206493" }}>8:01 PM</h1>
              </div>
              <div className="l7">
                <div className="l9">
                  <img src={sekh} alt="" className="l10" />
                  <h3>Mohammad jaleel</h3>
                </div>
                <h4 style={{ color: "#348bc8" }}>nutrition dept</h4>
                <p>
                  OPD :{" "}
                  <span>
                    <b>AHGf7668</b>
                  </span>
                </p>
                <p>31/10/2021</p>
                <h1 style={{ color: "#206493" }}>8:01 PM</h1>
              </div>
            </div>
          </div>
          <div>
            <h1>my request</h1>
            <div className="l51">
              <div className="l7">
                <div className="l9">
                  <img src={sekh} alt="" className="l10" />
                  <h3>Mohammad jaleel</h3>
                </div>
                <h4 style={{ color: "#348bc8" }}>nutrition dept</h4>
                <p>
                  OPD :{" "}
                  <span>
                    <b>AHGf7668</b>
                  </span>
                </p>
                <p>31/10/2021</p>
                <h1 style={{ color: "#206493" }}>8:01 PM</h1>
              </div>{" "}
              <div className="l7">
                <div className="l9">
                  <img src={sekh} alt="" className="l10" />
                  <h3>Mohammad jaleel</h3>
                </div>
                <h4 style={{ color: "#348bc8" }}>nutrition dept</h4>
                <p>
                  OPD :{" "}
                  <span>
                    <b>AHGf7668</b>
                  </span>
                </p>
                <p>31/10/2021</p>
                <h1 style={{ color: "#206493" }}>8:01 PM</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
