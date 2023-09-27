import { IntegerList } from './IntegerList.js';
import { SortedIntList } from './hidden/SortedIntListLibrary.js'

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

class InheritanceSortedIntList extends SortedIntList {
  private totalAdded: number = 0;
  
  /**
   * Adds an integer to the list.
   *
   * @param num The integer to be added.
   * @returns True if the integer is added successfully, false otherwise.
   */
  override add(num: number): boolean {
    const added = super.add(num);
    if (added) {
      this.totalAdded++;
    }
    return added;
  }

  /**
   * Adds all integers from the provided IntegerList to the list.
   *
   * @param list The IntegerList containing elements to be added.
   * @returns True if any element is added successfully, false otherwise.
   */
  override addAll(list: IntegerList): boolean {
    let added = false;
    for (let i = 0; i < list.size(); i++) {
      added = this.add(list.get(i)) || added;
    }
    return added;
  }

  getTotalAdded(): number {
    return this.totalAdded;
  }
}

export { InheritanceSortedIntList }
