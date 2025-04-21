const {z}= require("zod")
const add_taskValidate = z.object({
    title:z.string().min(1,{message:"Title cannot be empty"}),
    description:z.string().min(2,{message:"this is my customized msg "})
})

module.exports=add_taskValidate