import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Typography from "../Component/Typography";
import girlPic from "../Images/girl.png";
import { Link } from "react-router-dom";
import { YellowCheckbox } from "../Component/smallComponent";
import Checkout from "./Checkout";

const MateriDetail = ({ children, title }) => {
  return (
    <div>
      <div className="materiDetail">
        <YellowCheckbox />
        <div className="checkBoxMargin">
          <Typography sizes={1.2} bolds={600}>
            {title}
          </Typography>
        </div>
      </div>
      <div className="titleDetail">
        <Typography sizes={0.9} colors={"#868686"}>
          {children}
        </Typography>
      </div>
      <br />
    </div>
  );
};
const materiTab = () => {
  return (
    <div className="materiTab">
      <Typography colors={"#2B3E58"} bolds={700} sizes={2}>
        Materi
      </Typography>
      <br />
      <MateriDetail title={"Pengenalan Programming Laravel"}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at Hampden.
      </MateriDetail>
      <MateriDetail title={"Materi Bootcamp Laravel 2"}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at Hampden.
      </MateriDetail>
      <MateriDetail title={"Materi Bootcamp Laravel 3"}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at Hampden.
      </MateriDetail>
      <MateriDetail title={"Materi Bootcamp Laravel 4"}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at Hampden.
      </MateriDetail>
      <MateriDetail title={"Materi Bootcamp Laravel 5"}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at Hampden.
      </MateriDetail>
    </div>
  );
};

const fasilitasTab = () => {
  return (
    <div className="materiTab">
      <Typography colors={"#2B3E58"} bolds={700} sizes={2}>
        Fasilitas
      </Typography>
      <br />
      <MateriDetail title={"E-Sertifikat"}></MateriDetail>
      <MateriDetail title={"Portfolio"}></MateriDetail>
      <MateriDetail title={"Job Connector"}></MateriDetail>
      <MateriDetail title={"Career Development"}></MateriDetail>
    </div>
  );
};

const ProductDetail = () => {
  const [materi, setMateri] = useState("bgOn");
  const [fasilitas, setFasilitas] = useState("bgOff");
  const toggleMateri = () => {
    setMateri("bgOn");
    setFasilitas("bgOff");
  };

  const toggleFasilitas = () => {
    setMateri("bgOff");
    setFasilitas("bgOn");
  };

  return (
    <div>
      <Navbar />
      <div className="heroProductDetail">
        <div>
          <Typography sizes={3.8} colors={"white"} bolds={500}>
            Programming Laravel
          </Typography>

          <Typography sizes={2.5} colors={"white"} bolds={400}>
            Getting Started with Laravel 9
          </Typography>
          <br />
          <Typography sizes={1} colors={"white"} bolds={100}>
            Mentor
          </Typography>
          <div className="mentorDiv">
            <div>
              <Typography sizes={1.3} colors={"white"} bolds={600}>
                William Hartono
              </Typography>
              <Typography sizes={1} colors={"white"}>
                Developer at Widya Edu
              </Typography>
            </div>
            <div>
              <Typography sizes={1.3} colors={"white"} bolds={600}>
                William Hartono
              </Typography>
              <Typography sizes={1} colors={"white"}>
                Developer at Widya Edu
              </Typography>
            </div>
          </div>
        </div>
        <img src={girlPic} className="girlPicDetail"></img>
      </div>

      <div className="productDetailBody">
        <div className="detailChooser">
          <button onClick={toggleMateri} className={materi}>
            Materi
          </button>
          <button onClick={toggleFasilitas} className={fasilitas}>
            Fasilitas
          </button>
          <div className="priceDetail">
            <Typography colors={"#6D7175)"}>Rp. 125.000</Typography>
            <Typography colors={"#FF6A28"}>Rp. 99.000</Typography>
          </div>
          <Link to={"/checkout"} className="daftarLink">
            Daftar Kelas
          </Link>
        </div>
        {materi === "bgOn" ? materiTab() : fasilitasTab()}
      </div>

      <div className="siapBergabung">
        <Typography sizes={2} colors={"white"}>
          Sudah siap bergabung?
        </Typography>
        <br />
        <Link to={"/checkout"} className="daftarLink">
          Daftar Kelas
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
