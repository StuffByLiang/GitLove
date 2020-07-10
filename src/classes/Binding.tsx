export class Binding {
    private functionName: string;
    private eventHandler: (arg: Array<string>) => any;

    constructor(
        functionName: string,
        eventHandler: (arg: Array<string>) => any
    ) {
        this.functionName = functionName;
        this.eventHandler = eventHandler;
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

}