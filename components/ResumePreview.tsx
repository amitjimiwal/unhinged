"use client";
import React from "react";
import { ResumeData } from "@/types/resume";

interface ResumePreviewProps {
  data: ResumeData;
}

export default function ResumePreview({ data }: ResumePreviewProps) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "2rem",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        borderRadius: "0.5rem",
        maxWidth: "28rem",
        margin: "0 auto",
        fontFamily:
          "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
        position: "relative",
        overflow: "hidden",
      }}
      id="resume-preview"
    >
      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "0.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: "500",
            color: "#9ca3af",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "#000000" }}>checkout 👉🏻 </span>
          unhinged.stackforgelabs.icu
        </div>
      </div>

      {/* Header with Photo and Name */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Photo */}
        {data.photo && (
          <img
            src={data.photo}
            alt="Profile"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "2px solid #dbeafe",
            }}
          />
        )}

        {/* Name */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              textAlign: data.photo ? "left" : "center",
              color: "#000000",
              margin: 0,
            }}
          >
            {data.name || "Your Name"} Resume
          </h1>
        </div>
      </div>

      {/* Resume Sections */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        {data.sections
          .filter((section) => section.enabled)
          .map((section) => (
            <div
              key={section.id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {/* Section Title */}
              <h2
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#000000",
                  borderBottom: "2px solid #dbeafe",
                  paddingBottom: "0.25rem",
                }}
              >
                {section.title}
              </h2>

              {/* Section Content */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                {section.content.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      color: "#000000",
                      fontSize: "0.875rem",
                    }}
                  >
                    {item.startsWith("•") ? (
                      <span style={{ marginLeft: "1rem" }}>{item}</span>
                    ) : item.match(/^\d+\./) ? (
                      <span style={{ marginLeft: "1rem" }}>{item}</span>
                    ) : (
                      <span style={{ marginLeft: "1rem" }}>• {item}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          width: "4rem",
          height: "4rem",
          backgroundColor: "#dbeafe",
          borderRadius: "50%",
          opacity: 0.2,
        }}
      ></div>
    </div>
  );
}
