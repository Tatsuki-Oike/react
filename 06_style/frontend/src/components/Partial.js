export default function Partial() {
  return (
    <div>
      <style jsx>{`
      :global(.Partial) {
        color: red;
      }
      .Partial {
        background-color: yellow;
      }
      `}</style>
      <h4 className="Partial">
        Partial.js Partialクラス
      </h4>
    </div>
  );
}
