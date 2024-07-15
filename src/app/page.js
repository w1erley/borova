import Landing from "./components/Landing";
import { baseBackendUrl } from "../../utils/constants";

import axios from "axios";

async function getMembers() {
  try {
    const {data} = await axios.get(`${baseBackendUrl}/members`);
    return data.members;
  }
  catch {
    throw new Error("Pacan")
  }
}

export default async function Home() {
  const members = await getMembers();

  return (
    <main className="min-h-screen">
      <Landing members={members}/>
    </main>
  );
}
