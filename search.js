function search() {
  const engine = document.getElementById('engine').value;
  const query = encodeURIComponent(document.getElementById('query').value.trim());
  if (query) window.location.href = engine + query;
}