/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, Landmark, Scale, FileText, ArrowLeft, 
  HelpCircle, Sparkles, ShieldCheck, GraduationCap, Building2, 
  BookOpen, Clock, Activity, MessageSquare, ArrowUpRight, Megaphone,
  ChevronRight, ChevronLeft, Calendar, Volume2, Shield, PhoneCall, Check, Link,
  Compass, Newspaper, ZoomIn, ZoomOut, RotateCcw
} from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import NewsTicker from './components/NewsTicker';
import AboutSection from './components/AboutSection';
import MediaCenter from './components/MediaCenter';
import ContactSection from './components/ContactSection';
import CitizenGuide from './components/CitizenGuide';
import ComplaintsSection from './components/ComplaintsSection';
import AdminPanel from './components/AdminPanel';
import NewsDetail from './components/NewsDetail';

import { newsArticles as staticNewsArticles, staticStats } from './data/staticData';
import { NewsArticle } from './types';
import { 
  ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell 
} from 'recharts';

const THEMES: Record<string, { primary: string; primaryLight: string; gold: string; goldLight: string }> = {
  navy: {
    primary: '#0a1931',
    primaryLight: '#15305b',
    gold: '#d4af37',
    goldLight: '#e6c260',
  },
  green: {
    primary: '#064e3b',
    primaryLight: '#0f766e',
    gold: '#eab308',
    goldLight: '#fef08a',
  },
  maroon: {
    primary: '#500724',
    primaryLight: '#701a75',
    gold: '#d97706',
    goldLight: '#fcd34d',
  },
  stone: {
    primary: '#1e293b',
    primaryLight: '#334155',
    gold: '#f59e0b',
    goldLight: '#fde047',
  }
};

const chartGrowthData = [
  { year: '2020', cases: 1800, toxicology: 4200 },
  { year: '2021', cases: 2500, toxicology: 6800 },
  { year: '2022', cases: 3900, toxicology: 11500 },
  { year: '2023', cases: 5400, toxicology: 16300 },
  { year: '2024', cases: 7200, toxicology: 22000 },
  { year: '2025', cases: 11300, toxicology: 29500 },
  { year: '2026', cases: 14800, toxicology: 35000 },
];

const chartDistributionData = [
  { name: 'فحوصات جنائية واعتداءات', value: 45, count: 6660, color: '#102544' },
  { name: 'استشارات طبية شرعية', value: 25, count: 3700, color: '#f59e0b' },
  { name: 'تشريح ووفيات جنائية', value: 15, count: 2220, color: '#ef4444' },
  { name: 'تحاليل السموم والكيمياء', value: 15, count: 2220, color: '#10b981' },
];

const chartMonthlyData2026 = [
  { month: 'يناير', cases: 950, toxicology: 2200 },
  { month: 'فبراير', cases: 1100, toxicology: 2450 },
  { month: 'مارس', cases: 1250, toxicology: 2800 },
  { month: 'أبريل', cases: 1050, toxicology: 2300 },
  { month: 'مايو', cases: 1350, toxicology: 3100 },
  { month: 'يونيو', cases: 1500, toxicology: 3400 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 border border-gray-250 p-3 rounded-lg shadow-md text-right text-xs select-none">
        <p className="font-bold text-gray-900 mb-1">{label}</p>
        {payload.map((pld: any, index: number) => (
          <p key={`tooltip-item-${pld.dataKey || pld.name || index}`} style={{ color: pld.color || pld.fill }} className="font-bold flex items-center justify-end gap-1.5 mt-1">
            <span>{pld.value.toLocaleString('en-US')}</span>
            <span>{pld.name}:</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// ... (file continues, truncated for brevity in the repository extract)

export default function App() {
  // App component implementation (truncated in this extracted file)
  return <div />;
}
