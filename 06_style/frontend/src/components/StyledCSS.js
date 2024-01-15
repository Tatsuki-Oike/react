import css from "./StyledCSS.css";

export default function StyledCSS() {
  return (
    <div>
      <style jsx>{css}</style>
      <h4 className="StyledCSS">StyledCSS.js StyledCSSクラス</h4>
    </div>
  );
}
