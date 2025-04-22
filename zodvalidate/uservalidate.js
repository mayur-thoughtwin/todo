const {z} = require("zod")

const signupValidateby_zod = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }).max(15, { message: "Name can't exceed 50 characters" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }).max(20, { message: "Password can't exceed 20 characters" }),
    role: z.enum(["manager", "developer"]).default("developer"),
    mobile: z.string().length(10, { message: "Mobile number should be 10 digit" }),
    email: z.string().email({ message: "Email is not valid" }),
    organisation_id: z.string().max(30, { message: "Organisation name can't exceed 100 characters" })
})

const loginValidateby_zod = z.object({
    email: z.string().email({ message: "Email is not valid" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }).max(20, { message: "Password can't exceed 20 characters" })
})
module.exports = {
    signupValidateby_zod,
    loginValidateby_zod
}