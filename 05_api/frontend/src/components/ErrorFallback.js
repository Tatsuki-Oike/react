export default function ErrorFallback({ errorMessage, onRetry }) {

  return (
    <div className="my-4">
      <div className="card text-bg-danger">

        <div className="card-header">
          <h5>以下のエラーが発生しました</h5>
        </div>

        <div className="card-body">
          <p>{ errorMessage }</p>
          <button className="btn btn-outline-light" onClick={onRetry}>
            やり直す
          </button>
        </div>

      </div>
    </div>
  );
}
