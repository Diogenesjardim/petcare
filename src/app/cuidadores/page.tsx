import type { Metadata } from "next";
import { Suspense } from "react";
import { ResultsView } from "@/components/search/ResultsView";

export const metadata: Metadata = {
  title: "Cuidadores disponíveis",
  description:
    "Compare cuidadores verificados por avaliação, distância, serviços e preço. Veja o perfil completo antes de agendar.",
};

function ResultsFallback() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="h-8 w-64 animate-pulse rounded bg-line" />
      <div className="mt-6 flex flex-col gap-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-44 animate-pulse rounded-2xl bg-white" />
        ))}
      </div>
    </div>
  );
}

export default function CuidadoresPage() {
  return (
    <Suspense fallback={<ResultsFallback />}>
      <ResultsView />
    </Suspense>
  );
}
