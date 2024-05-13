import { Loader2 } from "lucide-react";

const loading = () => {
  return (
    <div className="w-full h-screen flex-center text-purple-500">
      <Loader2 className="animate-spin size-7" />
    </div>
  );
};

export default loading;
