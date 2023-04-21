import { create } from 'zustand'

export const useDialogsState = create(set => ({
  userAuthed: false,
  setUserAuthed: userAuthed => set({ userAuthed })
}))
