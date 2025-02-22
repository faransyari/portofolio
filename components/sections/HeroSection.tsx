import { FlipWords } from "../ui/flip-words";
import Image from "next/image";
import useAos from "../hooks/useAos"; // Import the AOS hook


export default function HeroSection() {
  // Initialize AOS
  useAos();
  return (
    <section

      id="home"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        padding: "2rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          background: "transparent",
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          maxWidth: "1240px",
          width: "100%",
          padding: "2rem",
          border: "none",
        }}
      >
        {/* Profile Picture */}
        <div 
          data-aos="fade-right"
          style={{ 
            marginRight: "2rem", 
            flexShrink: 0, 
            width: "250px", 
            height: "250px", 
            position: "relative",
            borderRadius: "50%",
            overflow: "hidden",
            border: "5px solid #82b1ff"
          }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            width={250}
            height={250}
            style={{
              objectFit: "cover",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>


        {/* Text Section */}
        <div 
        >
          <p
            data-aos="fade-left"
            style={{
              color: "#b0c4de",
              fontSize: "2.5rem",
              lineHeight: "4rem",
            }}
          >
            My name is{" "}
            <span
              style={{
            fontWeight: "bold",
            color: "#82b1ff",
            fontSize: "2.8rem",
              }}
            >
              Firlandi Althaf Ansyari
            </span>
            .
            <span style={{ display: "inline-block" }}>
              <FlipWords
            words={["Full Stack Developer", "Tech Enthusiast", "Data Engineer"]}
            duration={3000}
            className="font-bold text-blue-400"
              />
            </span>
          </p>

          {/* Social Media Buttons */}
          <div 
            data-aos="fade-up"
            style={{ 
              display: "flex", 
              gap: "1rem", 
              marginTop: "2rem",
              }}>
        <a
          href="https://linkedin.com/in/firlandi"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
          style={{ backgroundColor: "#0077b5" }} 
        >
          <img src="/images/linkedin-icon.png" alt="LinkedIn" width={30} height={30} />
        </a>

        <a
          href="https://github.com/faransyari"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
          style={{ backgroundColor: "#333" }} 
        >
          <img src="/images/github-icon.png" alt="GitHub" width={30} height={30} />
        </a>

        <a
          href="https://instagram.com/firlandiansyari"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
          style={{ backgroundColor: "#E1306C" }}
        >
          <img src="/images/instagram-icon.png" alt="Instagram" width={30} height={30} />
        </a>
          </div>
        </div>
      </div>

      {/* CSS for Monochrome Buttons */}
      <style jsx>{`
        .social-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: white;
          text-decoration: none;
          transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
        }

        .social-button:hover {
          transform: scale(1.1); 
          background: rgba(130, 177, 255, 0.2); 
        }

        img {
            height: 30px;
            width: 30px;
          transition: filter 0.2s ease-in-out;
        }

        .social-button:hover img {
          filter: grayscale(0%) brightness(100%); 
        }

        
      `}</style>
    </section>
  );
}
