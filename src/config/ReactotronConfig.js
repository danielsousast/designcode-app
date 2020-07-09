import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

const reactotron = Reactotron.configure({ name: "Desgin Code" })
  .use(reactotronRedux())
  .useReactNative()
  .connect(); //Don't forget about me!

export default reactotron;
