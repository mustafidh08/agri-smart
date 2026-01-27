import React, { useState, useEffect } from "react";
import { Leaf, Zap, Shield, TrendingUp, Droplets, Activity, Users, ChevronDown, Menu, X, MessageSquare, Mail, Github, Sun, Moon, Code, Cpu, LineChart, Wrench, BookOpen, Sparkles } from "lucide-react";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
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
      desc: "Pantau pH, EC, suhu, dan level air secara langsung setiap detik, 24 jam nonstop",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Analisis AI Cerdas",
      desc: "Kecerdasan buatan menganalisis data dan kasih rekomendasi yang gampang dipahami",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Kontrol Manual Tetap Ada",
      desc: "Sistem semi-otomatis dengan persetujuan pengguna sebelum mengambil tindakan",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Dosing Otomatis Presisi",
      desc: "Pemberian nutrisi dan air otomatis dengan tingkat akurasi tinggi",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analitik Data Lengkap",
      desc: "Visualisasi data komprehensif untuk tracking performa tanaman kamu",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mudah Digunakan",
      desc: "Interface intuitif dan user-friendly, cocok untuk pemula hingga profesional",
    },
  ];

  const technologies = [
    { name: "ESP32", category: "Mikrokontroler" },
    { name: "Sensor pH", category: "HH-828" },
    { name: "Sensor EC", category: "TDS V1.0" },
    { name: "Ultrasonic", category: "HC-SR04" },
    { name: "DHT22", category: "Suhu & Kelembapan" },
    { name: "Pompa Peristaltik", category: "Dosing Otomatis" },
    { name: "Solenoid Valve", category: "Kontrol Air" },
    { name: "Bot Telegram", category: "Integrasi IoT" },
  ];

  const stats = [
    { value: "24/7", label: "Pemantauan" },
    { value: "99%", label: "Akurasi" },
    { value: "50%", label: "Hemat Air" },
    { value: "0", label: "Human Error" },
  ];

  const team = [
    { name: "Ahmad Rizki", role: "Hardware Engineer", icon: <Cpu className="w-6 h-6" />, desc: "Merancang & merakit sistem elektronik" },
    { name: "Fatimah Zahra", role: "Software Developer", icon: <Code className="w-6 h-6" />, desc: "Mengembangkan firmware & dashboard" },
    { name: "Muhammad Faiz", role: "AI/ML Specialist", icon: <Sparkles className="w-6 h-6" />, desc: "Membangun sistem rekomendasi AI" },
    { name: "Siti Aisyah", role: "Data Analyst", icon: <LineChart className="w-6 h-6" />, desc: "Menganalisis data sensor & performa" },
    { name: "Yusuf Ibrahim", role: "System Integrator", icon: <Wrench className="w-6 h-6" />, desc: "Integrasi hardware & software" },
    { name: "Khadijah Amira", role: "Documentation Lead", icon: <BookOpen className="w-6 h-6" />, desc: "Menyusun panduan & dokumentasi" },
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
      {/* SEO Meta Tags */}
      <head>
        <title>Agri-Smart - Sistem Hidroponik Pintar Berbasis IoT & AI</title>
        <meta
          name="description"
          content="Agri-Smart adalah sistem hidroponik pintar berbasis IoT dan AI yang membantu petani mengelola tanaman dengan monitoring real-time, analisis cerdas, dan otomasi presisi untuk ketahanan pangan Indonesia."
        />
        <meta name="keywords" content="hidroponik, smart farming, IoT, AI, pertanian modern, Agri-Smart, monitoring tanaman, sistem otomatis, ketahanan pangan" />
        <meta name="author" content="Kelompok Al-Jazari - Sekolah Impian" />
        <meta property="og:title" content="Agri-Smart - Sistem Hidroponik Pintar Berbasis IoT & AI" />
        <meta property="og:description" content="Transformasi pertanian Indonesia dengan teknologi monitoring real-time dan analisis AI untuk hasil panen optimal." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://agri-smart.id/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://agri-smart.id" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>

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
              }}
            >
              {darkMode ? <Sun style={{ width: "20px", height: "20px" }} /> : <Moon style={{ width: "20px", height: "20px" }} />}
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
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none; }
        }
      `}</style>

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
        {/* Animated Background */}
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
          {/* Logo */}
          <div style={{ marginBottom: "32px", display: "flex", justifyContent: "center" }}>
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
            style={{
              fontSize: "clamp(36px, 8vw, 56px)",
              fontWeight: 800,
              marginBottom: "24px",
              lineHeight: 1.2,
            }}
          >
            Pertanian <span style={{ background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Masa Depan</span>
            <br />
            Dimulai dari Sini
          </h1>

          <p
            style={{
              fontSize: "clamp(18px, 3vw, 24px)",
              color: theme.textMuted,
              marginBottom: "48px",
              maxWidth: "800px",
              margin: "0 auto 48px",
              lineHeight: 1.6,
            }}
          >
            Sistem hidroponik pintar berbasis IoT & AI yang mengubah cara bertani dengan monitoring real-time, analisis cerdas, dan otomasi presisi tinggi.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
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

          {/* Scroll Indicator - FIXED */}
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
      <section style={{ padding: "80px 24px", borderTop: `1px solid ${theme.border}`, borderBottom: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "32px" }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
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
      <section id="tentang" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "64px", alignItems: "center" }}>
            <div>
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
                Masalah yang Kami Selesaikan
              </div>
              <h2 style={{ fontSize: "clamp(32px, 5vw, 40px)", fontWeight: 800, marginBottom: "24px", lineHeight: 1.2 }}>Pertanian Modern untuk Ketahanan Pangan</h2>
              <p style={{ color: theme.textMuted, fontSize: "18px", lineHeight: 1.6, marginBottom: "32px" }}>
                Di tengah tantangan gagal panen, human error, dan krisis pangan global, Agri-Smart hadir sebagai solusi berbasis teknologi yang membantu petani mengelola hidroponik dengan lebih efisien dan presisi.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {["Mengurangi human error hingga mendekati 0%", "Hemat air & nutrisi hingga 50%", "Monitoring real-time 24/7 dari mana saja", "AI memberikan rekomendasi yang mudah dipahami"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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

            <div style={{ position: "relative" }}>
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
      <section id="fitur" style={{ padding: "120px 24px", background: darkMode ? "linear-gradient(180deg, #0A0E14, #10141D)" : "linear-gradient(180deg, #FFFFFF, #F8FAFB)" }}>
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
              Teknologi yang Bikin <br />
              <span style={{ background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Perbedaan Nyata</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {features.map((feature, i) => (
              <div
                key={i}
                style={{
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
                  e.currentTarget.style.transform = "translateY(-4px)";
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
      <section id="teknologi" style={{ padding: "120px 24px" }}>
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
            <p style={{ color: theme.textMuted, fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>Menggunakan sensor industrial-grade dan mikrokontroler terpercaya untuk hasil yang akurat dan konsisten.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px" }}>
            {technologies.map((tech, i) => (
              <div
                key={i}
                style={{
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
      <section style={{ padding: "120px 24px", background: darkMode ? "linear-gradient(180deg, #0A0E14, #10141D)" : "linear-gradient(180deg, #FFFFFF, #F8FAFB)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 40px)", fontWeight: 800, marginBottom: "16px" }}>
              Cara Kerja <span style={{ background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Agri-Smart</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {[
              { step: "01", title: "Sensor Membaca Data", desc: "pH, EC, suhu, dan level air dibaca real-time setiap detik tanpa henti" },
              { step: "02", title: "ESP32 Mengolah", desc: "Data dikirim ke ESP32 dan diproses dengan algoritma filtering canggih" },
              { step: "03", title: "Dashboard Menampilkan", desc: "Data divisualisasikan dalam grafik dan statistik yang gampang dibaca" },
              { step: "04", title: "AI Menganalisis", desc: "Kecerdasan buatan mendeteksi masalah dan bikin rekomendasi akurat" },
              { step: "05", title: "User Menyetujui", desc: "Sistem human-in-the-loop minta persetujuan sebelum bertindak" },
              { step: "06", title: "Aktuator Bekerja", desc: "Pompa dan valve menjalankan dosing otomatis sesuai rekomendasi" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
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
      <section id="tim" style={{ padding: "120px 24px" }}>
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
            <p style={{ color: theme.textMuted, fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>Dikembangkan oleh tim TDA (Tadabbur Dream Adventure) dari Sekolah Impian sebagai kontribusi nyata untuk ketahanan pangan nasional.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "64px" }}>
            {team.map((member, i) => (
              <div
                key={i}
                style={{
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
                    background: `linear-gradient(135deg, ${theme.gradientFrom}20, ${theme.gradientTo}20)`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    color: theme.gradientFrom,
                    border: `2px solid ${theme.gradientFrom}40`,
                  }}
                >
                  {member.icon}
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
                Dengan bimbingan Ustadz Aulia dan dukungan dari Habibi Garden, STEI ITB, dan PT SEI, kami mengembangkan Agri-Smart sebagai upaya nyata menuju pertanian yang lebih cerdas dan berkelanjutan.
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
      <section style={{ padding: "120px 24px", position: "relative", overflow: "hidden" }}>
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
            Yuk, Bareng-Bareng Bangun <br />
            <span style={{ background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Pertanian Masa Depan</span>
          </h2>
          <p style={{ fontSize: "20px", color: theme.textMuted, marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px" }}>
            Gabung dalam transformasi pertanian Indonesia menuju sistem yang lebih efisien, presisi, dan berkelanjutan.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <button
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

            <div style={{ fontSize: "14px", color: theme.textMuted }}>© 2024 Agri-Smart. Dikembangkan dengan ❤️ untuk ketahanan pangan Indonesia.</div>

            <div style={{ display: "flex", gap: "16px" }}>
              <button
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
                }}
              >
                <Github style={{ width: "20px", height: "20px" }} />
              </button>
              <button
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

export default App;
