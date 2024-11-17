const WhatsAppIcon = () => {
  const phoneNumber = "+923253344552";
  const message = encodeURIComponent(
    "Hello, I am interested in your services!"
  );
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        textDecoration: "none",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src="https://img.icons8.com/color/48/whatsapp.png"
        alt="WhatsApp Icon"
        style={{ width: "35px", height: "35px" }}
      />
    </a>
  );
};

export default WhatsAppIcon;
