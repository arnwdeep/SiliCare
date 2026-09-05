'use client';

import React, { useState } from 'react';
import { Plus, X, ArrowRight, ShieldCheck, Dna, Activity, Stethoscope, ChevronRight, CheckCircle2 } from 'lucide-react';

interface GlassConceptCardsProps {
  onExploreClick: () => void;
}

export default function GlassConceptCards({ onExploreClick }: GlassConceptCardsProps) {
  const [activeModal, setActiveModal] = useState<'howItWorks' | 'aboutClinic' | 'science' | null>(null);

  return (
    <>
      {/* Floating Glass Cards Overlay (Matching Image Layout Exactly) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 pointer-events-none min-h-[85vh] flex flex-col justify-between">
        
        {/* Top Header Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          
          {/* Card 1: How it works */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 pointer-events-auto max-w-sm backdrop-blur-xl animate-float">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-slate-900 tracking-tight">
                How it works
              </h3>
              <button
                onClick={() => setActiveModal('howItWorks')}
                aria-label="Expand How It Works"
                className="w-8 h-8 rounded-full badge-plus-btn flex items-center justify-center shadow-md focus:outline-none"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Understanding your medical health & genetics is easy at SiliCare. Choose a clinical test or diagnostic device, collect your sample at home, and receive instant AI-driven clinical results with personalized medical recommendations.
            </p>
          </div>

          {/* Spacer / Hidden on Mobile */}
          <div className="hidden lg:block"></div>

          {/* Card 2: About our clinic */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 pointer-events-auto max-w-sm justify-self-end backdrop-blur-xl animate-float-delayed">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-slate-900 tracking-tight">
                About our clinic
              </h3>
              <button
                onClick={() => setActiveModal('aboutClinic')}
                aria-label="Expand About Our Clinic"
                className="w-8 h-8 rounded-full badge-plus-btn flex items-center justify-center shadow-md focus:outline-none"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              At SiliCare, we specialize in advanced medical supplies, genetic testing, and hospital-grade diagnostic gear. Our expert clinical team uses cutting-edge technology to provide personalized health insights and verified care.
            </p>
          </div>

        </div>

        {/* Hero Title & Sub-badge Overlay (Matching Reference Screenshot) */}
        <div className="mt-auto pt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pointer-events-auto">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/80 backdrop-blur-md shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                CLINICAL-GRADE E-COMMERCE
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-slate-950 tracking-tighter leading-[0.95] font-sans">
              SILICARE<br />
              <span className="text-slate-400 font-extralight">MEDICAL TECH</span>
            </h1>
            
            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-lg font-light">
              Order certified diagnostic devices, genome sequencing kits, and hospital supplies with encrypted clinical tracking and 24-hour dispatch.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="px-7 py-3.5 rounded-full bg-slate-950 text-white font-medium text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-950/10 flex items-center gap-2 group"
              >
                <span>Browse Medical Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActiveModal('science')}
                className="px-6 py-3.5 rounded-full bg-white/90 border border-slate-300 text-slate-900 font-medium text-sm hover:bg-slate-100 backdrop-blur-md transition-all shadow-xs flex items-center gap-2"
              >
                <Dna className="w-4 h-4 text-blue-600" />
                <span>The 3D Science</span>
              </button>
            </div>
          </div>

          {/* Designer / Accreditation Stamp (Bottom Right matching reference image) */}
          <div className="glass-card rounded-2xl p-4 flex items-center gap-4 border border-slate-200/90 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-inner">
              <Dna className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-widest text-slate-500 uppercase">
                CLINICAL UI/UX ARCHITECTURE
              </div>
              <div className="text-xs font-bold text-slate-900">
                SiliCare BioTech Labs
              </div>
              <div className="text-[10px] text-slate-500">
                FDA & ISO-13485 Compliant Platform
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Modal Drawers triggered by the '+' buttons */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md animate-fadeIn">
          <div
            className="bg-white/95 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-scaleUp text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'howItWorks' && (
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                  How SiliCare Works
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-6">
                  Streamlined, HIPAA-compliant diagnostic & equipment delivery protocol.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-full bg-slate-950 text-white text-xs font-bold flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Select Clinical Items</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Browse certified diagnostic test kits, continuous monitors, or prescription devices.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-full bg-slate-950 text-white text-xs font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Express Temperature-Controlled Delivery</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Orders dispatched within 4 hours via cold-chain medical couriers with live tracking.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-full bg-slate-950 text-white text-xs font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Sample Collection / Device Setup</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Follow painless step-by-step video instructions or connect via BLE to the SiliCare App.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-full bg-slate-950 text-white text-xs font-bold flex items-center justify-center shrink-0">4</div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">CLIA Lab & AI Physician Insights</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Get encrypted lab results reviewed by licensed medical doctors within 48 hours.</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveModal(null);
                    onExploreClick();
                  }}
                  className="mt-6 w-full py-3 rounded-xl bg-slate-950 text-white text-xs font-semibold hover:bg-blue-600 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>Start Shopping Catalog</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {activeModal === 'aboutClinic' && (
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                  About SiliCare Clinic & Supply
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-6">
                  Pioneering direct-to-patient precision medicine and clinical technology.
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  SiliCare was established by a team of bio-engineers and clinical physicians to bridge the gap between high-complexity molecular diagnostics and accessible home medical care.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xl font-bold text-slate-950">99.9%</div>
                    <div className="text-[11px] text-slate-500">Diagnostic Accuracy</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xl font-bold text-slate-950">ISO 13485</div>
                    <div className="text-[11px] text-slate-500">Medical Quality Standard</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xl font-bold text-slate-950">24/7</div>
                    <div className="text-[11px] text-slate-500">Physician On-Call</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xl font-bold text-slate-950">50K+</div>
                    <div className="text-[11px] text-slate-500">Patients Served</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>FDA 510(k) Cleared Devices & CLIA Accredited Partners</span>
                </div>
              </div>
            )}

            {activeModal === 'science' && (
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Dna className="w-6 h-6 animate-spin" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                  Interactive 3D Genome Visualization
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  Three.js WebGL molecular rendering engine.
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  The background 3D DNA model dynamically mirrors real double-helix macromolecular structures with base-pair rungs rendered with real-time studio ambient occlusion, metallic specular shading, and interactive cursor physics.
                </p>

                <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono space-y-2 mb-6">
                  <div className="text-emerald-400">// Three.js WebGL Engine</div>
                  <div>Strand 1: r * cos(t)</div>
                  <div>Strand 2: r * cos(t + PI)</div>
                  <div>Rungs: InstancedMesh Spheres (100% FPS)</div>
                </div>

                <button
                  onClick={() => setActiveModal(null)}
                  className="w-full py-3 rounded-xl bg-slate-950 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Close Visualization Info
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
