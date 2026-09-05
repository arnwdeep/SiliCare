'use client';

import React, { useState } from 'react';
import { CheckCheck, Plus, X, ArrowRight, ShieldCheck, FileText, Sparkles, Dna, Activity, Stethoscope } from 'lucide-react';

interface GlassConceptCardsProps {
  onExploreClick: () => void;
  onOpenRxUpload: () => void;
}

export default function GlassConceptCards({ onExploreClick, onOpenRxUpload }: GlassConceptCardsProps) {
  const [activeModal, setActiveModal] = useState<'patient' | 'doctor' | 'tip' | null>(null);

  return (
    <>
      {/* Floating UI Layout Matching Reference Image Exactly */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 pointer-events-none min-h-[90vh] flex flex-col justify-between">
        
        {/* Top Section Index */}
        <div className="flex justify-between items-center text-sm font-semibold tracking-wider text-slate-500 pt-4 pointer-events-auto">
          <span className="text-xl sm:text-2xl font-mono text-slate-700 font-bold">08-10</span>
          <div className="flex gap-6 text-xs text-slate-600 font-medium uppercase tracking-widest">
            <button onClick={onExploreClick} className="hover:text-slate-950 transition-colors">Catalog</button>
            <button onClick={onOpenRxUpload} className="hover:text-slate-950 transition-colors">Rx Upload</button>
            <a href="#about" className="hover:text-slate-950 transition-colors">Compliance</a>
          </div>
        </div>

        {/* Center Floating Glass Chat Bubbles (Matching Image Layout) */}
        <div className="space-y-8 my-auto pt-10 pb-10">
          
          {/* Chat Bubble 1: Patient / Client Query (Top Left) */}
          <div className="max-w-md pointer-events-auto animate-float">
            <div className="text-[11px] font-semibold text-slate-500 mb-1.5 ml-1">
              Patient / Client
            </div>
            <div
              onClick={() => setActiveModal('patient')}
              className="glass-chat-bubble glass-chat-bubble-hover rounded-3xl p-6 sm:p-7 relative cursor-pointer group"
            >
              <h3 className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight leading-snug">
                Why do we need continuous genetic & medical monitoring?
              </h3>
              <div className="mt-4 flex items-center justify-end gap-1 text-[11px] font-medium text-slate-500">
                <span>10:31</span>
                <CheckCheck className="w-4 h-4 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Chat Bubble 2: Physician / Specialist Response (Middle Right) */}
          <div className="max-w-lg justify-self-end ml-auto pointer-events-auto animate-float-delayed">
            <div className="text-[11px] font-semibold text-slate-500 mb-1.5 mr-1 text-right">
              SiliCare Physician
            </div>
            <div
              onClick={() => setActiveModal('doctor')}
              className="glass-chat-bubble glass-chat-bubble-hover rounded-3xl p-6 sm:p-8 relative cursor-pointer group"
            >
              <h3 className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight leading-snug">
                It protects your cellular health — clear biomarker terms mean no surprise illnesses during your life
              </h3>
              <div className="mt-4 flex items-center justify-end gap-1 text-[11px] font-medium text-slate-500">
                <span>10:35</span>
                <CheckCheck className="w-4 h-4 text-blue-600" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Solid White Tip Card (Matching Reference Image Bottom Card) */}
        <div className="pointer-events-auto max-w-xl">
          <div className="solid-white-card rounded-[2.2rem] p-6 sm:p-8 shadow-2xl">
            <div className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-2">
              TIP 07
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
              Professional boundaries = trust. This frames healthcare as a safety net, not a burden
            </h2>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>FDA Cleared & ISO-13485 Certified</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onExploreClick}
                  className="px-6 py-3 rounded-full bg-slate-950 text-white font-semibold text-xs hover:bg-blue-600 transition-colors shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Medical Store</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Modal Drawer when clicking the chat bubbles */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md animate-fadeIn">
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-scaleUp text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'patient' && (
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                  Patient Health Protocol
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Continuous diagnostic monitoring eliminates guesswork by detecting metabolic and cellular shifts long before symptoms manifest. SiliCare devices seamlessly transmit encrypted telemetry directly to your physician team.
                </p>

                <button
                  onClick={() => {
                    setActiveModal(null);
                    onExploreClick();
                  }}
                  className="mt-6 w-full py-3 rounded-xl bg-slate-950 text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
                >
                  Shop Diagnostic Test Kits
                </button>
              </div>
            )}

            {activeModal === 'doctor' && (
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                  Clinical Care Consultation
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Our licensed medical doctors review your real-time ECG, continuous glucose readings, and 30x full-genome data to prescribe targeted, clinical-grade equipment and cellular repair protocols.
                </p>

                <button
                  onClick={() => {
                    setActiveModal(null);
                    onOpenRxUpload();
                  }}
                  className="mt-6 w-full py-3 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                >
                  Upload Doctor Prescription (Rx)
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
