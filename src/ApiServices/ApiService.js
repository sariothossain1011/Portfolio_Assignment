import axios from 'axios';
import store from '../Redux/store/store';
import { HideLoader, ShowLoader } from '../Redux/state-slice/settings-slice';
import { ErrorToast } from '../Helpers/Validation';
import { SetPortfolioView, SetPortfoliosList } from '../Redux/state-slice/portfolios-slice';
import { BASE_URL } from '../Helpers/config';
import { SetBlogView, SetBlogsList } from '../Redux/state-slice/blogs-slice';


// https://professionalwebsite-server.vercel.app/api/v1/
// const API = "https://professionalwebsite-server.vercel.app/api/v1"

// COMMENT
export const ContactApi=async(subject,name,email,comment)=>{
    let URL = `${BASE_URL}/contact`
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
    let URL =`${BASE_URL}/getBlog` ;
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

//PORTFOLIOS GET 
export async function GetPortfoliosRequest() {
    try {
        store.dispatch(ShowLoader())
        let URL = `${BASE_URL}getPortfolios`
        const response = await axios.get(URL)
        store.dispatch(HideLoader())
        if (response.status === 200 && response.data['status'] === "success") {
            // console.log(response.data['data']+"api")
            store.dispatch(SetPortfoliosList(response.data['data']))
            // if (result.data['data'][0]['Rows'].length > 0) {
            //     // store.dispatch(SetBrandList(result.data['data'][0]['Rows']))
            //     // store.dispatch(SetBrandListTotal(result.data['data'][0]['Total'][0]['count']))
            // } else {
            //     // store.dispatch(SetBrandList([]))
            //     // store.dispatch(SetBrandListTotal(0))
            //     ErrorToast("No Data Found")
            // }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}

export async function GetSinglePortfolioRequest(id) {
    try {
        store.dispatch(ShowLoader())
        let URL = `${BASE_URL}portfolioGetByID/${id}`
        const response = await axios.get(URL)
        store.dispatch(HideLoader())
        if (response.status === 200 && response.data['status'] === "success") {
            store.dispatch(SetPortfolioView(response.data['data']))
            // if (result.data['data'][0]['Rows'].length > 0) {
            //     // store.dispatch(SetBrandList(result.data['data'][0]['Rows']))
            //     // store.dispatch(SetBrandListTotal(result.data['data'][0]['Total'][0]['count']))
            // } else {
            //     // store.dispatch(SetBrandList([]))
            //     // store.dispatch(SetBrandListTotal(0))
            //     ErrorToast("No Data Found")
            // }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}

//PORTFOLIOS GET 
export async function GetBlogsRequest() {
    try {
        store.dispatch(ShowLoader())
        let URL = `${BASE_URL}getBlogs`
        const response = await axios.get(URL)
        store.dispatch(HideLoader())
        if (response.status === 200 && response.data['status'] === "success") {
            // console.log(response.data['data']+"api")
            store.dispatch(SetBlogsList(response.data['data']))
            // if (result.data['data'][0]['Rows'].length > 0) {
            //     // store.dispatch(SetBrandList(result.data['data'][0]['Rows']))
            //     // store.dispatch(SetBrandListTotal(result.data['data'][0]['Total'][0]['count']))
            // } else {
            //     // store.dispatch(SetBrandList([]))
            //     // store.dispatch(SetBrandListTotal(0))
            //     ErrorToast("No Data Found")
            // }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}

export async function GetSingleBlogRequest(id) {
    try {
        store.dispatch(ShowLoader())
        let URL = `${BASE_URL}blogGetByID/${id}`
        const response = await axios.get(URL)
        store.dispatch(HideLoader())
        if (response.status === 200 && response.data['status'] === "success") {
            store.dispatch(SetBlogView(response.data['data']))
            // if (result.data['data'][0]['Rows'].length > 0) {
            //     // store.dispatch(SetBrandList(result.data['data'][0]['Rows']))
            //     // store.dispatch(SetBrandListTotal(result.data['data'][0]['Total'][0]['count']))
            // } else {
            //     // store.dispatch(SetBrandList([]))
            //     // store.dispatch(SetBrandListTotal(0))
            //     ErrorToast("No Data Found")
            // }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}


