"use client";

import React from "react";
import { ResumeData } from "@/types/resume";

interface PresetTemplatesProps {
  onApplyTemplate: (data: ResumeData) => void;
}

const PRESET_TEMPLATES: ResumeData[] = [
  {
    name: "ShitPosting",
    sections: [
      {
        id: "professional-summary",
        title: "Professional Summary:",
        content: ["Peak Brain Rot Genz Retard who FAFOs and Get Shit Done"],
        enabled: true,
      },
      {
        id: "gym-summary",
        title: "Jim Skills",
        content: ["Bench PR 110kg", "Deadlift 150kg","Muscular"],
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
          "1. Twitter",
          "2. TikTok (via VPN)",
          "3. Reddit",
          "4. LinkedIn",
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
  },
  {
    name: "Overthinker",
    sections: [
      {
        id: "professional-summary",
        title: "Professional Summary:",
        content: ["Professional Chaos Creator & Meme Connoisseur"],
        enabled: true,
      },
      {
        id: "education",
        title: "Education",
        content: ["University of Life (Self-taught)", "School of Hard Knocks"],
        enabled: true,
      },
      {
        id: "skills",
        title: "Skills",
        content: [
          "Procrastination",
          "Overthinking",
          "Making everything about me",
          "Being chronically late",
        ],
        enabled: true,
      },
      {
        id: "experience",
        title: "Experience",
        content: [
          "Professional Overthinker (2020-Present)",
          "• Overthinking simple decisions",
          "• Creating problems that don't exist",
          "• Worrying about things I can't control",
        ],
        enabled: true,
      },
      {
        id: "achievements",
        title: "Achievements",
        content: [
          "Survived 2020",
          "Made it through Monday",
          "Didn't cry today (yet)",
        ],
        enabled: true,
      },
    ],
  },
  {
    name: "Unhinged",
    sections: [
      {
        id: "professional-summary",
        title: "Professional Summary:",
        content: ["Certified Hot Mess Express Conductor"],
        enabled: true,
      },
      {
        id: "education",
        title: "Education",
        content: [
          "YouTube University",
          "TikTok Academy",
          "Reddit School of Life",
        ],
        enabled: true,
      },
      {
        id: "skills",
        title: "Skills",
        content: [
          "Making bad decisions",
          "Finding the worst possible timing",
          "Turning coffee into anxiety",
        ],
        enabled: true,
      },
      {
        id: "experience",
        title: "Experience",
        content: [
          "Professional Disaster (2018-Present)",
          "• Breaking things that shouldn't break",
          "• Fixing things that shouldn't be fixed",
          "• Creating solutions to problems I created",
        ],
        enabled: true,
      },
      {
        id: "hobbies",
        title: "Hobbies",
        content: [
          "Existential crisis",
          "Questioning life choices",
          "Pretending to have my life together",
        ],
        enabled: true,
      },
    ],
  },
];

export default function PresetTemplates({
  onApplyTemplate,
}: PresetTemplatesProps) {
  return (
    <div className="rounded-xl shadow-lg p-6 border border-white/20">
      <h3 className="text-xl font-bold text-white mb-4">🎨 Preset Templates</h3>
      <div className="grid grid-cols-1 gap-3">
        {PRESET_TEMPLATES.map((template, index) => (
          <button
            key={index}
            onClick={() => onApplyTemplate(template)}
            className="p-4 text-left border border-white/20 rounded-lg hover:border-white/40 hover:bg-blue-900/20 transition-colors bg-transparent"
          >
            <div className="font-semibold text-white">{template.name}</div>
            <div className="text-sm text-gray-300 mt-1">
              {template.sections.length} sections • Click to apply
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
