export default function StudentCard({ prenom, note }){
  const couleurCard = note >= 10 ? "bg-white" : "bg-red-400";
  return(
    <div className={`rounded-xl ${couleurCard} p-5 shadow`}>
      <h3 className="text-lg font-bold">
        {prenom}
      </h3>
      <p className="mt-2 text-slate-500">
        Note : {note} / 20
      </p>
    </div>
  );
}