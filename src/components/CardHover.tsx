"use client";

import { ReactNode } from "react";

interface CardHoverProps {
  children: ReactNode;
}

export function CardHover({ children }: CardHoverProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#5419CB] to-[#C4A7E3] rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500" />
      <div className="relative hover-lift rounded-3xl transition-all duration-500">
        {children}
      </div>
    </div>
  );
}