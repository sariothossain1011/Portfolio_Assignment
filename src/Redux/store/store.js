import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settings-slice";
import portfoliosReducer from "../state-slice/portfolios-slice";
import blogsReducer from "../state-slice/blogs-slice";
export default configureStore ({
    reducer:{
        settings:settingsReducer,
        portfolios:portfoliosReducer,
        blogs:blogsReducer,
    }
})