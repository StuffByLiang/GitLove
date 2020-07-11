/**
 * @author Devam Sisodraker <devam@alumni.ubc.ca>
 */

export class Binding {
    private functionName: string;
    private eventHandler: (arg: Array<string>) => any;
    private minArgs: number = 0;
    private maxArgs: number = 0;
  
    constructor(
      functionName: string,
      eventHandler: (arg: Array<string>) => any,
      minArgs: number,
      maxArgs: number
    ) {
      this.functionName = functionName;
      this.eventHandler = eventHandler;
      this.minArgs = minArgs;
      this.maxArgs = maxArgs;
    }
  
    /**
     * Returns the function name
     * @return The function name
     */
    public getFunctionName(): string {
      return this.functionName;
    }
  
    /**
     * Returns the event handler
     * @return The event handler
     */
    public getEventHandler(): (arg: Array<string>) => any {
      return this.eventHandler;
    }
  
    /**
     * Returns the min args
     * @return The min args
     */
    public getMinArgs() {
      return this.minArgs;
    }
  
    /**
     * Returns the max args
     * @return The max args
     */
    public getMaxArgs() {
      return this.maxArgs;
    }
  
  }
  