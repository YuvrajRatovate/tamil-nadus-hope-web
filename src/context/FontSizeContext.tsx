
import React, { createContext, useContext, useState, ReactNode } from 'react';

type FontSizeType = 'small' | 'medium' | 'large';

interface FontSizeContextType {
  fontSize: FontSizeType;
  setFontSize: (size: FontSizeType) => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const FontSizeProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSize] = useState<FontSizeType>('medium');

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      <div className={`font-size-${fontSize}`}>
        {children}
      </div>
    </FontSizeContext.Provider>
  );
};

export const useFontSize = (): FontSizeContextType => {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
};
