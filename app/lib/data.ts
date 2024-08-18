import picksData from '../components/data/picksData.json';

export interface Pick {
  id: number;
  title: string;
  image: string;
  imageCreator: string;
  likes: string;
  creator: string;
  eth: string;
  time: string;
}

export async function getPick(id: number): Promise<Pick | undefined> {
  const { picks } = picksData as { picks: Pick[] };
  return picks.find((pick) => pick.id === id);
}