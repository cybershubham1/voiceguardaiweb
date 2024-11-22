import React, { useState } from 'react';
import { Shield, Upload, Video, Mic, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import FileUpload from './FileUpload';
import LiveDetection from './LiveDetection';
import AudioDetection from './AudioDetection';
import ResultCard from './ResultCard';
import AnalysisTypes from './AnalysisTypes';
import ScanningAnimation from './ScanningAnimation';

const DeepfakeDetectionTool = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    isDeepfake: boolean;
    confidence: number;
    type: string;
    details: string[];
  } | null>(null);

  const handleFileAnalysis = async (file: File) => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        isDeepfake: true,
        confidence: 99.8,
        type: 'Video',
        details: [
          'Facial inconsistencies detected',
          'Audio-visual sync mismatch',
          'Unnatural eye blinking patterns',
          'Artificial voice patterns identified'
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-center gap-3 mb-8">
        <Shield className="h-8 w-8 text-indigo-500" />
        <h1 className="text-3xl font-bold">Deepfake Detection Tool</h1>
      </div>

      <Alert className="mb-8 border-indigo-500/20 bg-indigo-500/10">
        <AlertTriangle className="h-5 w-5 text-indigo-500" />
        <AlertTitle className="text-indigo-500">Advanced Detection</AlertTitle>
        <AlertDescription>
          Our AI-powered tool analyzes videos, images, and audio for potential deepfake manipulation
          with 99.8% accuracy.
        </AlertDescription>
      </Alert>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Analysis Types</CardTitle>
          <CardDescription>
            Choose from multiple detection methods for comprehensive verification
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AnalysisTypes />
        </CardContent>
      </Card>

      <Tabs defaultValue="upload" className="mb-8">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            File Upload
          </TabsTrigger>
          <TabsTrigger value="live" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            Live Detection
          </TabsTrigger>
          <TabsTrigger value="audio" className="flex items-center gap-2">
            <Mic className="h-4 w-4" />
            Audio Analysis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload">
          <FileUpload onFileSelect={handleFileAnalysis} />
        </TabsContent>

        <TabsContent value="live">
          <LiveDetection onAnalyze={() => setIsAnalyzing(true)} />
        </TabsContent>

        <TabsContent value="audio">
          <AudioDetection onAnalyze={() => setIsAnalyzing(true)} />
        </TabsContent>
      </Tabs>

      {isAnalyzing && (
        <Card>
          <CardContent className="p-6">
            <ScanningAnimation />
          </CardContent>
        </Card>
      )}

      {result && !isAnalyzing && <ResultCard result={result} />}
    </div>
  );
};

export default DeepfakeDetectionTool;