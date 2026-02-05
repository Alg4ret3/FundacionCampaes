import { useState, useEffect } from "react";

/**
 * Hook to track which section is currently active based on scroll position.
 * @param sectionIds Array of section IDs (including the #) to track.
 * @param offset Pixel offset from the top to trigger the active state.
 * @returns The ID of the currently active section.
 */
export const useScrollSpy = (sectionIds: string[], offset: number = 200): string => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // Get all tracking sections
      const sections = sectionIds
        .map((id) => document.querySelector(id))
        .filter((el): el is HTMLElement => el !== null);

      // Current scroll position + small buffer
      const scrollPos = window.scrollY + offset;

      // Find the current section
      let currentSectionId = "";

      // Logic: the active section is the one whose top is closest to the scrollPos
      // but doesn't exceed it. Or special case for bottom of page.
      
      // Check if we are at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentSectionId = sectionIds[sectionIds.length - 1];
      } else {
        for (const section of sections) {
          if (scrollPos >= section.offsetTop) {
            currentSectionId = `#${section.id}`;
          }
        }
      }

      if (currentSectionId && currentSectionId !== activeId) {
        setActiveId(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset, activeId]);

  return activeId;
};
