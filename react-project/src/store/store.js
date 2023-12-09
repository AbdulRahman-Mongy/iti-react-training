import { legacy_createStore as createStore } from "redux"
import reducer from "./reduces"

const store = createStore(reducer)
export default store
