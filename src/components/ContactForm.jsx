import React from "react";
import WhatsAppIcon from "./Whatsapp";

const ContactForm = () => {
  return (
    <div className="contact_form-page">
      <div className="container container-menu">
        <div className="row">
          <div className="contact-form">
            <form
              id="contact-form"
              method="POST"
              action="https://blackberrybd.com/creative-soft/mystudio/mail.php"
            >
              <div className="contact_form-row">
                <div className="contact_form-single">
                  <label htmlFor="id_name" className="form_label">
                    {" "}
                    Your name <span className="label_start">*</span>
                  </label>
                  <div className="form-input__input">
                    <span className="boxed-input  ">
                      <span className="boxed-input__wrapper">
                        <input
                          type="text"
                          name="name"
                          className="boxed-input__input input"
                          autoComplete="off"
                          required=""
                          id="id_name"
                        />
                        <span className="boxed-input__box">
                          <span className="boxed-input__side boxed-input__side--rear"></span>
                          <span className="boxed-input__side boxed-input__side--bottom"></span>
                          <span className="boxed-input__side boxed-input__side--top"></span>
                          <span className="boxed-input__side boxed-input__side--front"></span>
                        </span>
                        <span className="boxed-input__errors"></span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="contact_form-row">
                <div className="contact_form-single">
                  <label htmlFor="id_email" className="form_label">
                    {" "}
                    Email <span className="label_start">*</span>
                  </label>
                  <div className="form-input__input">
                    <span className="boxed-input  ">
                      <span className="boxed-input__wrapper">
                        <input
                          type="text"
                          name="email"
                          className="boxed-input__input input"
                          autoComplete="off"
                          required=""
                          id="id_email"
                        />
                        <span className="boxed-input__box">
                          <span className="boxed-input__side boxed-input__side--rear"></span>
                          <span className="boxed-input__side boxed-input__side--bottom"></span>
                          <span className="boxed-input__side boxed-input__side--top"></span>
                          <span className="boxed-input__side boxed-input__side--front"></span>
                        </span>
                        <span className="boxed-input__errors"></span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="contact_form-single">
                  <label htmlFor="id_phn" className="form_label">
                    {" "}
                    Phone <span className="label_start">*</span>
                  </label>
                  <div className="form-input__input">
                    <span className="boxed-input  ">
                      <span className="boxed-input__wrapper">
                        <input
                          type="text"
                          name="phone"
                          className="boxed-input__input input"
                          autoComplete="off"
                          required=""
                          id="id_phn"
                        />
                        <span className="boxed-input__box">
                          <span className="boxed-input__side boxed-input__side--rear"></span>
                          <span className="boxed-input__side boxed-input__side--bottom"></span>
                          <span className="boxed-input__side boxed-input__side--top"></span>
                          <span className="boxed-input__side boxed-input__side--front"></span>
                        </span>
                        <span className="boxed-input__errors"></span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="contact_form-row">
                <div className="contact_form-single">
                  <label htmlFor="id_sms" className="form_label">
                    {" "}
                    Your Message <span className="label_start">*</span>
                  </label>
                  <div className="form-input__input">
                    <span className="boxed-input boxed-input__textarea">
                      <span className="boxed-input__wrapper">
                        <textarea
                          name="message"
                          className="boxed-input__input input input_textarea"
                          rows="10"
                          cols="40"
                          autoComplete="off"
                          required=""
                          id="id_sms"
                        ></textarea>
                        <span className="boxed-input__box">
                          <span className="boxed-input__side boxed-input__side--rear"></span>
                          <span className="boxed-input__side boxed-input__side--bottom"></span>
                          <span className="boxed-input__side boxed-input__side--top"></span>
                          <span className="boxed-input__side boxed-input__side--front"></span>
                        </span>
                        <span className="boxed-input__errors"></span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="contact_form-row">
                <div className="overly_subbtn contact_button">
                  <button type="submit" className="main_button">
                    <span className="button__label">Send Message</span>
                  </button>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      alignItems: "center",
                      justifyItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <WhatsAppIcon />
                    <p style={{ marginTop: "10px" }}>
                      DIrect contact us on Whatsapp
                    </p>
                  </div>
                </div>
              </div>
            </form>
            <div className="ajax-response"></div>
          </div>
        </div>
      </div>
      <div className="transparent-grid">
        <div className="transparent-grid__container">
          <div className="transparent-grid__row">
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
