import { PhoneScheme } from '../services/PhoneScheme';

// λ ooh baby ;)
export class RuntimeInstance {
    private psi: any;
    private errorHandler: (error: any) => void;
    private outputHandler: (output: any) => void;

    constructor() {
        this.psi = PhoneScheme.Intrepreter((e, state) => {
            this.errorHandler(e);
        });
    }

    /**
     * Function to handle runtime errors
     * @param errorHandler Event handler for errors
     */
    onError(errorHandler: (error: any) => void): void {
        this.errorHandler = errorHandler;
    }

    /**
     * Function to handle stdout
     * @param outputHandler Output handler for the environment
     */
    onOutput(outputHandler: (output: string) => void): void {
        this.outputHandler = outputHandler;
    }

    /**
     * Runs the given script in the environment
     * @param script Script to be run
     */
    runScript(script: string): void {
        this.psi.evaluate(script, (result) => {});
    }




    /**
     * Terminates the runtime environment
     */
    destroy() {
        delete this.psi;
    }

}