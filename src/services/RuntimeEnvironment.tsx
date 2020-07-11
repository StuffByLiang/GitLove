import { RuntimeInstance } from "../classes/core/RuntimeInstance";

const runtimeEnvironment = new RuntimeInstance();
window['runtimeEnvironment'] = runtimeEnvironment;
export default runtimeEnvironment;