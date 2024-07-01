"use client";

import React, { useEffect, useState } from 'react';
import { pdfjs } from 'pdfjs-dist';

const Page = () => {
  const [resumeText, setResumeText] = useState('');

  useEffect(() => {
    const loadPdf = async () => {
      const url = 'constant/resume_musab.pdf';
      const loadingTask = pdfjs.getDocument(url);

      try {
        const pdf = await loadingTask.promise;
        const page =  await pdf.getPage(1);
        const textContent = await page.getTextContent();
        const text = textContent.items.map(item => item.str).join(' ');
        setResumeText(text);
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };

    loadPdf();
  }, []);

  return (
    <div>
      <h1>Resume Content</h1>
      <p>{resumeText}</p>
    </div>
  );
};

export default Page;