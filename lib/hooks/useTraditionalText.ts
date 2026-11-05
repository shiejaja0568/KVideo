'use client';

import { useEffect, useState } from 'react';

let converterPromise: Promise<(text: string) => string> | null = null;

function getConverter() {
  if (!converterPromise) {
    converterPromise = import('opencc-js').then(OpenCC =>
      OpenCC.Converter({ from: 'cn', to: 'tw' })
    );
  }
  return converterPromise;
}

export function useTraditionalText(text: string): string {
  const [convertedText, setConvertedText] = useState(text);

  useEffect(() => {
    let active = true;
    setConvertedText(text);

    getConverter()
      .then(convert => {
        if (active) setConvertedText(convert(text));
      })
      .catch(error => {
        console.warn('[useTraditionalText] Failed to load OpenCC:', error);
      });

    return () => {
      active = false;
    };
  }, [text]);

  return convertedText;
}
