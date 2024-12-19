import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { db } from "../firebase/config";
import { ref, get, set, onValue } from "firebase/database";

const ProfileVisits = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const visitsRef = ref(db, "profileVisits");

    // Initialize the counter if it doesn't exist
    get(visitsRef)
      .then((snapshot) => {
        if (!snapshot.exists()) {
          set(visitsRef, 0);
        }
      })
      .catch((error) => {
        console.error("Error initializing visits:", error);
      });

    // Listen for real-time updates
    const unsubscribe = onValue(
      visitsRef,
      (snapshot) => {
        const currentVisits = snapshot.val() || 0;
        setVisits(currentVisits);
      },
      (error) => {
        console.error("Error reading visits:", error);
      },
    );

    // Check if this is the first visit in this session
    const hasVisitedThisSession = sessionStorage.getItem("hasVisited");

    if (!hasVisitedThisSession) {
      // Increment visits atomically
      get(visitsRef)
        .then((snapshot) => {
          const currentVisits = snapshot.val() || 0;
          return set(visitsRef, currentVisits + 1);
        })
        .then(() => {
          sessionStorage.setItem("hasVisited", "true");
        })
        .catch((error) => {
          console.error("Error incrementing visits:", error);
        });
    }

    return () => unsubscribe();
  }, []);

  return (
    <div className="profile-visits">
      <FaEye className="visits-icon" />
      <span>{visits.toLocaleString()} visits</span>
    </div>
  );
};

export default ProfileVisits;
