import InputField from 'app/routes/ageCalculatorPage/InputField';
import type { UseFormReturn, SubmitHandler } from 'react-hook-form';
import type { FormData } from './ageCalculator.utils';

type Props = {
  formMethods: UseFormReturn<FormData>;
  onSubmit: SubmitHandler<FormData>;
  maxYear: number;
};

export default function AgeCalculatorForm({ formMethods, onSubmit, maxYear }: Props) {
  const { register, handleSubmit, formState: { errors } } = formMethods;

  const validationRules = {
    day: { required: 'Campo obrigatório', min: { value: 1, message: 'Dia inválido' }, max: { value: 31, message: 'Dia inválido' }, valueAsNumber: true },
    month: { required: 'Campo obrigatório', min: { value: 1, message: 'Mês inválido' }, max: { value: 12, message: 'Mês inválido' }, valueAsNumber: true },
    year: { required: 'Campo obrigatório', min: { value: 1900, message: 'Ano inválido' }, max: { value: maxYear, message: 'Deve ser no passado' }, valueAsNumber: true }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-row space-x-2 md:space-x-4">
        <InputField name="day" label="DIA" placeholder="DD" register={register} error={errors.day} validationRules={validationRules.day} />
        <InputField name="month" label="MÊS" placeholder="MM" register={register} error={errors.month} validationRules={validationRules.month} />
        <InputField name="year" label="ANO" placeholder="AAAA" register={register} error={errors.year} validationRules={validationRules.year} />
      </div>

      <div className="relative flex items-center my-8">
        <hr className="w-full border-t border-slate-300" />
        <button type="submit" className="bg-purple-600 rounded-full p-4 hover:bg-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors absolute right-1/2 translate-x-1/2 md:right-0 md:translate-x-0" aria-label="Calcular idade">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
        </button>
      </div>
    </form>
  );
}