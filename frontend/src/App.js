import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import ProgCard from "./Component/ProgrammingCard";
import girlpic from "./Images/girl.png";
import Typography from "./Component/Typography";
function App() {
  const courses = [
    {
      title: "Programming Laravel",
      detail: "(Getting Started with Laravel 9)",
      batch: "September 2022",
      mentor: "William Hartono, Farel Prayoga",
      oldPrice: "Rp 2060.000",
      newPrice: "Rp 560.000",
    },
    {
      title: "Programming C",
      detail: "(Getting Started with C)",
      batch: "September 2023",
      mentor: "Andrew",
      oldPrice: "Rp 2010.000",
      newPrice: "Rp 510.000",
    },
  ];
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
        {courses.map((course) => (
          <section key={course.title}>
            <ProgCard
              title={course.title}
              detail={course.detail}
              batch={course.batch}
              mentor={course.mentor}
              oldPrice={course.oldPrice}
              newPrice={course.newPrice}
            ></ProgCard>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
