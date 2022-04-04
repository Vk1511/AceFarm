import React from "react";
import {
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "./Footer.css";

function Footer() {
  return (
    <>
    <div className="footer_container">
      <div className="footer_about">
        <div className="footer_head"></div>
        ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo
        tempore doloremque reprehenderit, optio iste commodi cum voluptatem?
        Facilis nobis iste quasi modi ratione, sapiente earum pariatur corrupti
        molestias placeat.
      </div>
      <div className="footer_explor footer_section">
        <div>
          <div className="footer_head">Explore</div>
          <div className="homeproduct_title_lin" />

          <div className="footer_content">
            <ul>
              <li>About Us</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_social_media footer_section">
        <div>
          <div className="footer_head">Follow Us</div>
          <div className="homeproduct_title_lin" />

          <div className="footer_content">
            <ul>
              <li>
                <InstagramOutlined
                  style={{
                    fontSize: "1.3rem",
                    paddingRight: ".3rem",
                    color: "#8a3ab9",
                  }}
                />{" "}
                Instagram
              </li>
              <li>
                <FacebookOutlined
                  style={{
                    fontSize: "1.3rem",
                    paddingRight: ".3rem",
                    color: "#4267B2",
                  }}
                />{" "}
                Facebook
              </li>
              <li>
                <WhatsAppOutlined
                  style={{
                    fontSize: "1.3rem",
                    paddingRight: ".3rem",
                    color: "#25D366",
                  }}
                />{" "}
                WhatsApp
              </li>
              <li>
                <YoutubeOutlined
                  style={{
                    fontSize: "1.3rem",
                    paddingRight: ".3rem",
                    color: "#FF0000",
                  }}
                />{" "}
                Youtube
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_address footer_section">
        <div>
          <div className="footer_head">Get In Touch</div>
          <div className="homeproduct_title_lin" />

          <div className="footer_content">
            <ul>
              <li>
                <div className="get_in_touch">
                  <div>
                    <MailOutlined
                      style={{
                        fontSize: "1.3rem",
                        paddingRight: ".3rem",
                        color: "#4285F4",
                      }}
                    />
                  </div>
                  <div>Email: panchmoolorganics.help@gmail.com</div>
                </div>
              </li>
              <li>
                <div className="get_in_touch">
                  <div>
                    <PhoneOutlined
                      style={{
                        fontSize: "1.3rem",
                        paddingRight: ".3rem",
                        color: "#14A700",
                      }}
                    />
                  </div>
                  <div>Phone: +91-12345678991</div>
                </div>
              </li>
              <li>
                <div className="get_in_touch">
                  <div>
                    <HomeOutlined
                      style={{
                        fontSize: "1.3rem",
                        paddingRight: ".3rem",
                        color: "#04588C",
                      }}
                    />
                  </div>
                  <div>
                    Address: 387/45, <br />
                    Ananda Society,
                    <br /> Ahmedabad <br /> Gujarat - 380015
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_copy common_flex linear_back">© Copyright The Panch Organics. All Rights Reserved</div>
    </>
  );
}

export default Footer;
