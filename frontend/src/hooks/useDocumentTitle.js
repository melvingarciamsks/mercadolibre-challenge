// src/hooks/useDocumentTitle.js
import { useEffect } from 'react';

export default function useDocumentTitle(title) {
  useEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'Mercado Libre';
    }
  }, [title]);
}
