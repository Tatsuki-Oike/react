import {useState} from "react"

export default function Form() {

    const [form, setForm] = useState({
        name: "",
        email: "",
    })

    const changeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(form.name, form.email)
    }

    return (
      <div className="mb-3"> 

        <h3 className="mt-5"> 1 Formの入力 (useSate) </h3>
        <form className="mb-3">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" 
                    name="name" value={form.name} placeholder="Enter your name"
                    onChange={changeForm}/>
            </div>
            
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email"
                    name="email" value={form.email} placeholder="Enter your email"
                    onChange={changeForm}/>
            </div>

            <button type="submit" className="btn btn-primary mb-3"
                    onClick={submitForm}>
                    Submit
            </button>
        </form>

        <h3> Formの入力結果 </h3>
        <p> Name: {form.name} </p>
        <p> Email: {form.email} </p>

      </div>
    );
  }
  