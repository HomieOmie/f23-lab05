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

  constructor() {
    this.sortedIntList = new SortedIntList();
  }

  add(num: number): boolean {
    this.totalAdded++;
    return this.sortedIntList.add(num);
  }

  addAll(list: IntegerList): boolean {
    let added = false;
    for (let i = 0; i < list.size(); i++) {
      added = this.add(list.get(i)) || added;
    }
    return added;
  }

  get(index: number): number {
    return this.sortedIntList.get(index);
  }

  remove(num: number): boolean {
    return this.sortedIntList.remove(num);
  }

  removeAll(list: IntegerList): boolean {
    return this.sortedIntList.removeAll(list);
  }

  size(): number {
    return this.sortedIntList.size();
  }

  getTotalAdded(): number {
    return this.totalAdded;
  }
}

export { DelegationSortedIntList }
