
import React from 'react';
import { Button } from "@/components/ui/button";
import { useFontSize } from '@/context/FontSizeContext';

const FontSizeAdjuster = () => {
  const { fontSize, setFontSize } = useFontSize();
  
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">Font Size:</span>
      <Button 
        variant={fontSize === 'small' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => setFontSize('small')}
        className="h-8 px-2"
      >
        A
      </Button>
      <Button 
        variant={fontSize === 'medium' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => setFontSize('medium')}
        className="h-8 px-2"
      >
        A<span className="text-lg">A</span>
      </Button>
      <Button 
        variant={fontSize === 'large' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => setFontSize('large')}
        className="h-8 px-3"
      >
        <span className="text-lg">A</span><span className="text-xl">A</span>
      </Button>
    </div>
  );
};

export default FontSizeAdjuster;
