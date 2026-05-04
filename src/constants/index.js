export const STATUS_CONFIG = {
  pending:    { label: "Хүлээгдэж буй", color: "#d97706", bg: "#fef3c7", icon: "⏳" },
  accepted:   { label: "Хүлээн авсан",  color: "#2563eb", bg: "#dbeafe", icon: "✓"  },
  picked_up:  { label: "Авсан",          color: "#7c3aed", bg: "#ede9fe", icon: "📦" },
  on_the_way: { label: "Замдаа",         color: "#ea580c", bg: "#ffedd5", icon: "🚀" },
  delivered:  { label: "Хүргэсэн",       color: "#16a34a", bg: "#dcfce7", icon: "✅" },
  cancelled:  { label: "Цуцалсан",       color: "#dc2626", bg: "#fee2e2", icon: "✕"  },
};

export const VEHICLE_TYPES = ["Мотоцикл", "Машин", "Хөнгөн ачааны машин"];

export const DELIVERY_STEPS = ["pending", "accepted", "picked_up", "on_the_way", "delivered"];

export const DRIVER_STATUS_NEXT = {
  accepted:   { next: "picked_up",  label: "📦 Авсан гэж тэмдэглэх"    },
  picked_up:  { next: "on_the_way", label: "🚀 Замдаа гэж тэмдэглэх"   },
  on_the_way: { next: "delivered",  label: "✅ Хүргэсэн гэж тэмдэглэх" },
};

export const PAYMENT_METHODS = ["Бэлэн мөнгө", "Картаар", "QPay"];
export const ITEM_SIZES      = ["Жижиг", "Дунд", "Том", "Маш том"];
