export function formatDate(iso?: string) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function formatShortDate(iso?: string) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(iso));
}

export function formatTime(iso?: string) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function formatRelativeDate(iso?: string) {
  if (!iso) return "";

  const target = new Date(iso);
  const now = new Date();
  const sameDay = target.toDateString() === now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);

  if (sameDay) return formatTime(iso);
  if (target.toDateString() === yesterday.toDateString()) return "Wczoraj";
  if (target.toDateString() === tomorrow.toDateString()) return "Jutro";

  return new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(target);
}

export function formatScheduleLabel(iso?: string) {
  if (!iso) return "";

  const relative = formatRelativeDate(iso);
  const time = formatTime(iso);

  if (relative === "Dzisiaj" || relative === "Wczoraj" || relative === "Jutro") {
    return `${relative}, ${time}`;
  }

  const now = new Date();
  const target = new Date(iso);
  if (target.toDateString() === now.toDateString()) {
    return `Dzisiaj, ${time}`;
  }

  return formatShortDate(iso);
}

export function getGreeting(hour = new Date().getHours()) {
  if (hour >= 5 && hour < 17) return "Dzień dobry";
  // if (hour >= 17 && hour < 22) return 'Dobry wieczór'
  return "Dobry wieczór";
}

export function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
