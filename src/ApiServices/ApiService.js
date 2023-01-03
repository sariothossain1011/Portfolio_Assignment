import axios from 'axios';
// https://professionalwebsite-server.vercel.app/api/v1/
const API = "https://professionalwebsite-server.vercel.app/api/v1"
// COMMENT
export const ContactApi=async(subject,name,email,comment)=>{
    let URL = `${API}/contact`
    let PostBody = {
        subject:subject,
        name:name,
        email:email,
        comment:comment,
    }
    return await axios.post(URL,PostBody).then((Result)=>{
        // alert(Result)
        if(Result.status === 200){
            return true
        }
    }).catch((error)=>{
        // console.log(error)
        return false
    })
}

//BLOGS
export const GetBlog=async()=>{
    let URL =`${API}/getBlog` ;
    return await axios.get(URL).then((Result)=>{
        if(Result.status === 200){
            // console.log(Result.data['data'])
            return Result.data['data']
        }
    }).catch((error)=>{
        // console.log(error)
        return false
    })
}
//PORTFOLIO
export const GetPortfolio=async()=>{
    let URL = `${API}/getPortfolio` ;
    return await axios.get(URL).then((Result)=>{
        // alert(JSON.stringify(Result))
        if(Result.status === 200){
            // console.log(Result.data['data'])
            return Result.data['data']
        }
    }).catch((error)=>{
        // console.log(error)
        return false
    })

}







