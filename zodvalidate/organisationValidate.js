const { string } = require("joi")
const {z} = require("zod")

const setupOrganisationValidate= z.object({
    name:z.string().min(1,{message:"Name of your organisation cannot be empty"}),
    tagline:z.string().min(1,{message:"Tagline of your organisation cannot be empty"}),
    mobile:z.string().min(10,{message:"Mobile number should be 10 digit"}).max(10,{message:"Mobile number should be 10 digit"}),
    email:z.string().email({message:"Email is not valid"}),
    password:z.string().min(6,{message:"Password should be minimum 6 character"})
})

module.exports={
    setupOrganisationValidate
}