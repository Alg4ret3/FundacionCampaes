import { CategoryID } from "../types";

export const getCategoryStyles = (category: CategoryID) => {
  switch (category) {
    case 'educativa':
      return {
        primary: '#3B82F6', // Blue 500 - more vibrant but professional
        text: 'text-blue-600',
        textHeavy: 'text-blue-800',
        bg: 'bg-blue-50',
        bgSoft: 'bg-blue-50/80',
        cardBg: 'bg-blue-50/30',
        iconAreaBg: 'bg-blue-100',
        border: 'border-blue-200',
        borderDeep: 'border-blue-300',
        gradient: 'from-blue-500 to-blue-600',
        lightGradient: 'from-blue-500/20 to-blue-600/10',
        glow: 'shadow-blue-500/20',
        shadowColor: '#3B82F6'
      };
    case 'cultural':
      return {
        primary: '#F59E0B', // Amber 500
        text: 'text-amber-600',
        textHeavy: 'text-amber-800',
        bg: 'bg-amber-50',
        bgSoft: 'bg-amber-50/80',
        cardBg: 'bg-amber-50/30',
        iconAreaBg: 'bg-amber-100',
        border: 'border-amber-200',
        borderDeep: 'border-amber-300',
        gradient: 'from-amber-500 to-amber-600',
        lightGradient: 'from-amber-500/20 to-amber-600/10',
        glow: 'shadow-amber-500/20',
        shadowColor: '#F59E0B'
      };
    case 'ambiental':
      return {
        primary: '#10B981', // Emerald 500
        text: 'text-emerald-600',
        textHeavy: 'text-emerald-800',
        bg: 'bg-emerald-50',
        bgSoft: 'bg-emerald-50/80',
        cardBg: 'bg-emerald-50/30',
        iconAreaBg: 'bg-emerald-100',
        border: 'border-emerald-200',
        borderDeep: 'border-emerald-300',
        gradient: 'from-emerald-500 to-emerald-600',
        lightGradient: 'from-emerald-500/20 to-emerald-600/10',
        glow: 'shadow-emerald-500/20',
        shadowColor: '#10B981'
      };
    case 'social':
      return {
        primary: '#F43F5E', // Rose 500
        text: 'text-rose-600',
        textHeavy: 'text-rose-800',
        bg: 'bg-rose-50',
        bgSoft: 'bg-rose-50/80',
        cardBg: 'bg-rose-50/30',
        iconAreaBg: 'bg-rose-100',
        border: 'border-rose-200',
        borderDeep: 'border-rose-300',
        gradient: 'from-rose-500 to-rose-600',
        lightGradient: 'from-rose-500/20 to-rose-600/10',
        glow: 'shadow-rose-500/20',
        shadowColor: '#F43F5E'
      };
    case 'productiva':
      return {
        primary: '#8B5CF6', // Violet 500
        text: 'text-violet-600',
        textHeavy: 'text-violet-800',
        bg: 'bg-violet-50',
        bgSoft: 'bg-violet-50/80',
        cardBg: 'bg-violet-50/30',
        iconAreaBg: 'bg-violet-100',
        border: 'border-violet-200',
        borderDeep: 'border-violet-300',
        gradient: 'from-violet-500 to-violet-600',
        lightGradient: 'from-violet-500/20 to-violet-600/10',
        glow: 'shadow-violet-500/20',
        shadowColor: '#8B5CF6'
      };
    default:
      return {
        primary: '#37B6BA',
        text: 'text-primario',
        textHeavy: 'text-secundario',
        bg: 'bg-primario/10',
        bgSoft: 'bg-primario/5',
        cardBg: 'bg-primario/5',
        iconAreaBg: 'bg-primario/20',
        border: 'border-primario/20',
        borderDeep: 'border-primario/40',
        gradient: 'from-primario to-secundario',
        lightGradient: 'from-primario/20 to-secundario/10',
        glow: 'shadow-primario/20',
        shadowColor: '#37B6BA'
      };
  }
};
