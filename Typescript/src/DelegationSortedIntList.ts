/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

import { IntegerList } from "./IntegerList";
import { SortedIntList } from "./hidden/SortedIntListLibrary";

class DelegationSortedIntList implements IntegerList {
  private sortedIntList: SortedIntList;
  private totalAdded: number = 0;

  /**
   * Constructs a new DelegationSortedIntList.
   */
  constructor() {
    this.sortedIntList = new SortedIntList();
  }

  /**
   * Adds an integer to the list.
   *
   * @param num The integer to be added.
   * @returns True if the integer is added successfully, false otherwise.
   */
  add(num: number): boolean {
    this.totalAdded++;
    return this.sortedIntList.add(num);
  }

  /**
   * Adds all integers from the provided IntegerList to the list.
   *
   * @param list The IntegerList containing elements to be added.
   * @returns True if any element is added successfully, false otherwise.
   */
  addAll(list: IntegerList): boolean {
    let added = false;
    for (let i = 0; i < list.size(); i++) {
      added = this.add(list.get(i)) || added;
    }
    return added;
  }

  /**
   * Retrieves the integer at the specified position in the list.
   *
   * @param index The index of the element to retrieve.
   * @returns The element at the specified position in the list.
   */
  get(index: number): number {
    return this.sortedIntList.get(index);
  }

  /**
   * Removes the specified integer from the list.
   *
   * @param num The integer to be removed.
   * @returns True if the integer is removed successfully, false otherwise.
   */
  remove(num: number): boolean {
    return this.sortedIntList.remove(num);
  }

  /**
   * Removes all integers from the provided IntegerList from the list.
   *
   * @param list The IntegerList containing elements to be removed.
   * @returns True if any element is removed successfully, false otherwise.
   */
  removeAll(list: IntegerList): boolean {
    return this.sortedIntList.removeAll(list);
  }

  /**
   * Retrieves the size of the list.
   *
   * @returns The number of elements in the list.
   */
  size(): number {
    return this.sortedIntList.size();
  }

  /**
   * Retrieves the total number of elements added to the list.
   *
   * @returns The total number of elements added to the list.
   */
  getTotalAdded(): number {
    return this.totalAdded;
  }
}

export { DelegationSortedIntList }
