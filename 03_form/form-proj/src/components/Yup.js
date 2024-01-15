import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"

const schema = yup.object({
    name : yup
        .string()
        .required("名前を入力してください")
        .max(10, "名前は10文字以内にしてください"),
    number: yup
        .number()
        .required("数字を入力してください")
        .min(0, "数字は0以上を入力してください")
        .test(
            "even",
            "偶数を入力してください",
            value => {
                if (value % 2 === 1){
                    return false
                }
                return true
            }
        )
})

export default function Yup() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            number: 0
        },
        resolver: yupResolver(schema)
    })

    const onsubmit = data => console.log(data)
    const onerror = err => console.log(err)

    return (
      <div className="mb-3"> 

        <h3 className="mt-5"> 5 Formのバリデーション (yup) </h3>
        <form className="mb-3" onSubmit={handleSubmit(onsubmit, onerror)} noValidate>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" 
                    name="name" placeholder="Enter your name"
                    {...register("name")}
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
                    {...register("number")}
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
  