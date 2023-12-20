function process(text, enable) {
  arr = text.split('@@')
  s = ''
  for (let i=0; i<arr.length; i++) {
    if (i % 2 == 0) {
      s += arr[i]
    } else {
      if (enable) {
        s += `<span style="color: #0d6efd;">${arr[i]}</span>`
      } else {
        s += arr[i]
      }
    }
  }
  return s
}

function escapeHtml(unsafe)
{
  safe = unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
  return safe
 }