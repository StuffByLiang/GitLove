/**
 * @author Devam Sisodraker <devam@alumni.ubc.ca>
 */

import { Binding } from './Binding';
import { Library } from './Library';

// λ ooh baby ;)
export class RuntimeInstance {
  private psi: any;
  private errorHandler: (error: any) => void = (error) => {
  };
  private outputHandler: (output: any) => void = (output) => {
  };

  constructor() {
    this.reset();
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
    this.psi.evaluate(script, (result) => {
      this.outputHandler(result);
    });
  }

  /**
   * Adds a single binding
   * @param binding Binding to be added
   */
  addBinding(binding: Binding): void {
    const PhoneScheme: any = (window['phonescheme']);
    PhoneScheme.define_libfunc(
      binding.getFunctionName(),
      binding.getMinArgs(),
      binding.getMaxArgs(),
      binding.getEventHandler()
    );
  }

  /**
   *
   * @param bindings
   */
  addLibrary(library: Library): void {
    library
      .getBindings()
      .forEach((binding) => this.addBinding(binding));
  }

  /**
   * Terminates the runtime environment, and creates a fresh one
   */
  reset() {
    const PhoneScheme: any = (window['phonescheme']);
    this.psi = new PhoneScheme.Interpreter((e: any, state: any) => {
        this.errorHandler(e);
    });
  }

}
