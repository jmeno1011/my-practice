import { useEffect, useState } from "react";
import { getFetch } from "../../lib/api/api";

export default function ExampleGetAPIComponent() {
  const [getData, setGetData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFetch("/posts");
        setGetData(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occured");
        }
      }
    };
    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Exmaple Data</h3>
      <ul>
        {getData.map((item: GetData) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

type GetData = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  UserId: number
};
