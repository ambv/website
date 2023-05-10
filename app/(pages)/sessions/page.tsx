import { fetchConfirmedSubmissions } from "@/lib/pretix";
import { Sessions } from "./sessions";

export default async function SessionsPage() {
  const sessions = await fetchConfirmedSubmissions();

  return (
    <>
      <Sessions sessions={sessions} />
      <div className="h-12"></div>
    </>
  );
}
