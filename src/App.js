import React, { useState, useEffect } from "react";
import { Leaf, Zap, Shield, TrendingUp, Droplets, Activity, Users, ChevronDown, Menu, X, MessageSquare, Mail, Github, Sun, Moon} from "lucide-react";

export default function AgriSmartWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveSection(id);
  };

  const theme = {
    bg: darkMode ? "#0A0E14" : "#FFFFFF",
    bgSecondary: darkMode ? "#151B23" : "#F8FAFB",
    text: darkMode ? "#F5F7FA" : "#0A0E14",
    textMuted: darkMode ? "#8B92A0" : "#64748B",
    border: darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
    cardBg: darkMode ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.8)",
    gradientFrom: "#10B981",
    gradientTo: "#14B8A6",
  };

  const features = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Monitoring Real-Time",
      desc: "Pantau pH, EC, suhu, dan level air secara langsung setiap detik dengan sistem yang amanah dan teliti",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Analisis AI Cerdas",
      desc: "Memanfaatkan teknologi kecerdasan buatan sebagai alat bantu dalam mengambil keputusan terbaik",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Kontrol Penuh di Tangan",
      desc: "Sistem semi-otomatis yang menempatkan manusia sebagai pengambil keputusan utama",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Dosing Presisi",
      desc: "Pemberian nutrisi dan air yang efisien, mencegah pemborosan sumber daya",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analitik Lengkap",
      desc: "Visualisasi data komprehensif untuk evaluasi dan perbaikan berkelanjutan",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mudah Digunakan",
      desc: "Interface yang ramah untuk semua kalangan, dari pemula hingga ahli",
    },
  ];

  const technologies = [
    { name: "ESP32", category: "Mikrokontroler" },
    { name: "Sensor pH", category: "HH-828" },
    { name: "Sensor EC", category: "TDS V1.0" },
    { name: "Kran Otomatis", category: "Pengisi Air" },
    { name: "DHT22", category: "Suhu & Kelembapan" },
    { name: "Pompa Peristaltik", category: "Dosing Otomatis" },
    { name: "Bot Telegram", category: "Kontrol Hidroponik" },
  ];

  const stats = [
    { value: "24/7", label: "Pemantauan" },
    { value: "97%", label: "Akurasi" },
    { value: "50%", label: "Hemat Air" },
    { value: "0", label: "Human Error" },
  ];

  const team = [
    {
      name: "M. Azzam Mustafidh",
      role: "Project Leader",
      initial: "AM",
      desc: "Memimpin pengembangan proyek Agri Smart",
    },
    {
      name: "Imam Daffa",
      role: "IoT Engineer",
      initial: "ID",
      desc: "Mengembangkan hardware & software",
    },
    {
      name: "Ihsan Aviandy",
      role: "Documentation",
      initial: "IA",
      desc: "Mendokumentasikan perjalanan TDA & projek",
    },
    {
      name: "Rifat Zaidan",
      role: "Programmer Assistant",
      initial: "RZ",
      desc: "Membantu project leader & IoT engineer",
    },
    {
      name: "Reinevi Abil",
      role: "Designer",
      initial: "RA",
      desc: "Membuat kebutuhan desain",
    },
    {
      name: "Muhammad Dzulfiqar",
      role: "Logistic",
      initial: "MD",
      desc: "Bertanggung jawab atas kebutuhan logistik",
    },
  ];

  return (
    <div
      style={{
        background: theme.bg,
        color: theme.text,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        letterSpacing: "-0.02em",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.6s ease-out forwards; }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        .stagger-5 { animation-delay: 0.5s; opacity: 0; }
        .stagger-6 { animation-delay: 0.6s; opacity: 0; }
        
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none; }
        }
      `}</style>

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 50,
          background: scrollY > 50 ? (darkMode ? "rgba(10, 14, 20, 0.8)" : "rgba(255, 255, 255, 0.8)") : "transparent",
          backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
          borderBottom: scrollY > 50 ? `1px solid ${theme.border}` : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Leaf style={{ width: "24px", height: "24px", color: "white" }} />
            </div>
            <span style={{ fontSize: "20px", fontWeight: 700, background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Agri-Smart</span>
          </div>

          {/* Desktop Menu */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden-mobile">
            {["beranda", "tentang", "fitur", "teknologi", "tim"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: activeSection === item ? theme.gradientFrom : theme.textMuted,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textTransform: "capitalize",
                  transition: "color 0.2s ease",
                }}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                width: "40px",
                height: "40px",
                background: theme.cardBg,
                border: `1px solid ${theme.border}`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                color: theme.text,
              }}
            >
              {darkMode ? <Sun style={{ width: "20px", height: "20px", color: theme.text }} /> : <Moon style={{ width: "20px", height: "20px", color: theme.text }} />}
            </button>
            <button
              style={{
                padding: "10px 24px",
                background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
                borderRadius: "99px",
                fontSize: "14px",
                fontWeight: 600,
                color: "white",
                border: "none",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              <span style={{ position: "relative", zIndex: 1 }}>Mulai Sekarang</span>
              <div
                style={{
                  position: "absolute",
                  top: "-50%",
                  left: "-50%",
                  width: "200%",
                  height: "200%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  animation: "shimmer 3s infinite linear",
                }}
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: theme.text }} className="show-mobile">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              background: darkMode ? "rgba(10, 14, 20, 0.95)" : "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              borderTop: `1px solid ${theme.border}`,
            }}
          >
            <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {["beranda", "tentang", "fitur", "teknologi", "tim"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  style={{
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: theme.textMuted,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textTransform: "capitalize",
                  }}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px",
                  background: theme.cardBg,
                  border: `1px solid ${theme.border}`,
                  borderRadius: "12px",
                  cursor: "pointer",
                  color: theme.text,
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {darkMode ? <Sun style={{ width: "20px", height: "20px", color: theme.text }} /> : <Moon style={{ width: "20px", height: "20px", color: theme.text }} />}
                <span>{darkMode ? "Mode Terang" : "Mode Gelap"}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="beranda"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.6 }}>
          <div
            style={{
              position: "absolute",
              top: "25%",
              left: "25%",
              width: "400px",
              height: "400px",
              background: `${theme.gradientFrom}33`,
              borderRadius: "50%",
              filter: "blur(80px)",
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "25%",
              right: "25%",
              width: "400px",
              height: "400px",
              background: `${theme.gradientTo}33`,
              borderRadius: "50%",
              filter: "blur(80px)",
              animation: "float 8s ease-in-out infinite",
              animationDelay: "1s",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: "1280px",
            margin: "0 auto",
            textAlign: "center",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="animate-scaleIn" style={{ marginBottom: "32px", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
                  filter: "blur(40px)",
                  opacity: 0.5,
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  position: "relative",
                  width: "128px",
                  height: "128px",
                  background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
                  borderRadius: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 20px 60px rgba(16, 185, 129, 0.3)",
                }}
              >
                <Leaf style={{ width: "64px", height: "64px", color: "white" }} />
              </div>
            </div>
          </div>

          <h1
            className="animate-fadeInUp"
            style={{
              fontSize: "clamp(36px, 8vw, 56px)",
              fontWeight: 800,
              marginBottom: "24px",
              lineHeight: 1.2,
            }}
          >
            Pertanian <span style={{ background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Berkah</span>
            <br />
            dengan Teknologi Amanah
          </h1>

          <p
            className="animate-fadeInUp stagger-1"
            style={{
              fontSize: "clamp(18px, 3vw, 24px)",
              color: theme.textMuted,
              marginBottom: "24px",
              maxWidth: "800px",
              margin: "0 auto 24px",
              lineHeight: 1.6,
            }}
          >
            Sistem hidroponik pintar yang menggabungkan teknologi IoT & AI dengan nilai-nilai Islam untuk mengelola sumber daya dengan bijaksana dan meningkatkan ketahanan pangan umat.
          </p>

          <div
            className="animate-fadeInUp stagger-2"
            style={{
              padding: "16px 24px",
              background: darkMode ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.05)",
              border: `1px solid ${theme.gradientFrom}40`,
              borderRadius: "16px",
              maxWidth: "700px",
              margin: "0 auto 48px",
              fontSize: "14px",
              fontStyle: "italic",
              color: theme.textMuted,
            }}
          >
            "Dan Dialah yang menurunkan air dari langit, lalu Kami tumbuhkan dengan air itu segala macam tumbuh-tumbuhan..." <br />
            <span style={{ color: theme.gradientFrom, fontWeight: 600 }}>— QS. Al-An'am: 99</span>
          </div>

          <div className="animate-fadeInUp stagger-3" style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
              <button
                onClick={() => scrollToSection("tentang")}
                style={{
                  padding: "16px 32px",
                  background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
                  borderRadius: "99px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: `0 8px 32px ${theme.gradientFrom}40`,
                  transition: "all 0.3s ease",
                }}
              >
                <span style={{ position: "relative", zIndex: 1 }}>Pelajari Lebih Lanjut</span>
                <div
                  style={{
                    position: "absolute",
                    top: "-50%",
                    left: "-50%",
                    width: "200%",
                    height: "200%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    animation: "shimmer 3s infinite linear",
                  }}
                />
              </button>
              <button
                style={{
                  padding: "16px 32px",
                  background: theme.cardBg,
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${theme.border}`,
                  borderRadius: "99px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: theme.text,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Lihat Demo
              </button>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "32px",
              left: "50%",
              transform: "translateX(-50%)",
              animation: "float 2s ease-in-out infinite",
            }}
          >
            <ChevronDown style={{ width: "24px", height: "24px", color: theme.textMuted }} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="animate-fadeIn" style={{ padding: "80px 24px", borderTop: `1px solid ${theme.border}`, borderBottom: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "32px" }}>
          {stats.map((stat, i) => (
            <div key={i} className={`animate-scaleIn stagger-${i + 1}`} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(36px, 6vw, 48px)",
                  fontWeight: 800,
                  background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "14px", color: theme.textMuted }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="animate-fadeIn" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "64px", alignItems: "center" }}>
            <div className="animate-slideInLeft">
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: `${theme.gradientFrom}20`,
                  border: `1px solid ${theme.gradientFrom}40`,
                  borderRadius: "99px",
                  color: theme.gradientFrom,
                  fontSize: "14px",
                  fontWeight: 600,
                  marginBottom: "24px",
                }}
              >
                Ikhtiar Menuju Ketahanan Pangan
              </div>
              <h2 style={{ fontSize: "clamp(32px, 5vw, 40px)", fontWeight: 800, marginBottom: "24px", lineHeight: 1.2 }}>Teknologi sebagai Amanah untuk Keberkahan Pangan</h2>
              <p style={{ color: theme.textMuted, fontSize: "18px", lineHeight: 1.6, marginBottom: "32px" }}>
                Di tengah tantangan gagal panen dan krisis pangan global, Agri-Smart hadir sebagai ikhtiar berbasis teknologi yang membantu mengelola hidroponik dengan prinsip efisiensi, kehati-hatian, dan tanggung jawab atas sumber daya
                yang Allah SWT amanahkan.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Mengurangi kesalahan manusia hingga mendekati 0%",
                  "Efisiensi air & nutrisi hingga 50% sesuai prinsip tidak berlebihan",
                  "Monitoring amanah 24/7 dengan sistem yang terpercaya",
                  "AI sebagai alat bantu, manusia tetap pengambil keputusan",
                ].map((item, i) => (
                  <div key={i} className={`animate-slideInLeft stagger-${i + 1}`} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        background: `${theme.gradientFrom}20`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <div style={{ width: "8px", height: "8px", background: theme.gradientFrom, borderRadius: "50%" }} />
                    </div>
                    <span style={{ color: theme.text }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slideInRight" style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${theme.gradientFrom}20, ${theme.gradientTo}20)`,
                  borderRadius: "24px",
                  filter: "blur(60px)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  background: theme.cardBg,
                  backdropFilter: "blur(40px)",
                  border: `1px solid ${theme.border}`,
                  borderRadius: "24px",
                  padding: "32px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                  <div style={{ height: "16px", background: `linear-gradient(90deg, ${theme.gradientFrom}40, transparent)`, borderRadius: "99px", width: "75%" }} />
                  <div style={{ height: "16px", background: `linear-gradient(90deg, ${theme.gradientTo}40, transparent)`, borderRadius: "99px", width: "100%" }} />
                  <div style={{ height: "16px", background: `linear-gradient(90deg, ${theme.gradientFrom}40, transparent)`, borderRadius: "99px", width: "60%" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div
                    style={{
                      background: darkMode ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.6)",
                      backdropFilter: "blur(20px)",
                      borderRadius: "16px",
                      padding: "20px",
                      border: `1px solid ${theme.gradientFrom}40`,
                    }}
                  >
                    <div style={{ fontSize: "28px", fontWeight: 700, color: theme.gradientFrom, marginBottom: "4px" }}>pH 6.2</div>
                    <div style={{ fontSize: "12px", color: theme.textMuted }}>Optimal</div>
                  </div>
                  <div
                    style={{
                      background: darkMode ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.6)",
                      backdropFilter: "blur(20px)",
                      borderRadius: "16px",
                      padding: "20px",
                      border: `1px solid ${theme.gradientTo}40`,
                    }}
                  >
                    <div style={{ fontSize: "28px", fontWeight: 700, color: theme.gradientTo, marginBottom: "4px" }}>EC 950</div>
                    <div style={{ fontSize: "12px", color: theme.textMuted }}>µS/cm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="animate-fadeIn" style={{ padding: "120px 24px", background: darkMode ? "linear-gradient(180deg, #0A0E14, #10141D)" : "linear-gradient(180deg, #FFFFFF, #F8FAFB)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "8px 16px",
                background: `${theme.gradientFrom}20`,
                border: `1px solid ${theme.gradientFrom}40`,
                borderRadius: "99px",
                color: theme.gradientFrom,
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Fitur Unggulan
            </div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 40px)", fontWeight: 800, marginBottom: "16px" }}>
              Teknologi yang Membawa <br />
              <span style={{ background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Manfaat Nyata</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", justifyItems: "center" }}>
            {features.map((feature, i) => (
              <div
                key={i}
                className={`animate-scaleIn stagger-${(i % 3) + 1}`}
                style={{
                  width: "100%",
                  maxWidth: "380px",
                  position: "relative",
                  background: theme.cardBg,
                  backdropFilter: "blur(40px)",
                  border: `1px solid ${theme.border}`,
                  borderRadius: "20px",
                  padding: "32px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.02)";
                  e.currentTarget.style.borderColor = `${theme.gradientFrom}80`;
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 20px 60px ${theme.gradientFrom}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = theme.cardBg;
                  e.currentTarget.style.borderColor = theme.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: `linear-gradient(135deg, ${theme.gradientFrom}20, ${theme.gradientTo}20)`,
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    color: theme.gradientFrom,
                    transition: "transform 0.3s ease",
                  }}
                >
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>{feature.title}</h3>
                <p style={{ color: theme.textMuted, lineHeight: 1.6, fontSize: "15px" }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="teknologi" className="animate-fadeIn" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "8px 16px",
                background: `${theme.gradientFrom}20`,
                border: `1px solid ${theme.gradientFrom}40`,
                borderRadius: "99px",
                color: theme.gradientFrom,
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Teknologi
            </div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 40px)", fontWeight: 800, marginBottom: "16px" }}>
              Komponen <span style={{ background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Berkualitas Tinggi</span>
            </h2>
            <p style={{ color: theme.textMuted, fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>Menggunakan komponen terpercaya untuk hasil yang akurat dan konsisten</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px", justifyItems: "center" }}>
            {technologies.map((tech, i) => (
              <div
                key={i}
                className={`animate-scaleIn stagger-${(i % 4) + 1}`}
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  background: theme.cardBg,
                  backdropFilter: "blur(40px)",
                  border: `1px solid ${theme.border}`,
                  borderRadius: "16px",
                  padding: "24px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${theme.gradientFrom}80`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.border;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 700, color: theme.gradientFrom, marginBottom: "4px" }}>{tech.name}</div>
                <div style={{ fontSize: "12px", color: theme.textMuted }}>{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="animate-fadeIn" style={{ padding: "120px 24px", background: darkMode ? "linear-gradient(180deg, #0A0E14, #10141D)" : "linear-gradient(180deg, #FFFFFF, #F8FAFB)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 40px)", fontWeight: 800, marginBottom: "16px" }}>
              Cara Kerja <span style={{ background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Agri-Smart</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {[
              { step: "01", title: "Sensor Membaca Data", desc: "pH, EC, suhu, dan level air dipantau dengan teliti setiap detik" },
              { step: "02", title: "ESP32 Mengolah", desc: "Data diproses dengan algoritma yang cermat dan akurat" },
              { step: "03", title: "Dashboard Menampilkan", desc: "Visualisasi data yang jelas dan mudah dipahami" },
              { step: "04", title: "AI Menganalisis", desc: "Sistem AI memberikan rekomendasi berdasarkan data" },
              { step: "05", title: "User Memutuskan", desc: "Manusia tetap sebagai pengambil keputusan akhir" },
              { step: "06", title: "Aktuator Bekerja", desc: "Sistem menjalankan perintah dengan presisi tinggi" },
            ].map((item, i) => (
              <div key={i} className={`animate-slideInLeft stagger-${(i % 3) + 1}`} style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: "64px",
                    height: "64px",
                    background: `linear-gradient(135deg, ${theme.gradientFrom}20, ${theme.gradientTo}20)`,
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    fontWeight: 800,
                    color: theme.gradientFrom,
                    border: `1px solid ${theme.gradientFrom}40`,
                    transition: "transform 0.3s ease",
                  }}
                >
                  {item.step}
                </div>
                <div
                  style={{
                    flex: 1,
                    background: theme.cardBg,
                    backdropFilter: "blur(40px)",
                    border: `1px solid ${theme.border}`,
                    borderRadius: "16px",
                    padding: "24px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ color: theme.textMuted, fontSize: "15px", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="tim" className="animate-fadeIn" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "8px 16px",
                background: `${theme.gradientFrom}20`,
                border: `1px solid ${theme.gradientFrom}40`,
                borderRadius: "99px",
                color: theme.gradientFrom,
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Tim Kami
            </div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 40px)", fontWeight: 800, marginBottom: "16px" }}>
              Kelompok <span style={{ background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Al-Jazari</span>
            </h2>
            <p style={{ color: theme.textMuted, fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>Tim TDA (Tadabbur Dream Adventure) dari Sekolah Impian yang berikhtiar untuk ketahanan pangan</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "64px", justifyItems: "center" }}>
            {team.map((member, i) => (
              <div
                key={i}
                className={`animate-scaleIn stagger-${(i % 3) + 1}`}
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  background: theme.cardBg,
                  backdropFilter: "blur(40px)",
                  border: `1px solid ${theme.border}`,
                  borderRadius: "20px",
                  padding: "32px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = `${theme.gradientFrom}80`;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${theme.gradientFrom}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = theme.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    color: "white",
                    fontSize: "24px",
                    fontWeight: 700,
                    border: `2px solid ${theme.gradientFrom}40`,
                    boxShadow: `0 8px 24px ${theme.gradientFrom}40`,
                  }}
                >
                  {member.initial}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "4px" }}>{member.name}</h3>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: theme.gradientFrom,
                    marginBottom: "12px",
                  }}
                >
                  {member.role}
                </div>
                <p style={{ fontSize: "14px", color: theme.textMuted, lineHeight: 1.5 }}>{member.desc}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: theme.cardBg,
              backdropFilter: "blur(40px)",
              border: `1px solid ${theme.border}`,
              borderRadius: "24px",
              padding: "48px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Users style={{ width: "24px", height: "24px", color: "white" }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "18px" }}>Kelompok Al-Jazari</div>
                  <div style={{ fontSize: "14px", color: theme.textMuted }}>TDA - Sekolah Impian</div>
                </div>
              </div>

              <p style={{ color: theme.textMuted, lineHeight: 1.6, fontSize: "15px" }}>
                Dengan bimbingan Ustadz Aulia dan dukungan dari Habibi Garden, STEI ITB, serta PT SEI, kami berikhtiar mengembangkan Agri-Smart sebagai kontribusi nyata menuju pertanian yang lebih berkah dan berkelanjutan.
              </p>

              <div style={{ paddingTop: "24px", borderTop: `1px solid ${theme.border}` }}>
                <div style={{ fontSize: "14px", color: theme.textMuted, fontStyle: "italic" }}>
                  "Dan janganlah kamu membuat kerusakan di muka bumi setelah (Allah) memperbaikinya." <br />
                  <span style={{ color: theme.gradientFrom, fontWeight: 600 }}>— QS. Al-A'raf: 56</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="animate-fadeIn" style={{ padding: "120px 24px", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${theme.gradientFrom}20, ${theme.gradientTo}20)`,
            filter: "blur(80px)",
          }}
        />

        <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(32px, 6vw, 48px)", fontWeight: 800, marginBottom: "24px" }}>
            Mari Bersama Membangun <br />
            <span style={{ background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Pertanian yang Berkah</span>
          </h2>
          <p style={{ fontSize: "20px", color: theme.textMuted, marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px" }}>
            Bergabunglah dalam ikhtiar transformasi pertanian Indonesia menuju sistem yang lebih efisien, amanah, dan berkelanjutan.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <button
              onClick={() => window.open("https://t.me/yourusername", "_blank")}
              style={{
                padding: "16px 32px",
                background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
                borderRadius: "99px",
                fontSize: "16px",
                fontWeight: 600,
                color: "white",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                position: "relative",
                overflow: "hidden",
                boxShadow: `0 8px 32px ${theme.gradientFrom}40`,
              }}
            >
              <MessageSquare style={{ width: "20px", height: "20px" }} />
              <span style={{ position: "relative", zIndex: 1 }}>Hubungi Kami</span>
              <div
                style={{
                  position: "absolute",
                  top: "-50%",
                  left: "-50%",
                  width: "200%",
                  height: "200%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  animation: "shimmer 3s infinite linear",
                }}
              />
            </button>
            <button
              onClick={() => window.open("#", "_blank")}
              style={{
                padding: "16px 32px",
                background: theme.cardBg,
                backdropFilter: "blur(40px)",
                border: `1px solid ${theme.border}`,
                borderRadius: "99px",
                fontSize: "16px",
                fontWeight: 600,
                color: theme.text,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Mail style={{ width: "20px", height: "20px" }} />
              Download Panduan
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${theme.border}`, padding: "48px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Leaf style={{ width: "24px", height: "24px", color: "white" }} />
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>Agri-Smart</div>
                <div style={{ fontSize: "12px", color: theme.textMuted }}>by Kelompok Al-Jazari</div>
              </div>
            </div>

            <div style={{ fontSize: "14px", color: theme.textMuted }}>© 2024 Agri-Smart. Dikembangkan dengan penuh amanah untuk ketahanan pangan Indonesia.</div>

            <div style={{ display: "flex", gap: "16px" }}>
              <button
                onClick={() => window.open("https://github.com/mustafidh08/agri-smart", "_blank")}
                style={{
                  width: "40px",
                  height: "40px",
                  background: theme.cardBg,
                  border: `1px solid ${theme.border}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  color: theme.text,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme.gradientFrom;
                  e.currentTarget.style.borderColor = theme.gradientFrom;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = theme.cardBg;
                  e.currentTarget.style.borderColor = theme.border;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Github style={{ width: "20px", height: "20px" }} />
              </button>
              <button
                onClick={() => (window.location.href = "mailto:azzammustafidh@gmail.com")}
                style={{
                  width: "40px",
                  height: "40px",
                  background: theme.cardBg,
                  border: `1px solid ${theme.border}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  color: theme.text,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme.gradientFrom;
                  e.currentTarget.style.borderColor = theme.gradientFrom;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = theme.cardBg;
                  e.currentTarget.style.borderColor = theme.border;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Mail style={{ width: "20px", height: "20px" }} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
