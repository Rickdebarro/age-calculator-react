type Props = {
  years: number | string;
  months: number | string;
  days: number | string;
};

export default function AgeDisplay({ years, months, days }: Props) {
  return (
    <div className="flex flex-col mt-16 md:mt-4">
      <p className="text-5xl md:text-8xl font-extrabold italic text-black">
        <span className="text-purple-600">{years}</span> anos
      </p>
      <p className="text-5xl md:text-8xl font-extrabold italic text-black">
        <span className="text-purple-600">{months}</span> meses
      </p>
      <p className="text-5xl md:text-8xl font-extrabold italic text-black">
        <span className="text-purple-600">{days}</span> dias
      </p>
    </div>
  );
}