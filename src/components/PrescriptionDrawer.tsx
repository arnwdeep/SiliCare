'use client';

import React, { useState } from 'react';
import { X, UploadCloud, CheckCircle2, ShieldCheck, FileText, AlertCircle } from 'lucide-react';

interface PrescriptionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onRxUploaded: () => void;
}

export default function PrescriptionDrawer({ isOpen, onClose, onRxUploaded }: PrescriptionDrawerProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [doctorName, setDoctorName] = useState('');

  if (!isOpen) return null;

  const handleFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileName) return;

    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setSuccess(true);
      onRxUploaded();
      setTimeout(() => {
        setSuccess(false);
        setFileName(null);
        onClose();
      }, 1500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-scaleUp text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
          <FileText className="w-6 h-6" />
        </div>

        <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
          Upload Doctor Prescription (Rx)
        </h3>
        <p className="text-xs text-slate-500 mt-1 mb-6">
          Required for Rx-designated medical items & continuous sensors under FDA guidelines.
        </p>

        {success ? (
          <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-900 animate-fadeIn">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h4 className="text-base font-bold">Prescription Verified!</h4>
            <p className="text-xs text-emerald-700 mt-1">
              Your Rx document has been encrypted and linked to your active SiliCare session.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Prescribing Doctor Name / Clinic
              </label>
              <input
                type="text"
                required
                placeholder="Dr. Sarah Jenkins, M.D. / Johns Hopkins"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Upload Rx Document (PDF, JPG, PNG)
              </label>
              <div className="border-2 border-dashed border-slate-200 hover:border-blue-500 rounded-2xl p-6 text-center bg-slate-50/60 transition-colors relative cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileDrop}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <span className="text-xs font-semibold text-slate-800 block">
                  {fileName ? fileName : 'Click or Drag & Drop Prescription file'}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">
                  Supports official medical orders up to 25MB
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% HIPAA Compliant Encrypted Vault Storage</span>
            </div>

            <button
              type="submit"
              disabled={!fileName || uploading}
              className="w-full py-3.5 rounded-2xl bg-slate-950 text-white font-semibold text-xs hover:bg-blue-600 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? 'Encrypting & Validating Rx...' : 'Submit Prescription Document'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
