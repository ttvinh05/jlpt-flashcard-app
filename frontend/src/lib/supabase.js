import { createClient } from '@supabase/supabase-js';

// Đọc 2 chìa khóa cổng từ file .env mà ông đã thiết lập lúc nãy
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Kiểm tra phòng hờ xem file .env có bị đặt sai tên hay thiếu biến không
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Lỗi: Thiếu hoặc cấu hình sai biến môi trường trong file .env rồi cha nội ơi!');
}

// Khởi tạo client kết nối tối cao và export ra để các component khác tái sử dụng
export const supabase = createClient(supabaseUrl, supabaseAnonKey);