export default function footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <span>Ⓒ</span>
      {year} #VANLIFE
    </footer>
  );
}
