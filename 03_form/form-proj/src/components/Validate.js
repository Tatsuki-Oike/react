import { useForm } from "react-hook-form"

export default function Validate() {

    const defaultValues = {
        name: "",
        number: 0
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues
    })

    const onsubmit = data => console.log(data)
    const onerror = err => console.log(err)

    return (
      <div className="mb-3"> 

        <h3 className="mt-5"> 4 Formのバリデーション </h3>
        <form className="mb-3" onSubmit={handleSubmit(onsubmit, onerror)} noValidate>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" 
                    name="name" placeholder="Enter your name"
                    {...register("name", {
                        required: "名前を入力してください",
                        maxLength: {
                            value: 10,
                            message: "名前は10文字以内にしてください"
                        }
                    })}
                    />
            </div>
            {
                errors.name ? 
                <div className="alert alert-danger">{errors.name?.message}</div>
                :
                null
            }

            <div className="mb-3">
                <label htmlFor="number" className="form-label">Number</label>
                <input type="number" className="form-control" id="number" 
                    name="number" placeholder="Enter your number"
                    {...register("number", {
                        required: "数字を入力してください",
                        min: {
                            value: 0,
                            message: "数字は0以上を入力してください"
                        },
                        validate: {
                            even: (value, formValues) => {
                                if (value % 2 === 1){
                                    return "偶数を入力してください"
                                }
                                return true
                            }
                        }
                    })}
                    />
            </div>
            {
                errors.number ? 
                <div className="alert alert-danger">{errors.number?.message}</div>
                :
                null
            }

            <button type="submit" className="btn btn-primary mb-3">
                    Submit
            </button>
        </form>

      </div>
    );
  }
  