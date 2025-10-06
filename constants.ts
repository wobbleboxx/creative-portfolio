
import { Category } from './types';

export const CATEGORY_STYLES: { [key in Category]: { bg: string; text: string; border: string } } = {
  [Category.GAME]: {
    bg: 'bg-indigo-100',
    text: 'text-indigo-800',
    border: 'border-indigo-300',
  },
  [Category.MUSIC]: {
    bg: 'bg-pink-100',
    text: 'text-pink-800',
    border: 'border-pink-300',
  },
  [Category.WRITING]: {
    bg: 'bg-sky-100',
    text: 'text-sky-800',
    border: 'border-sky-300',
  },
  [Category.OTHER]: {
    bg: 'bg-slate-100',
    text: 'text-slate-800',
    border: 'border-slate-300',
  },
};
