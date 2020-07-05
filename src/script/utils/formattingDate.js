export function formattingDate(date) {
  return (new Date(date).toLocaleDateString('ru', {day: 'numeric', month: 'long'})) + ', ' + new Date(date).getFullYear();
}
