import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ValidationHelpers{
    IsEmpty(value){
        if(value.length===0){
            return true
        }else{
            return false
        }
    };
    SuccessToast(msg){
        toast.success(msg)

    };
    ErrorToast(msg){
        toast.error(msg)
        
    }
    
    
}

export const {IsEmpty,SuccessToast,ErrorToast }= new ValidationHelpers()