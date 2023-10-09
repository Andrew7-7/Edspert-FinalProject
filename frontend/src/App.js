import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import ProgCard from "./Component/ProgrammingCard";
import girlpic from "./Images/girl.png";
import Typography from "./Component/Typography";
import { useState } from "react";
import { courses } from "./Component/data";
import { Link, useNavigate } from "react-router-dom";
function App() {
  const [currPage, setCurrPage] = useState(1);
  const perPage = 6;
  const lastindex = currPage * perPage;
  const firstIndex = lastindex - perPage;
  const dataSlice = courses.slice(firstIndex, lastindex);
  const totalPage = Math.ceil(courses.length / perPage);
  const numbers = [...Array(totalPage + 1).keys()].slice(1);
  console.log(firstIndex, lastindex);
  const prevPage = () => {
    if (currPage !== 1) setCurrPage(currPage - 1);
  };

  const nextPage = () => {
    if (currPage !== totalPage) setCurrPage(currPage + 1);
  };

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="text-white">
          <Typography sizes={3}>
            Jadi expert bersama <br></br>edspert.id
          </Typography>
          <br></br>
          <Typography sizes={1}>
            Tingkatkan skill dan pengetahuan bersama para mentor<br></br>terbaik
            di bidangnya, untuk siapkan karir impian anda
          </Typography>
        </div>
        <img className="girlPic" src={girlpic}></img>
      </div>

      <div className="cardOuter">
        {dataSlice.map((course, index) => (
          <div
            key={course.title}
            className="mb-5"
            onClick={() => {
              navigate("/detail", { state: { course } });
            }}
          >
            <section>
              <ProgCard
                title={course.title}
                detail={course.detail}
                batch={course.batch}
                mentor={course.mentor}
                oldPrice={course.oldPrice}
                newPrice={course.newPrice}
              ></ProgCard>
            </section>
            {(index + 1) % 3 === 0 ? "\n" : ""}
          </div>
        ))}
      </div>

      <nav>
        <div className="pagination flex justify-center">
          <div
            onClick={prevPage}
            style={{ cursor: "pointer" }}
            className="numbers"
          >
            Prev
          </div>
          {numbers.map((number) => (
            <div
              className="numbers"
              style={{ cursor: "pointer" }}
              key={number}
              onClick={() => setCurrPage(number)}
            >
              {number}
            </div>
          ))}
          <div
            onClick={nextPage}
            style={{ cursor: "pointer" }}
            className="numbers"
          >
            Next
          </div>
        </div>
      </nav>

      <Footer />
    </>
  );
}

export default App;
