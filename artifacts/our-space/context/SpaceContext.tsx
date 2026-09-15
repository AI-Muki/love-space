import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

export type Activity = { id: string; title: string; category: string; status: 'Want to do' | 'Planned' | 'Done'; date?: string };
export type Place = { id: string; name: string; note?: string; latitude: number; longitude: number; imageUri?: string };
export type Memory = { id: string; title: string; note?: string; date: string; location?: string; imageUri?: string };
export type Match = { id: string; game: string; you: number; partner: number; date: string };
export type SpaceData = { yourName: string; partnerName: string; togetherSince: string; anniversary?: string; activities: Activity[]; places: Place[]; memories: Memory[]; matches: Match[] };

const initial: SpaceData = { yourName: '', partnerName: '', togetherSince: '', anniversary: '', activities: [], places: [], memories: [], matches: [] };
const STORAGE_KEY = 'our-space-data-v1';
const makeId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

type SpaceContextValue = SpaceData & {
  ready: boolean;
  addActivity: (value: Omit<Activity, 'id'>) => void;
  addPlace: (value: Omit<Place, 'id'>) => void;
  addMemory: (value: Omit<Memory, 'id'>) => void;
  addMatch: (value: Omit<Match, 'id'>) => void;
  updateProfile: (value: Partial<Pick<SpaceData, 'yourName' | 'partnerName' | 'togetherSince' | 'anniversary'>>) => void;
};
const SpaceContext = createContext<SpaceContextValue | null>(null);

export function SpaceProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SpaceData>(initial);
  const [ready, setReady] = useState(false);
  useEffect(() => { AsyncStorage.getItem(STORAGE_KEY).then((stored) => { if (stored) setData({ ...initial, ...JSON.parse(stored) }); }).finally(() => setReady(true)); }, []);
  useEffect(() => { if (ready) AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }, [data, ready]);
  const value = useMemo<SpaceContextValue>(() => ({
    ...data, ready,
    addActivity: (value) => setData((prev) => ({ ...prev, activities: [...prev.activities, { ...value, id: makeId() }] })),
    addPlace: (value) => setData((prev) => ({ ...prev, places: [...prev.places, { ...value, id: makeId() }] })),
    addMemory: (value) => setData((prev) => ({ ...prev, memories: [...prev.memories, { ...value, id: makeId() }] })),
    addMatch: (value) => setData((prev) => ({ ...prev, matches: [...prev.matches, { ...value, id: makeId() }] })),
    updateProfile: (value) => setData((prev) => ({ ...prev, ...value })),
  }), [data, ready]);
  return <SpaceContext.Provider value={value}>{children}</SpaceContext.Provider>;
}
export function useSpace() { const value = useContext(SpaceContext); if (!value) throw new Error('useSpace must be used inside SpaceProvider'); return value; }