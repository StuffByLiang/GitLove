import { RuntimeInstance } from "../classes/core/RuntimeInstance";

window['runtimeEnvironment'] = new RuntimeInstance();

const RuntimeEnvironment = window['runtimeEnvironment'];

export default RuntimeEnvironment;