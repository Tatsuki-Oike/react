import {useState} from "react"

export default function Form() {

    const [form, setForm] = useState({
        name: "",
        fruit: "",
        animal: "",
    })

    const changeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(form.name, form.fruit, form.animal)
    }

    return (
      <div className="mb-3"> 

        <h3 className="mt-5"> 3 Formの入力 (色々なフォーム) </h3>
        <form className="mb-3">
            {/* テキスト */}
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" 
                    name="name" value={form.name} placeholder="Enter your name"
                    onChange={changeForm}/>
            </div>
            
            {/* 選択ボックス */}
            <div className="mb-3">
                <label htmlFor="fruit" className="form-label">Select Box</label>
                <select className="form-select" id="fruit" name="fruit"
                    value={form.fruit} onChange={changeForm}>
                <option value="apple">りんご</option>
                <option value="orange">みかん</option>
                <option value="banana">バナナ</option>
                </select>
            </div>

            {/* ラジオボタン */}
            <div className="mb-3">
                <label className="form-label">Radio Buttons</label>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="animal" id="cat" 
                    value="cat" checked={form.animal === "cat"} onChange={changeForm}/>
                <label className="form-check-label" htmlFor="cat">
                    Cat
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="animal" id="dog" 
                    value="dog" checked={form.animal === "dog"} onChange={changeForm}/>
                <label className="form-check-label" htmlFor="dog">
                    Dog
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="animal" id="hamster" 
                    value="hamster" checked={form.animal === "hamster"} onChange={changeForm}/>
                <label className="form-check-label" htmlFor="hamster">
                    Hamster
                </label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary mb-3"
                    onClick={submitForm}>
                    Submit
            </button>
        </form>

        <h3> Formの入力結果 </h3>
        <p> Name: {form.name} </p>
        <p> Fruit: {form.fruit} </p>
        <p> Animal: {form.animal} </p>

      </div>
    );
  }
  