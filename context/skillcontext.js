import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const SkillContext = createContext();

// 2. Create the Provider component
export function SkillProvider({ children }) {
  const [skill, setSkill] = useState('Python'); // Default skill

  return (
    // FIX: Must be "SkillContext" (uppercase) to match const name
    <SkillContext.Provider value={{ skill, setSkill }}>
      {children}
    </SkillContext.Provider>
  );
}

// 3. Create a custom hook to use the context
export function useSkill() {
  const context = useContext(SkillContext);
  if (context === undefined) {
    // I also fixed a typo here: "SkillProvider"
    throw new Error('useSkill must be within a SkillProvider');
  }
  return context;
}