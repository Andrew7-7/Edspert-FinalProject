import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Typography from "../Component/Typography";
import { LeftArrow, ProfilePesanan } from "../Component/smallComponent";
import { Link } from "react-router-dom";
import mandiriPic from "../Images/mandiri.png";
import bcaPic from "../Images/bca.png";
import cardImage from "../Images/cardImage.png";

const MetodePembayaranChild = ({
  children,
  title,
  pic1,
  pic2,
  title1,
  title2,
}) => {
  const [showChildren, setShowChildren] = useState(true);

  const toggleChildren = () => {
    setShowChildren(!showChildren);
  };

  return (
    <div>
      <Typography bolds={600} sizes={1}>
        {title}
      </Typography>
      <div className="flex">
        <Typography colors={"#6D7175"} sizes={0.85}>
          {showChildren ? children : null}
        </Typography>
        <svg
          onClick={toggleChildren}
          style={{
            cursor: "pointer",
            transform: showChildren ? "rotate(0deg)" : "rotate(180deg)",
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="3%"
          height="1%"
          viewBox="0 0 14 8"
          fill="none"
        >
          <path
            d="M13 6.66634L7 1.33301L1 6.66634"
            stroke="#131313"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <br />
      <div className="chooserDiv">
        <div className="chooserChild">
          <img src={pic1} className="chooserPic"></img>
          <Typography>{title1}</Typography>
          <input type="radio" name="metode" value={title1}></input>
        </div>
        <div className="chooserChild">
          <img src={pic2} className="chooserPic"></img>
          <Typography>{title2}</Typography>
          <input type="radio" name="metode" value={title2}></input>
        </div>
      </div>
    </div>
  );
};

const Harga = ({ title, price, total }) => {
  return (
    <div className="hargaDiv">
      <Typography sizes={1} bolds={total === true ? 600 : 0}>
        {title}
      </Typography>
      <Typography sizes={1} bolds={total === true ? 600 : 0}>
        Rp. {price}
      </Typography>
    </div>
  );
};

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <div className="backDiv">
        <LeftArrow link={"/detail"} />
        <Typography colors={"#1097E7"} sizes={"0.9"}>
          &nbsp;Checkout&nbsp;
        </Typography>
        <Link
          to={"/instruksibayar"}
          style={{ color: "#6D7175", fontSize: "0.9vw" }}
        >
          &gt; Instruksi Bayar
        </Link>
      </div>
      <div className="checkoutTitle">Checkout</div>
      <div className="checkoutBody">
        <div className="metodePembayaran">
          <Typography sizes={1.2} bolds={700}>
            Pilih Metode Pembayaran
          </Typography>
          <br />
          <MetodePembayaranChild
            pic1={mandiriPic}
            pic2={bcaPic}
            title1={"Bank Transfer ke Rek Bank Mandiri"}
            title2={"Bank Transfer ke Rek Bank BCA"}
            title={"Bank Transfer (verifikasi manual)"}
          >
            Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar ini
            memerlukan verifikasi pembayaran manual melalui Whatsapp
          </MetodePembayaranChild>
          <br />
          <MetodePembayaranChild
            pic1={mandiriPic}
            pic2={bcaPic}
            title1={"Virtual Account Mandiri"}
            title2={"Virtual Account BCA"}
            title={"Virtual Account (verifikasi otomatis)"}
          >
            Pembayaran melalui virtual account berbagai bank. Metode bayar ini
            akan diverifikasi secara otomatis.
          </MetodePembayaranChild>
        </div>

        <div className="ringkasanPesanan">
          <Typography sizes={1.2} bolds={700}>
            Ringkasan Pesanan
          </Typography>
          <br />
          <ProfilePesanan
            image={cardImage}
            title={"Programming Laravel"}
            subtitle={"Getting Started with Laravel 9"}
            batch={"September 2022"}
            mentor={"William Hartono, Farel Prayoga"}
          />
          <br />
          <Typography sizes={1} bolds={600}>
            Kode Promo
          </Typography>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Masukkan kode promo"
              className="inputPromo"
            ></input>
            &nbsp;
            <button className="terapkanButton">Terapkan</button>
          </div>
          <br />
          <Typography sizes={1} bolds={600}>
            Metode Pembayaran
          </Typography>
          <Typography>Bank Transfer (verifikasi manual)-Mandiri</Typography>
          <br />
          <Typography sizes={1} bolds={600}>
            Ringkasan Pembayaran
          </Typography>
          <div className="ringkasanDiv">
            <Harga title={"Harga Kelas"} price={"700.000"}></Harga>
            <Harga title={"Potongan"} price={"200.000"}></Harga>
            <Harga title={"Promo"} price={"-"}></Harga>
            <Harga title={"Kode Unik"} price={"100.000"}></Harga>
          </div>

          <Harga
            title={"Total Pembayaran"}
            price={"400.000"}
            total={true}
          ></Harga>

          <div className="mt-6 mb-10 flex">
            <Typography sizes={0.9}>
              Dengan menekan tombol <b>Bayar</b> kamu telah menyetujui syarat
              dan ketentuan yang berlaku, silahkan baca kembali{" "}
              <Link className="text-blue-500 border-b border-blue-500">
                <b>Syarat & ketentuan</b>
              </Link>{" "}
              yang berlaku.
            </Typography>
          </div>

          <div className="ringkasanBottom">
            <Link to={"/detail"}>&lt; Batalkan</Link>
            <Link to={"/instruksibayar"} className="bayarButton">
              Bayar
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
