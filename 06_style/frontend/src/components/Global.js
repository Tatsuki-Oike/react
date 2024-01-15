export default function Global() {
  return (
    <div>
      <style jsx global>{`
      .Global {
        color: gray;
      }
      `}</style>
      <h4 className="Global">
        Global.js Globalクラス
      </h4>
    </div>
  );
}
