import { useRouteError, Link } from "react-router";
import { Button } from "@/components/ui/button";

const GlobalErrorBoundary = () => {
  const error = useRouteError();

  let errorMessage = "Đã có lỗi hệ thống xảy ra. Vui lòng thử lại sau!";

  if (error?.status === 404) {
    errorMessage = error.data || "Trang bạn tìm kiếm không tồn tại!";
  }

  return (
    <main className="flex flex-col items-center justify-center text-zinc-400 bg-zinc-950 h-screen font-sans">
      <h1 className="text-4xl font-bold text-white mb-2">Oops!</h1>

      <p className="text-lg font-medium mb-6 text-zinc-400 max-w-md text-center">
        {errorMessage}
      </p>

      <Button asChild variant="outline" className="rounded-full">
        <Link to="/">Quay về trang chủ</Link>
      </Button>
    </main>
  );
};

export default GlobalErrorBoundary;
