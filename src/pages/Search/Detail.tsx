import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type Item = {
  id: number;
  title: string;
  text: string;
};

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/search.json")
      .then((res) => res.json())
      .then((data: Item[]) => {
        const found = data.find((d) => d.id === Number(id));
        if (!found) setError("Không tìm thấy dữ liệu");
        setItem(found || null);
      })
      .catch(() => setError("Không thể tải dữ liệu"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-6">Đang tải...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="min-h-screen text-[#995900] bg-[#f7f2e7] flex justify-center items-start p-6">
      <div className="bg-orange-100 p-6 rounded-xl shadow-md w-full max-w-4xl">
        <div className="flex items-center mb-4 relative">
          {/* Button quay lại */}
          <button
            onClick={() => navigate(-1)}
            className="bg-[#d0a66e] px-3 py-1 rounded"
          >
            ←
          </button>

          {/* ID + Title */}
          <div className="absolute left-1/2  transform -translate-x-1/2 flex items-center gap-2 font-bold text-lg">
            <span className="bg-[#d0a66e]  px-3 py-1 rounded-lg">
              {item?.id}
            </span>
            <h2>{item?.title}</h2>
          </div>
        </div>

        {/* Nội dung */}
        <div className="leading-relaxed whitespace-pre-line">
  {item?.text}
</div>
      </div>
    </div>
  );
}
