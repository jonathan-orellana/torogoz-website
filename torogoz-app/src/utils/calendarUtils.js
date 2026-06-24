const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function formatDisplayDay(dateString) {
  return dateString.split('-')[2] ?? '';
}

export function formatDisplayMonth(dateString) {
  const monthIndex = parseInt(dateString.split('-')[1], 10) - 1;
  return MONTH_NAMES[monthIndex] ?? '';
}

export function formatTime12Hour(time24) {
  if (!time24) return '';
  const [hourStr, minutes = '00'] = time24.split(':');
  const hour = parseInt(hourStr, 10);
  const period = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${period}`;
}

export function formatTimeRange(startTime, endTime) {
  const start = formatTime12Hour(startTime);
  if (!start) return '';
  const end = formatTime12Hour(endTime);
  return end ? `${start} – ${end}` : start;
}

function toCompactDateTime(dateString, timeString) {
  const digitsOnly = (s) => (s ?? '').replace(/\D/g, '');
  const dateDigits = digitsOnly(dateString);
  const timeDigits = digitsOnly(timeString).padEnd(4, '0').slice(0, 4);
  return `${dateDigits}T${timeDigits}00`;
}

function escapeIcsValue(value) {
  return String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

export function buildGoogleCalendarUrl({ title, date, startTime, endTime, location, description }) {
  const start = toCompactDateTime(date, startTime);
  const end = toCompactDateTime(date, endTime || startTime);
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${start}/${end}`,
    location: location ?? '',
    details: description ?? '',
    ctz: 'America/New_York',
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function buildIcsBlob({ title, date, startTime, endTime, location, description }) {
  const start = toCompactDateTime(date, startTime);
  const end = toCompactDateTime(date, endTime || startTime);
  const stamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Torogoz Chapter//Events//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:torogoz-${start}@lsu`,
    `DTSTAMP:${stamp}`,
    `DTSTART;TZID=America/New_York:${start}`,
    `DTEND;TZID=America/New_York:${end}`,
    `SUMMARY:${escapeIcsValue(title)}`,
    `LOCATION:${escapeIcsValue(location)}`,
    `DESCRIPTION:${escapeIcsValue(description)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
}

export function downloadIcsFile(blob, eventTitle) {
  const filename = (eventTitle ?? 'event').replace(/[^a-z0-9]+/gi, '-').toLowerCase() + '.ics';
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
