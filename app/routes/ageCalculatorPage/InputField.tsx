import type { FieldError, UseFormRegister } from 'react-hook-form';
import type { FormData } from './ageCalculator.utils';

type Props = {
  name: keyof FormData;
  label: string;
  placeholder: string;
  error?: FieldError;
  validationRules: object;
  register: UseFormRegister<FormData>;
};

export default function InputField({ name, label, placeholder, error, validationRules, register }: Props) {
  return (
    <div className="flex flex-col p-2 flex-grow">
      <label className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${error ? 'text-red-500' : 'text-slate-500'}`}>
        {label}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        className={`p-3 border text-black text-xl md:text-2xl font-bold rounded-lg w-full focus:outline-none transition-colors ${error ? 'border-red-500' : 'border-slate-300 focus:border-purple-600'}`}
        {...register(name, validationRules)}
      />
      {error && <span className="text-red-500 text-xs italic mt-1">{error.message}</span>}
    </div>
  );
}