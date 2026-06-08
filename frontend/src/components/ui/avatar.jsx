import { Avatar as AvatarPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Avatar({ className, size = "default", ...props }) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        // Size mặc định là 36px (size-9), bo tròn, có viền kính mờ và hiệu ứng sáng khi hover
        "group/avatar relative flex shrink-0 rounded-full select-none size-9 border border-white/10 cursor-pointer hover:border-white/30 transition-all duration-200",
        // Hỗ trợ sẵn các size khác phòng hờ sau này bạn cần
        "data-[size=lg]:size-12 data-[size=sm]:size-7",
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full rounded-full object-cover",
        className,
      )}
      {...props}
    />
  );
}

function AvatarFallback({ className, ...props }) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        // Màu nền Emerald, hover sáng lên, chữ trắng in đậm như design của bạn
        "flex size-full items-center justify-center rounded-full bg-emerald-600/80 hover:bg-emerald-500 text-zinc-50 font-bold transition-colors text-sm",
        "group-data-[size=sm]/avatar:text-xs",
        className,
      )}
      {...props}
    />
  );
}

// Các component bên dưới (Badge, Group) tôi đã lược bớt class thừa và đồng bộ viền tối màu cho hợp tông Zinc-950
function AvatarBadge({ className, ...props }) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blue-500 text-white ring-2 ring-zinc-950 select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className,
      )}
      {...props}
    />
  );
}

function AvatarGroup({ className, ...props }) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-zinc-950",
        className,
      )}
      {...props}
    />
  );
}

function AvatarGroupCount({ className, ...props }) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-medium text-zinc-300 ring-2 ring-zinc-950",
        "group-has-data-[size=lg]/avatar-group:size-12 group-has-data-[size=sm]/avatar-group:size-7",
        className,
      )}
      {...props}
    />
  );
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
};
