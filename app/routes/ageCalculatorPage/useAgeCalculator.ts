// app/routes/ageCalculatorPage/useAgeCalculator.ts

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

import { calculateAge } from './ageCalculator.utils';
import type { FormData, CalculationResult } from './ageCalculator.utils';

export const useAgeCalculator = () => {
  const [age, setAge] = useState<CalculationResult>(null);

  const formMethods = useForm<FormData>({
    defaultValues: { day: undefined, month: undefined, year: undefined }
  });

  const { setError, clearErrors } = formMethods;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleAgeSubmit: SubmitHandler<FormData> = (data) => {
    clearErrors(); // Limpa erros antigos
    const result = calculateAge(data, today);

    if (result) {
      setAge(result);
    } else {
      setAge(null);
      // Lógica de erro genérico se a data for inválida (ex: 31/02/2000) ou futura
      setError('day', { type: 'manual', message: 'Data inválida' });
      setError('month', { type: 'manual', message: ' ' }); // Mensagem vazia para aplicar o estilo de erro
      setError('year', { type: 'manual', message: ' ' }); // sem exibir texto repetido
    }
  };

  return {
    age,
    formMethods,
    handleAgeSubmit,
    today
  };
};