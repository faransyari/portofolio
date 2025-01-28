import Image from "next/image";

export default function MobileNotice() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
        background: "#121212",
        color: "#b0c4de",
      }}
    >
      <Image
        src="/images/desktop-icon.png" // Replace with your desktop-only icon
        alt="Desktop Only Icon"
        width={150}
        height={150}
        style={{ marginBottom: "2rem" }}
      />
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#82b1ff" }}>
        Desktop Only
      </h1>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.8rem" }}>
        We're sorry, but this website is not yet optimized for mobile devices.
        <br />
        Please open it on a desktop for the best experience.
      </p>
    </div>
  );
}
