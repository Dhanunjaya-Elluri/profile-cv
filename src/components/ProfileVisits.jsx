import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

const ProfileVisits = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Get current visits from localStorage
    const currentVisits = parseInt(
      localStorage.getItem("profileVisits") || "0",
    );

    // Check if this is the first visit in this session
    const hasVisitedThisSession = sessionStorage.getItem("hasVisited");

    if (!hasVisitedThisSession) {
      // Increment visits only if it's the first visit in this session
      const newVisits = currentVisits + 1;
      localStorage.setItem("profileVisits", newVisits.toString());
      sessionStorage.setItem("hasVisited", "true");
      setVisits(newVisits);
    } else {
      // Just display the current visit count without incrementing
      setVisits(currentVisits);
    }
  }, []);

  return (
    <div className="profile-visits">
      <FaEye className="visits-icon" />
      <span>{visits.toLocaleString()} visits</span>
    </div>
  );
};

export default ProfileVisits;
