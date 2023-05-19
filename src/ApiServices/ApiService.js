import axios from 'axios';
import store from '../Redux/store/store';
import { HideLoader, ShowLoader } from '../Redux/state-slice/settings-slice';
import { ErrorToast, SuccessToast } from '../Helpers/Validation';
import { SetPortfolioView, SetPortfoliosList } from '../Redux/state-slice/portfolios-slice';
import { BASE_URL } from '../Helpers/config';
import { SetBlogView, SetBlogsList } from '../Redux/state-slice/blogs-slice';



//PORTFOLIOS GET 
export async function GetPortfoliosRequest() {
    try {
        store.dispatch(ShowLoader())
        let URL = `${BASE_URL}getPortfolios`
        const response = await axios.get(URL)
        store.dispatch(HideLoader())
        if (response.status === 200 && response.data['status'] === "success") {
            store.dispatch(SetPortfoliosList(response.data['data']))
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
            store.dispatch(SetBlogsList(response.data['data']))
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
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}


export async function CVDownloadRequest() {
    try {
        store.dispatch(ShowLoader())
        let URL = `${BASE_URL}cvDownload`
        const response = await axios.get(URL)
        store.dispatch(HideLoader())
        if (response.status === 200 && response.data['status'] === "success") {
            SuccessToast("CV Download Successfully")
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}