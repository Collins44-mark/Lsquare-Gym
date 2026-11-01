import { Plan, Registration, Member, Payment } from './types';

export const PLANS: Plan[] = [
  { id: 'daily', name: 'Daily Package', price: 10000, period: 'day', features: ['Gym access','Weights & cardio'] },
  { id: 'week', name: 'One Week Package (Gym Only)', price: 35000, period: 'week', features: ['Gym access','Weights & cardio','Locker room'] },
  { id: 'ten-gym', name: 'Ten Day Package (Gym Only)', price: 65000, period: '10 days', features: ['Gym access','Weights & cardio','Locker room'] },
  { id: 'ten-swim', name: 'Ten Day Package (Swimming & Gym)', price: 90000, period: '10 days', features: ['Gym + Pool','Weights & cardio','Locker room'] },
  { id: 'monthly-gym', name: 'Monthly Package (Gym Only)', price: 120000, period: 'month', features: ['Gym access','Weights & cardio','Locker room'] },
  { id: 'monthly-swim', name: 'Monthly Package (Swimming & Gym)', price: 150000, period: 'month', features: ['Gym + Pool','Weights & cardio','Locker room'] },
  { id: 'couple-gym', name: 'Couple Package (Gym Only)', price: 170000, period: 'month', features: ['2 members','Gym access','Weights & cardio'] },
  { id: 'couple-swim', name: 'Couple Package (Swimming & Gym)', price: 250000, period: 'month', features: ['2 members','Gym + Pool','Weights & cardio'] },
];

const KEY = 'lsgym_data';

function load(): { regs: Registration[]; payments: Payment[]; members: Member[] } {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { regs: [], payments: [], members: [] };
    const parsed = JSON.parse(raw);
    return {
      regs: parsed.regs || [],
      payments: parsed.payments || [],
      members: parsed.members || [],
    };
  } catch { return { regs: [], payments: [], members: [] }; }
}

function save(data: { regs: Registration[]; payments: Payment[]; members: Member[] }) {
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch {}
}

export function addRegistration(reg: Omit<Registration, 'id' | 'status' | 'paymentStatus' | 'createdAt' | 'validUntil'>) {
  const d = load();
  const id = 'reg-' + Date.now();
  const createdAt = new Date().toISOString();
  const validUntil = new Date(Date.now() + 30*24*60*60*1000).toISOString();
  const r: Registration = { ...reg, id, status: 'pending', paymentStatus: 'pending', createdAt, validUntil, planId: reg.planId };
  d.regs.push(r);
  save(d);
  return r;
}

export function getRegistrations() { return load().regs; }

export function confirmPayment(regId: string) {
  const d = load();
  const reg = d.regs.find(r => r.id === regId);
  if (!reg) return null;
  reg.paymentStatus = 'confirmed';
  reg.status = 'active';
  reg.validUntil = new Date(Date.now() + 30*24*60*60*1000).toISOString();
  d.payments.push({ id: 'pay-' + Date.now(), registrationId: regId, amount: PLANS.find(p=>p.id===reg.planId)?.price || 0, status: 'confirmed', confirmedAt: new Date().toISOString() });
  d.members.push({ id: reg.id, name: reg.name, email: reg.email, phone: reg.phone, planId: reg.planId, active: true, validUntil: reg.validUntil });
  save(d);
  return reg;
}

export function getMembers() { return load().members; }
export function getPayments() { return load().payments; }
export function getPlans() { return PLANS; }
