export type Plan = { id: string; name: string; price: number; period: string; features: string[] };
export type Registration = { id: string; name: string; email: string; phone: string; planId: string; status: 'pending' | 'active' | 'expired'; paymentStatus: 'pending' | 'confirmed'; createdAt: string; validUntil: string; checkedIn?: boolean };
export type Member = { id: string; name: string; email: string; phone: string; planId: string; active: boolean; validUntil: string };
export type Payment = { id: string; registrationId: string; amount: number; status: 'pending' | 'confirmed'; confirmedAt?: string };
