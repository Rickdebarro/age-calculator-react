import AgeCalculatorForm from './AgeCalculatorForm';
import AgeDisplay from './AgeDisplay';
import { useAgeCalculator } from './useAgeCalculator';

export default function AgeCalculatorPage() {
  const { age, formMethods, handleAgeSubmit, today } = useAgeCalculator();

  return (
    <div className="bg-slate-100 min-h-screen flex justify-center items-center font-sans p-4">
      <div className="bg-white rounded-3xl rounded-br-[100px] md:rounded-br-[200px] shadow-lg p-6 md:p-12 w-full max-w-sm md:max-w-2xl">
        
        {/* Form Section */}
        <AgeCalculatorForm
          formMethods={formMethods}
          onSubmit={handleAgeSubmit}
          maxYear={today.getFullYear()}
        />

        {/* Age Display Section */ }
        <AgeDisplay
          years={age?.years ?? '--'}
          months={age?.months ?? '--'}
          days={age?.days ?? '--'}
        />

      </div>
    </div>
  );
}