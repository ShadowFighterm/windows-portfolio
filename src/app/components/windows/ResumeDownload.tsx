import { useState, useEffect } from 'react';
import { Download, CheckCircle } from 'lucide-react';

export default function ResumeDownload() {
  const [progress, setProgress] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const startDownload = () => {
    setDownloading(true);
    setProgress(0);
  };

  useEffect(() => {
    if (downloading && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 2, 100));
      }, 50);
      return () => clearTimeout(timer);
    } else if (progress === 100 && !completed) {
      setTimeout(() => {
        setCompleted(true);
        // Create a fake resume download
        const link = document.createElement('a');
        link.href = 'data:text/plain;charset=utf-8,';
        link.download = 'Resume_mannan.txt';
        link.click();
      }, 500);
    }
  }, [downloading, progress, completed]);

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center space-y-6">
        {!downloading ? (
          <>
            <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <Download className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold">Download Resume</h2>
            <p className="text-gray-600">
              Click the button below to download my resume in PDF format
            </p>
            <button
              onClick={startDownload}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Download Resume.exe
            </button>
          </>
        ) : !completed ? (
          <>
            <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
              <Download className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold">Installing Resume...</h2>
            <div className="space-y-2">
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600">{progress}% Complete</p>
            </div>
            <p className="text-xs text-gray-500 italic">
              Extracting professional experience and skills...
            </p>
          </>
        ) : (
          <>
            <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-600">Download Complete!</h2>
            <p className="text-gray-600">
              Resume has been downloaded successfully. Check your downloads folder.
            </p>
            <button
              onClick={() => {
                setDownloading(false);
                setProgress(0);
                setCompleted(false);
              }}
              className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Download Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
