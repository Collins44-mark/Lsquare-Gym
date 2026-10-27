import { Plan, Registration, Member, Payment } from './types';

export const PLANS: Plan[] = [
  { id: 'gym', name: 'Gym Only', price: 45000, period: 'month', features: ['Access to gym floor','Weights & cardio','Locker room'] },
  { id: 'premium', name: 'Premium', price: 75000, period: 'month', features: ['Gym + Pool','Personal training 2x/mo','Sauna access'] },
  { id: 'family', name: 'Family', price: 120000, period: 'month', features: ['2 adults + kids','All facilities','Priority booking'] },
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
