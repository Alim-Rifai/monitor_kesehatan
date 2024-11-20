import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import InputDataPage from "./components/InputDataPage";
import GrafikPerkembangan from "./components/pages/GrafikPerkembangan"; // Halaman Grafik Perkembangan
import styles from "./styles/App.module.css";

// Halaman Utama
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>
        <button className={styles.backButton}>← Kembali</button>
        <h1 className={styles.title}>Monitor Kesehatan</h1>
        <div className={styles.infoSection}>
          <InfoBox
            imageSrc="assets/images/input.png"
            altText="Input Data Icon"
            buttonText="Input Data"
            description="Tinggi badan dan berat badan ideal"
            onClick={() => navigate("/input-data")}
          />
          <InfoBox
            imageSrc="assets/images/grafik.png"
            altText="Grafik Perkembangan Icon"
            buttonText="Grafik Perkembangan"
            description="Catatan perkembangan progress Anda"
            onClick={() => navigate("/progress")}
          />
        </div>
      </div>
    </div>
  );
};

// Komponen Utama Aplikasi
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={<HomePage />} />
        {/* Halaman Input Data */}
        <Route path="/input-data" element={<InputDataPage />} />
        {/* Halaman Grafik Perkembangan */}
        <Route path="/progress" element={<GrafikPerkembangan />} />
      </Routes>
    </Router>
  );
};

export default App;
