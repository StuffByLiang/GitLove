import { RuntimeInstance } from "../classes/core/RuntimeInstance";
import { DrawingLibrary } from "../classes/lib/Drawing";

window['runtimeEnvironment'] = new RuntimeInstance();

const RuntimeEnvironment: RuntimeInstance = window['runtimeEnvironment'];

export default RuntimeEnvironment;