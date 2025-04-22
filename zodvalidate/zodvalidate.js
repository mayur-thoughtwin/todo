const {z}= require("zod")
const add_taskValidate = z.object({
    title:z.string().min(1,{message:"Title cannot be empty"}),
    description:z.string().min(2,{message:"this is my customized msg "})
})

const assign_taskValidate_zod=z.object({
    title:z.string().min(1,{message:"Title cannot be empty"}),
    description:z.string().min(2,{message:"Description cannot be empty"})

})

module.exports={add_taskValidate,
    assign_taskValidate_zod
}