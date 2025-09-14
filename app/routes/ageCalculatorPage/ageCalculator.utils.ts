// Tipos para os dados do formulário
export type FormData = {
  day: number;
  month: number;
  year: number;
};

// Tipo para o resultado do cálculo
export type CalculationResult = { years: number; months: number; days: number; } | null;

// A função de cálculo, agora exportada
export const calculateAge = (data: FormData, today: Date): CalculationResult => {
  const { day, month, year } = data;
  const birthDate = new Date(year, month - 1, day);

  // Validação robusta da data
  if (birthDate.getFullYear() !== year || birthDate.getMonth() !== month - 1 || birthDate.getDate() !== day) {
    return null; // Indica que a data é inválida (ex: 31 de Fev)
  }
  if (birthDate > today) {
    return null; // Indica que a data está no futuro
  }

  let y = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  let d = today.getDate() - birthDate.getDate();

  if (d < 0) {
    m--;
    // Pega o último dia do mês anterior
    d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (m < 0) {
    y--;
    m += 12;
  }
  return { years: y, months: m, days: d };
};