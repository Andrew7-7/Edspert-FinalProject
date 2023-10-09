import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Typography from "../Component/Typography";
import { LeftArrow, ProfilePesanan } from "../Component/smallComponent";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import cardImage from "../Images/cardImage.png";
import mandiriPic from "../Images/mandiri.png";
import bcaPic from "../Images/bca.png";
import questionMark from "../Images/questionMark.png";
const InstruksiBayar = () => {
  const [instruksi, setInstruksi] = useState("ATM");

  const AtmInstruksi = () => {
    return (
      <Typography sizes={1}>
        1. Masukkan kartu ke mesin ATM Mandiri. <br />
        2. Pilih Bahasa. Masukkan PIN ATM. <br />
        3. Pilih menu transaksi lainnya. <br />
        4. Pilih menu “Transfer”, lalu pilih ke rek Mandiri. <br />
        5. Masukkan no rekening yang dituju. <br />
        6. Masukkan nominal jumlah uang yang akan di transfer. <br />
        7. Layar ATM akan menampilkan data transaksi anda, jika data sudah benar
        pilih “YA”. <br />
        8. Selesai, struk akan keluar dari mesin ATM.
      </Typography>
    );
  };

  const InternetInstruksi = () => {
    return (
      <Typography sizes={1}>
        1. Pergi ke Internet Banking. <br />
        2. Pilih Bahasa. <br />
        3. Pilih menu transaksi lainnya. <br />
        4. Pilih menu “Transfer”, lalu pilih ke rek Mandiri. <br />
        5. Masukkan no rekening yang dituju. <br />
        6. Masukkan nominal jumlah uang yang akan di transfer. <br />
        7. Masukkan PIN.
      </Typography>
    );
  };

  const MBankingInstruksi = () => {
    return (
      <Typography sizes={1}>
        1. Pergi ke M-Banking. <br />
        2. Pilih Bahasa. <br />
        3. Pilih menu transaksi lainnya. <br />
        4. Pilih menu “Transfer”, lalu pilih ke rek Mandiri. <br />
        5. Masukkan no rekening yang dituju. <br />
        6. Masukkan nominal jumlah uang yang akan di transfer. <br />
        7. Masukkan PIN.
      </Typography>
    );
  };

  const [text, setText] = useState("");
  const salinText = () => {
    setText("137000299089");
    navigator.clipboard.writeText(text);
  };

  const location = useLocation();
  // console.log(location);
  const simply = location.state.course;
  const { metodeBayar } = useParams();
  console.log(metodeBayar);
  const navigate = useNavigate();
  const {bankImage} = useParams();
  const ShowPic = ()=>{
    if(bankImage==="none"){
      return <img src={questionMark} className="bankImage"/>
    }else if(bankImage==="bca"){
      return <img src={bcaPic} className="bankImage" />;
    }else{
      return <img src={mandiriPic} className="bankImage" />;
    }
  }

  return (
    <div>
      <Navbar />
      <div className="backDiv">
        <LeftArrow link={-1} state={simply} />
        <div
          style={{ color: "#6D7175", fontSize: "0.9vw", cursor: "pointer" }}
          onClick={() => {
            navigate(-1, { state: { course: simply } });
          }}
        >
          &nbsp;Checkout&nbsp;&gt;
        </div>
        <Typography colors={"#1097E7"} sizes={0.9}>
          &nbsp;Instruksi Bayar
        </Typography>
      </div>
      <div className="checkoutTitle">Instruksi Bayar</div>

      <div className="instruksiBody">
        <div className="leftInstruksiBody">
          <ProfilePesanan
            image={cardImage}
            title={simply.title}
            subtitle={simply.detail}
            batch={simply.batch}
            mentor={simply.mentor}
          />
          <br />
          <Typography sizes={1.2} bolds={700}>
            Metode Pembayaran
          </Typography>
          <br />
          <Typography sizes={1} colors={"#6D7175"}>
            {metodeBayar === "Silahkan Pilih Metode Pembayaran"
              ? metodeBayar + " pada halaman checkout"
              : metodeBayar}
          </Typography>
          <br />
          <div className="rekDiv">
            <ShowPic />
            &nbsp;&nbsp;&nbsp;
            <div>
              <div className="salinDiv">
                <Typography sizes={0.9} bolds={600}>
                  No Rek. 137000299089
                </Typography>
                &nbsp;&nbsp;
                <div
                  onClick={salinText}
                  className="salinDiv"
                  style={{ cursor: "pointer" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                  >
                    <rect
                      x="3.5"
                      y="2.5"
                      width="9"
                      height="12"
                      rx="1.5"
                      stroke="#1097E7"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="9"
                      height="12"
                      rx="1.5"
                      stroke="#1097E7"
                    />
                  </svg>
                  <Typography sizes={0.9} colors={"#1097E7"}>
                    Salin
                  </Typography>
                </div>
              </div>
              <Typography sizes={0.9} colors={"#6D7175"}>
                a.n. PT Widya Kreasi Bangsa
              </Typography>
            </div>
          </div>
          <br />
          <Typography sizes={0.9} colors={"#6D7175"}>
            Nominal yang harus dibayar senilai
          </Typography>
          <Typography sizes={1.5} bolds={600}>
            Rp. 400.000
          </Typography>
        </div>

        <div className="rightInstruksiBody">
          <Typography sizes={1.3} bolds={700}>
            Instruksi Pembayaran
          </Typography>

          <div className="instruksiChooser">
            <div
              style={{ cursor: "pointer" }}
              className={instruksi === "ATM" ? "text-xl nyala" : "text-xl"}
              onClick={() => setInstruksi("ATM")}
            >
              ATM
            </div>
            <div
              style={{ cursor: "pointer" }}
              className={
                instruksi === "Internet Banking" ? "text-xl nyala" : "text-xl"
              }
              onClick={() => setInstruksi("Internet Banking")}
            >
              Internet Banking
            </div>
            <div
              style={{ cursor: "pointer" }}
              className={
                instruksi === "M-Banking" ? "text-xl nyala" : "text-xl"
              }
              onClick={() => setInstruksi("M-Banking")}
            >
              M-Banking
            </div>
          </div>
          {instruksi === "ATM" && <AtmInstruksi />}
          {instruksi === "Internet Banking" && <InternetInstruksi />}
          {instruksi === "M-Banking" && <MBankingInstruksi />}
        </div>
      </div>
      <div className="bottomInstruksi">
        Sudah Transfer? Lakukan verifikasi pembayaran segera!
        <Link to={"/"} className="verifikasiButton">
          Verifikasi Pembayaran
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default InstruksiBayar;
