"use client";

import React, { useState, useRef } from "react";
import {
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Download,
  RotateCcw,
  Upload,
  X,
} from "lucide-react";
import { ResumeData, ResumeSection } from "@/types/resume";
import ResumePreview from "./ResumePreview";
import html2canvas from "html2canvas";
import PresetTemplates from "./PresetTemplates";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ResumeBuilderProps {}

export default function ResumeBuilder({}: ResumeBuilderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: "ShitPoster",
    photo: undefined,
    sections: [
      {
        id: "professional-summary",
        title: "Professional Summary:",
        content: ["Peak Brain Rot Genz Retard who FAFOs and Get Shit Done"],
        enabled: true,
      },
      {
        id: "education",
        title: "Education",
        content: ["Non IIT (Tier 3 College)"],
        enabled: true,
      },
      {
        id: "skills",
        title: "Skills",
        content: [
          "Yapping",
          "Shitposting",
          "ChatGPT stuff",
          "Think inside the box",
        ],
        enabled: true,
      },
      {
        id: "experience",
        title: "Experience",
        content: [
          "Chronically online",
          " 1.Twitter",
          " 2. TikTok (via VPN)",
          " 3. Reddit",
          " 4. LinkedIn",
        ],
        enabled: true,
      },
      {
        id: "hobbies",
        title: "Hobbies",
        content: ["Yapping", "Giving free advice (no one asks for)"],
        enabled: true,
      },
    ],
  });

  //   const [showPreview, setShowPreview] = useState(true);

  const updateSection = (
    sectionId: string,
    updates: Partial<ResumeSection>
  ) => {
    setResumeData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === sectionId ? { ...section, ...updates } : section
      ),
    }));
  };

  const addSectionItem = (sectionId: string, newItem: string) => {
    updateSection(sectionId, {
      content: [
        ...resumeData.sections.find((s) => s.id === sectionId)!.content,
        newItem,
      ],
    });
  };

  const removeSectionItem = (sectionId: string, itemIndex: number) => {
    const section = resumeData.sections.find((s) => s.id === sectionId);
    if (section) {
      updateSection(sectionId, {
        content: section.content.filter((_, index) => index !== itemIndex),
      });
    }
  };

  const updateSectionItem = (
    sectionId: string,
    itemIndex: number,
    newValue: string
  ) => {
    const section = resumeData.sections.find((s) => s.id === sectionId);
    if (section) {
      const newContent = [...section.content];
      newContent[itemIndex] = newValue;
      updateSection(sectionId, { content: newContent });
    }
  };

  const addNewSection = () => {
    const newSection: ResumeSection = {
      id: `section-${Date.now()}`,
      title: "New Section",
      content: ["New item"],
      enabled: true,
    };
    setResumeData((prev) => ({
      ...prev,
      sections: [...prev.sections, newSection],
    }));
  };

  const removeSection = (sectionId: string) => {
    setResumeData((prev) => ({
      ...prev,
      sections: prev.sections.filter((section) => section.id !== sectionId),
    }));
  };

  const toggleSectionVisibility = (sectionId: string) => {
    const section = resumeData.sections.find((s) => s.id === sectionId);
    if (section) {
      updateSection(sectionId, { enabled: !section.enabled });
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setResumeData((prev) => ({ ...prev, photo: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setResumeData((prev) => ({ ...prev, photo: undefined }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const downloadResume = async () => {
    try {
      const element = document.getElementById("resume-preview");
      if (!element) {
        console.error("Target element not found");
        return;
      }
      const canvas = await html2canvas(element);
      const dataUrl = canvas.toDataURL("image/png");

      // Create temporary link for download
      const link = document.createElement("a");
      link.download = `unhinged.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error generating download:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="my-4 text-center w-full">
        <div className="rounded-xl shadow-lg p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-3">🎯 How to Use</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="space-y-2">
              <div className="font-semibold text-white">1. Choose Template</div>
              <div>Start with a preset or build from scratch</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-white">2. Customize</div>
              <div>Edit sections, add items, toggle visibility</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-white">3. Download</div>
              <div>Save your unhinged resume as an image</div>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">🎭 Unhinged</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Builder */}
        <div className="space-y-6">
          {/* Preset Templates */}
          <PresetTemplates onApplyTemplate={setResumeData} />

          <div className="rounded-xl shadow-lg p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              Unhinged Builder
            </h2>

            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Good Name :D
              </label>
              <input
                type="text"
                value={resumeData.name}
                onChange={(e) =>
                  setResumeData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent text-white"
                placeholder="Enter your good name"
              />
            </div>

            {/* Photo Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Photo 📸
              </label>
              <div className="flex items-center gap-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-lg text-white hover:border-white/50 transition-colors bg-transparent"
                >
                  <Upload size={16} />
                  {resumeData.photo ? "Change Photo" : "Upload Photo"}
                </button>
                {resumeData.photo && (
                  <button
                    onClick={removePhoto}
                    className="flex items-center gap-2 px-4 py-2 border border-red-500/50 rounded-lg text-red-400 hover:border-red-500 transition-colors bg-transparent"
                  >
                    <X size={16} />
                    Remove
                  </button>
                )}
              </div>
              {resumeData.photo && (
                <div className="mt-3">
                  <img
                    src={resumeData.photo}
                    alt="Profile preview"
                    className="w-24 h-24 object-cover rounded-lg border border-white/20"
                  />
                </div>
              )}
            </div>

            {/* Sections */}
            <div className="space-y-4">
              {resumeData.sections.map((section) => (
                <div
                  key={section.id}
                  className="border border-white/20 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <input
                      type="text"
                      value={section.title}
                      onChange={(e) =>
                        updateSection(section.id, { title: e.target.value })
                      }
                      className="flex-1 text-lg font-semibold text-white bg-transparent border-none outline-none"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleSectionVisibility(section.id)}
                        className={`p-2 rounded-lg ${
                          section.enabled
                            ? "text-green-600 hover:bg-green-900/20"
                            : "text-gray-400 hover:bg-gray-700/20"
                        }`}
                      >
                        {section.enabled ? (
                          <Eye size={20} />
                        ) : (
                          <EyeOff size={20} />
                        )}
                      </button>
                      <button
                        onClick={() => removeSection(section.id)}
                        className="p-2 text-red-600 hover:bg-red-900/20 rounded-lg"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {section.content.map((item, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) =>
                            updateSectionItem(section.id, index, e.target.value)
                          }
                          className="flex-1 px-3 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent text-white text-sm"
                          placeholder="Enter item"
                        />
                        <button
                          onClick={() => removeSectionItem(section.id, index)}
                          className="p-2 text-red-600 hover:bg-red-900/20 rounded-lg"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addSectionItem(section.id, "")}
                      className="w-full py-2 border-2 border-dashed border-white/30 rounded-lg text-blue-400 hover:border-white/50 hover:text-blue-300 transition-colors bg-transparent"
                    >
                      + Add Item
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={addNewSection}
                className="w-full py-3 border-2 border-dashed border-white/30 rounded-lg text-purple-400 hover:border-white/50 hover:bg-purple-900/20 transition-colors flex items-center justify-center gap-2 bg-transparent"
              >
                <Plus size={20} />
                Add New Section
              </button>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-6">
          <div className="rounded-xl shadow-lg p-6 border border-white/20 shadow-blue-200 dark:shadow-blue-900">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="animate-pulse">✨</span>
                Live Preview
                <span className="animate-pulse">✨</span>
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setResumeData({ name: "", sections: [] })}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600/80 text-white rounded-lg hover:bg-gray-700/80 transition-colors"
                >
                  <RotateCcw size={20} />
                  Clear
                </button>
                <button
                  onClick={downloadResume}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600/80 text-white rounded-lg hover:bg-blue-700/80 transition-colors"
                >
                  <Download size={20} />
                  Download
                </button>
              </div>
            </div>

            <div className="border border-white/20 rounded-lg p-6 shadow-inner relative overflow-hidden">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400 opacity-20 animate-pulse"></div>
              <div className="transform hover:scale-105 transition-transform duration-300 relative z-10">
                <ResumePreview data={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
