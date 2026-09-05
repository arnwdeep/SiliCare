"use client";

import React, { useState, useEffect } from "react";
import { RotateCw, Headphones, Info, Check, ShieldCheck, AlertCircle, Bot, Volume2, X } from "lucide-react";

interface CaptchaItem {
  id: string;
  src: string;
  isRobot: boolean;
  alt: string;
}

const ALL_CAPTCHA_ITEMS: CaptchaItem[] = [
  { id: "r1", src: "/captcha/robot_1.jpg", isRobot: true, alt: "Futuristic Metallic Robot" },
  { id: "r2", src: "/captcha/robot_2.jpg", isRobot: true, alt: "White Gold Android AI Robot" },
  { id: "r3", src: "/captcha/robot_3.jpg", isRobot: true, alt: "Scifi Mecha Cyborg Robot" },
  { id: "r4", src: "/captcha/robot_4.jpg", isRobot: true, alt: "Industrial Robotic Arm" },
  { id: "h1", src: "/captcha/human_1.jpg", isRobot: false, alt: "Man in red sweater" },
  { id: "h2", src: "/captcha/human_2.jpg", isRobot: false, alt: "Woman listening to headphones" },
  { id: "h3", src: "/captcha/human_3.jpg", isRobot: false, alt: "Man with helmet" },
  { id: "h4", src: "/captcha/human_4.jpg", isRobot: false, alt: "Checkered pattern background" },
  { id: "h5", src: "/captcha/human_5.jpg", isRobot: false, alt: "Man sitting on stool" },
];

interface RobotCaptchaModalProps {
  isOpen: boolean;
  onVerifySuccess: () => void;
  onClose?: () => void;
}

export default function RobotCaptchaModal({ isOpen, onVerifySuccess }: RobotCaptchaModalProps) {
  const [items, setItems] = useState<CaptchaItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  // Function to shuffle items
  const shuffleItems = () => {
    const shuffled = [...ALL_CAPTCHA_ITEMS].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setSelectedIds(new Set());
    setErrorMessage(null);
    setIsSuccess(false);
  };

  useEffect(() => {
    if (isOpen) {
      shuffleItems();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleSelect = (id: string) => {
    if (isSuccess) return;
    setErrorMessage(null);
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const handleVerify = () => {
    // Correct selection: All robot items selected, and NO non-robot items selected
    const robotIds = new Set(items.filter((item) => item.isRobot).map((item) => item.id));
    
    let isCorrect = true;

    // Check if selected matches robotIds exactly
    if (selectedIds.size !== robotIds.size) {
      isCorrect = false;
    } else {
      for (const id of selectedIds) {
        if (!robotIds.has(id)) {
          isCorrect = false;
          break;
        }
      }
    }

    if (isCorrect && robotIds.size > 0) {
      setIsSuccess(true);
      setErrorMessage(null);
      setTimeout(() => {
        onVerifySuccess();
      }, 1200);
    } else {
      setIsShaking(true);
      if (selectedIds.size === 0) {
        setErrorMessage("Please select at least one image.");
      } else {
        setErrorMessage("Please select all images containing robots.");
      }
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const playAudioChallenge = () => {
    setAudioPlaying(true);
    // Web Audio API synth beep/voice demo
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance("Security Verification: Please select all images with robots and click verify.");
      utterance.rate = 1.0;
      utterance.onend = () => setAudioPlaying(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setAudioPlaying(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-300">
      <div
        className={`w-full max-w-[400px] bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden text-slate-100 relative transition-transform ${
          isShaking ? "animate-bounce" : ""
        }`}
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75), 0 0 30px rgba(59, 130, 246, 0.2)",
        }}
      >
        {/* Header Banner */}
        <div className="bg-blue-600 px-5 py-4 text-white relative">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase font-medium tracking-wide text-blue-100">Select all images with</p>
              <h2 className="text-2xl font-extrabold tracking-tight mt-0.5 leading-none">ROBOTS</h2>
              <p className="text-xs text-blue-100/90 mt-1.5 font-light">
                Click verify once all robots are selected.
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shrink-0">
              <Bot className="w-6 h-6" />
            </div>
          </div>

          {errorMessage && (
            <div className="mt-3 py-1.5 px-3 rounded bg-red-500/90 text-white text-xs font-semibold flex items-center gap-1.5 animate-in slide-in-from-top-1">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>

        {/* Success Overlay */}
        {isSuccess ? (
          <div className="p-10 flex flex-col items-center justify-center text-center space-y-4 bg-slate-900 animate-in zoom-in-95">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/20 animate-bounce">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">Verification Successful!</h3>
              <p className="text-xs text-slate-400">You are verified as Human. Unlocking portfolio...</p>
            </div>
          </div>
        ) : (
          <>
            {/* 3x3 Image Grid */}
            <div className="p-3 bg-slate-950 grid grid-cols-3 gap-2">
              {items.map((item) => {
                const isSelected = selectedIds.has(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleSelect(item.id)}
                    className={`relative aspect-square rounded-lg overflow-hidden group focus:outline-none transition-all duration-200 ${
                      isSelected
                        ? "ring-4 ring-blue-500 scale-[0.96] shadow-lg shadow-blue-500/30"
                        : "hover:opacity-90 hover:scale-[0.98]"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={`w-full h-full object-cover transition-transform duration-300 ${
                        isSelected ? "scale-105" : "group-hover:scale-105"
                      }`}
                    />

                    {/* Selection Overlay */}
                    {isSelected && (
                      <div className="absolute inset-0 bg-blue-600/30 backdrop-blur-[1px] flex items-top justify-start p-1.5">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md animate-in zoom-in-50">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Action Footer */}
            <div className="px-4 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3 text-slate-400">
                <button
                  type="button"
                  onClick={shuffleItems}
                  title="Reload new images"
                  className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <RotateCw className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={playAudioChallenge}
                  title="Audio challenge"
                  className={`p-1.5 rounded-lg transition-colors ${
                    audioPlaying ? "text-blue-400 bg-blue-500/10" : "hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {audioPlaying ? <Volume2 className="w-5 h-5 animate-pulse" /> : <Headphones className="w-5 h-5" />}
                </button>
                <button
                  type="button"
                  onClick={() => setShowInfo(!showInfo)}
                  title="Verification Info"
                  className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <Info className="w-5 h-5" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleVerify}
                className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                VERIFY
              </button>
            </div>
          </>
        )}

        {/* Info Modal Popup */}
        {showInfo && (
          <div className="absolute inset-0 z-20 bg-slate-900/95 p-6 flex flex-col justify-between text-slate-200 animate-in fade-in">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-white text-base">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  <span>Security Verification</span>
                </div>
                <button
                  onClick={() => setShowInfo(false)}
                  className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                This verification test checks if you are a real human user before accessing Alex Morgan&apos;s Portfolio.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside pt-1">
                <li>Identify all square tiles containing robots or robotic equipment.</li>
                <li>Click on each robot tile to place a checkmark.</li>
                <li>Press <strong className="text-white">VERIFY</strong> when finished.</li>
              </ul>
            </div>

            <button
              onClick={() => setShowInfo(false)}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              Got it
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
