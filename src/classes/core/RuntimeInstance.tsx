import { library } from 'ionicons/icons';
import { PhoneScheme } from '../../services/PhoneScheme';
import { Binding } from './Binding';
import { Library } from './Library';

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
     * Adds a single binding
     * @param binding Binding to be added
     */
    addBinding(binding: Binding): void {
        PhoneScheme
    }

    /**
     * 
     * @param bindings 
     */
    addLibrary(library: Library): void  {
        library
            .getBindings()
            .forEach((binding) => this.addBinding(binding));
    }

    /**
     * Terminates the runtime environment, and creates a fresh one
     */
    reset() {
        delete this.psi;
    }

}