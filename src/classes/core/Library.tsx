/**
 * @author Devam Sisodraker <devam@alumni.ubc.ca>
 */

import { Binding } from './Binding';

export class Library {
  private bindings: Array<Binding> = [];

  constructor() {
  }

  /**
   * Returns all bindings
   * @returns Bindings
   */
  public getBindings(): Array<Binding> {
    return this.bindings;
  }

  /**
   * Adds a binding to a library
   * @param binding Binding to be added
   */
  protected addBinding(binding: Binding): void {
    this.bindings.push(binding);
  }

}
