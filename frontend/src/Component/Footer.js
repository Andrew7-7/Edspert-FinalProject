import React from "react";
import Typography from "./Typography";
const Footer = () =>{
    return (
      <div className="footerContainer">
        <div className="upperFooter">
          <div className="leftUpper">
            <Typography sizes={0.7}>TAGLINE edspert disini</Typography>
            <br></br>
            <Typography sizes={0.7}>
              Jl. Watugede No. 58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten
              Sleman, Daerah Istimewa Yogyakarta 55581
            </Typography>
          </div>

          <div className="rightUpper">
            <ul >
              Program
              <li >Online Course</li>
              <li >Mini bootcamp</li>
              <li >Bootcamp</li>
            </ul>
            <ul>
              Bidang ilmu
              <li >Digital marketing</li>
              <li >Product management</li>
              <li >English</li>
              <li >Programming</li>
            </ul>
            <ul>
              Tentang edspert
              <li>Bantuan</li>
              <li>Kontak kami</li>
              <li>Media sosial</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Footer;