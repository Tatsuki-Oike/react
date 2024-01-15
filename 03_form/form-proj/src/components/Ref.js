import {useRef} from "react"

export default function Form() {

    const name = useRef(null)
    const email = useRef(null)

    const submitForm = (e) => {
        e.preventDefault()
        console.log(name.current.value, email.current.value)
    }

    return (
      <div className="mb-3"> 

        <h3 className="mt-5"> 2 Formの入力 (useRef) </h3>
        <form className="mb-3">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" 
                    name="name" ref={name} placeholder="Enter your name"/>
            </div>
            
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email"
                    name="email" ref={email} placeholder="Enter your email"/>
            </div>

            <button type="submit" className="btn btn-primary mb-3"
                    onClick={submitForm}>
                    Submit
            </button>
        </form>

      </div>
    );
  }
  