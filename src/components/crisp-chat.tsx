"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5b8acca6-9d4b-4e52-b75b-9b787794001b");
  }, []);

  return null;
};
