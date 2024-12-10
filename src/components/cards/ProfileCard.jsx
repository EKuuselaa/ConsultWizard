import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ProfileCard.css';

const ProfileCard = ({ name, skills, bio, contactInfo, experience }) => {
  const contentRef = useRef();

  const handleDownloadPDF = async () => {
    const content = contentRef.current;
    if (!content) return;

    // Renderöi HTML sisällöksi
    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL('image/png');

    // Luo PDF-tiedosto
    const doc = new jsPDF();
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    doc.save(`${name}_Profiili.pdf`);
  };

  return (
    <div className="profile-card">
      {/* HTML-sisältö */}
      <div className="profile-content" ref={contentRef}>
        <h2>{name}</h2>
        <p><strong>Osaamiset:</strong> {skills}</p>
        <p><strong>Kokemus:</strong> {experience} vuotta</p>
        <p><strong>Kuvaus:</strong> {bio}</p>
        <p><strong>Yhteystiedot:</strong> {contactInfo}</p>
      </div>

      {/* Toimintonapit */}
      <div className="profile-actions">
        <button onClick={handleDownloadPDF} className="print-button">
          Lataa PDF
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
