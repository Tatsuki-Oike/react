export default function Event() {

    const eventInfo = (e) => {
        console.log(e)
    }

    return (
        <div className="my-4">
            <h2> Event </h2>
            <button className="btn btn-primary" onClick={eventInfo}>
                Event Info 
            </button>
        </div>
    );
  }
  