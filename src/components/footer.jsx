export default function footer() {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);
  return (
    <footer className="footer">
      <span>Ⓒ</span>
      {year} #VANLIFE
    </footer>
  );
}
