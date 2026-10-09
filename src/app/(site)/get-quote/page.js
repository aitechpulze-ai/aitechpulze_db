"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";

const PROJECT_TYPES = [
  { id: "ai_ml", name: "AI / Machine Learning", price: 4500 },
  { id: "web_dev", name: "Website Development", price: 3000 },
  { id: "full_stack", name: "Full Stack Application", price: 4000 },
  { id: "data_dash", name: "Data Analytics Dashboard", price: 3500 },
  { id: "iot", name: "Hardware + Software (IoT)", price: 6000 },
  { id: "fyp", name: "Final Year Project", price: 2500 },
  { id: "startup_mvp", name: "Startup MVP", price: 4500 },
  { id: "full_build", name: "Full Build + Deployment", price: 20000 },
];

const FEATURES = [
  { 
    id: "seo", 
    name: "SEO Optimization", 
    price: 200,
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  },
  { 
    id: "payment", 
    name: "Payment Gateway", 
    price: 300,
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
  },
  { 
    id: "admin", 
    name: "Admin Dashboard", 
    price: 400,
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  },
  { 
    id: "mobile", 
    name: "Mobile Responsive", 
    price: 200,
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
  },
  { 
    id: "api", 
    name: "API Integration", 
    price: 300,
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  },
  { 
    id: "domain", 
    name: "Domain & Deployment", 
    price: 2000,
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
  },
  { 
    id: "db", 
    name: "Database Integration", 
    price: 300,
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
  },
  { 
    id: "auth", 
    name: "User Authentication", 
    price: 250,
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
  },
  { 
    id: "email", 
    name: "Email Notifications", 
    price: 150,
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
];

export default function NewQuotePage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectTypeId: "",
    features: [],
    description: "",
    requirementsFile: null,
  });

  // Derived state
  const isStep1Valid = formData.name.trim() !== "" && formData.phone.trim() !== "" && formData.email.trim() !== "";
  const isStep2Valid = formData.projectTypeId !== "";
  
  const selectedProject = PROJECT_TYPES.find((p) => p.id === formData.projectTypeId);
  const selectedFeatures = FEATURES.filter((f) => formData.features.includes(f.id));
  
  const baseCost = selectedProject ? selectedProject.price : 0;
  const featuresCost = selectedFeatures.reduce((acc, curr) => acc + curr.price, 0);
  const totalCost = baseCost + featuresCost;

  const handleNext = () => setStep((s) => Math.min(s + 1, 4));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const toggleFeature = (featureId) => {
    setFormData((prev) => {
      const isSelected = prev.features.includes(featureId);
      if (isSelected) {
        return { ...prev, features: prev.features.filter((id) => id !== featureId) };
      } else {
        return { ...prev, features: [...prev.features, featureId] };
      }
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, requirementsFile: e.target.files[0] });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("project_type", selectedProject?.name || "");
      
      const featuresString = selectedFeatures.map(f => f.name).join(", ");
      if (featuresString) {
        payload.append("description", formData.description ? `${formData.description}\n\nFeatures selected: ${featuresString}` : `Features selected: ${featuresString}`);
      } else {
        payload.append("description", formData.description);
      }
      
      payload.append("budget", totalCost.toString());
      
      if (formData.requirementsFile) {
        payload.append("requirements", formData.requirementsFile);
      }

      const res = await fetch("/api/quote", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) {
        console.error("API error", await res.text());
      }
      setSuccess(true);
    } catch (error) {
      console.error("Error submitting quote:", error);
      setSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#03040B] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#0a0a0a] rounded-2xl shadow-xl border border-white/10 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Quote Submitted!</h2>
          <p className="text-[#8b93b0] mb-6">Thank you, {formData.name}. We've received your requirements.</p>
          
          <div className="bg-[#03040B] rounded-xl p-4 text-left space-y-3 mb-8 border border-white/15">
            <div className="flex justify-between border-b border-white/15 pb-2">
              <span className="text-[#8b93b0]/80 text-sm">Estimated Total</span>
              <span className="font-bold text-white text-lg">₹{totalCost.toLocaleString('en-IN')}</span>
            </div>
            <p className="text-sm text-[#8b93b0]"><strong className="text-white/90">Email:</strong> {formData.email}</p>
            <p className="text-sm text-[#8b93b0]"><strong className="text-white/90">Phone:</strong> {formData.phone}</p>
            <p className="text-sm text-green-600 font-medium mt-2">Response in 24 hrs</p>
          </div>
          
          <Link href="/" className="inline-block w-full py-3 px-4 bg-white/10 hover:bg-white/5 text-white font-medium rounded-lg transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
      <PageBackground variant="waves" />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Get a Project Quote</h1>
          <p className="mt-4 text-lg text-[#8b93b0]">Answer a few questions to get an instant estimate.</p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full z-0"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#7B2CBF] rounded-full z-0 transition-all duration-300" 
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s} 
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= s ? 'bg-[#7B2CBF] text-white' : 'bg-gray-200 text-gray-400 border-4 border-white'}`}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs font-medium text-[#8b93b0]/80 mt-2 px-1">
            <span>Your Info</span>
            <span>Project Type</span>
            <span>Features</span>
            <span>Review</span>
          </div>
        </div>

        <div className="bg-[#0a0a0a] rounded-2xl shadow-sm border border-white/15 overflow-hidden">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Step 1: Your Information</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 focus:ring-2 focus:ring-[#00F0FF] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 focus:ring-2 focus:ring-[#00F0FF] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 focus:ring-2 focus:ring-[#00F0FF] focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-2">Step 2: Project Type</h2>
              <p className="text-sm text-[#8b93b0]/80 mb-6">Select the main category for your project.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROJECT_TYPES.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => setFormData({...formData, projectTypeId: pt.id})}
                    className={`text-left p-4 rounded-xl border-2 transition-all ${formData.projectTypeId === pt.id ? 'border-[#00F0FF] bg-[#7B2CBF]/10' : 'border-white/10 hover:border-white/20 bg-[#0a0a0a]'}`}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className={`font-semibold ${formData.projectTypeId === pt.id ? 'text-indigo-900' : 'text-white'}`}>{pt.name}</h3>
                      {formData.projectTypeId === pt.id && (
                        <svg className="w-5 h-5 text-[#00F0FF]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      )}
                    </div>
                    <p className={`text-sm mt-1 font-medium ${formData.projectTypeId === pt.id ? 'text-[#00F0FF]' : 'text-[#8b93b0]/80'}`}>
                      Starts at ₹{pt.price.toLocaleString('en-IN')}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-2">Step 3: Add Features</h2>
              <p className="text-sm text-[#8b93b0]/80 mb-6">Select any additional features your project needs (optional).</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {FEATURES.map((f) => {
                  const isSelected = formData.features.includes(f.id);
                  return (
                    <label 
                      key={f.id} 
                      className={`flex flex-col p-4 rounded-xl border cursor-pointer transition-all ${isSelected ? 'border-[#00F0FF] bg-[#00F0FF]/10 shadow-[0_0_15px_rgba(0,240,255,0.2)]' : 'border-white/10 hover:border-white/20 bg-[#0a0a0a]'}`}
                    >
                      <div className="flex justify-between items-start w-full">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#00F0FF] text-black' : 'bg-white/5 text-[#8b93b0]'}`}>
                          {f.icon}
                        </div>
                        <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all flex-shrink-0 ${isSelected ? 'bg-[#00F0FF] border-[#00F0FF]' : 'border-white/20 bg-black/20'}`}>
                          {isSelected && (
                            <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <input 
                          type="checkbox" 
                          checked={isSelected}
                          onChange={() => toggleFeature(f.id)}
                          className="sr-only"
                        />
                      </div>
                      <div className="mt-4 flex-grow flex justify-between items-end w-full">
                        <span className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-white/80'}`}>{f.name}</span>
                        <span className={`text-sm font-bold ${isSelected ? 'text-[#00F0FF]' : 'text-[#8b93b0]/80'}`}>+₹{f.price}</span>
                      </div>
                    </label>
                  );
                })}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Project Description (Optional)</label>
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-white/20 focus:ring-2 focus:ring-[#00F0FF] focus:border-transparent outline-none transition-all mb-4 bg-transparent text-white"
                  placeholder="Briefly describe what you're looking to build..."
                ></textarea>
                
                <label className="block text-sm font-medium text-white/80 mb-2 mt-4">Requirements Document (Optional)</label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt,.zip"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00F0FF]/10 file:text-[#00F0FF] hover:file:bg-[#00F0FF]/20 transition-all border border-white/10 rounded-lg p-2"
                  />
                  <p className="text-xs text-white/40 mt-2">Max size: 5MB. Formats: PDF, DOCX, TXT, ZIP.</p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Step 4: Review & Submit</h2>
              
              <div className="bg-[#03040B] rounded-xl p-6 border border-white/15 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Contact Info</h3>
                    <p className="font-medium text-white">{formData.name}</p>
                    <p className="text-sm text-[#8b93b0]">{formData.email}</p>
                    <p className="text-sm text-[#8b93b0]">{formData.phone}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Project Summary</h3>
                    <p className="font-bold text-white">{selectedProject?.name}</p>
                    <p className="text-sm text-[#8b93b0]">
                      {selectedFeatures.length > 0 
                        ? `${selectedFeatures.length} Add-on${selectedFeatures.length > 1 ? 's' : ''} Selected` 
                        : 'No add-ons selected'}
                    </p>
                  </div>
                </div>
                
                {formData.description && (
                  <div className="mt-6 pt-6 border-t border-white/15">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Description</h3>
                    <p className="text-sm text-white/80 italic">"{formData.description}"</p>
                  </div>
                )}
              </div>

              <div className="bg-indigo-900 rounded-xl p-6 text-white flex flex-col md:flex-row items-center justify-between">
                <div>
                  <p className="text-indigo-200 text-sm font-medium mb-1">Estimated Total</p>
                  <p className="text-4xl font-bold">₹{totalCost.toLocaleString('en-IN')}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-sm text-indigo-200">Base: ₹{baseCost.toLocaleString('en-IN')}</p>
                  <p className="text-sm text-indigo-200">Features: +₹{featuresCost.toLocaleString('en-IN')}</p>
                </div>
              </div>
            </div>
          )}

          {/* Footer controls */}
          <div className="px-8 py-5 bg-[#03040B] border-t border-white/15 flex justify-between items-center">
            {step > 1 ? (
              <button 
                onClick={handlePrev}
                className="px-5 py-2.5 text-sm font-medium text-[#8b93b0] hover:text-white transition-colors"
              >
                ← Back
              </button>
            ) : <div></div>}
            
            {step < 4 ? (
              <button 
                onClick={handleNext}
                disabled={(step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  (step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#7B2CBF] hover:bg-[#5b3fd6] text-white shadow-md'
                }`}
              >
                Continue →
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg text-sm font-bold text-white shadow-md transition-all ${
                  isSubmitting ? 'bg-indigo-400 cursor-wait' : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
