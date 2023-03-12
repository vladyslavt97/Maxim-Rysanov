import {create} from 'zustand';

export const useStore = create<any>((set: any) => ({
  language: "eng",
  setLanguage: (languageIncoming: string)=> set({ language: languageIncoming })
}));