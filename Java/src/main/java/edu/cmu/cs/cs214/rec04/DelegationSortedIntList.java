package edu.cmu.cs.cs214.rec04;

/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

public class DelegationSortedIntList implements IntegerList {
    private SortedIntList sortedIntList;
    private int totalAdded;

    /**
     * Constructs a new DelegationSortedIntList.
     * Initializes a SortedIntList instance for delegation and sets totalAdded to 0.
     */
    public DelegationSortedIntList() {
        sortedIntList = new SortedIntList();
        totalAdded = 0;
    }

    /**
     * Adds the specified integer to the list while maintaining ascending order.
     * Delegates the operation to the SortedIntList instance and tracks added elements.
     *
     * @param num an integer to be added to the list
     * @return true if the list is changed as a result of the call
     */
    @Override
    public boolean add(int num) {
        boolean added = sortedIntList.add(num);
        if (added) {
            totalAdded++;
        }
        return added;
    }

    /**
     * Adds all integers from the specified IntegerList to this list while maintaining ascending order.
     * Delegates the operation to the SortedIntList instance and tracks added elements.
     *
     * @param list IntegerList containing elements to be added to the list
     * @return true if the list changed as a result of the call
     */
    @Override
    public boolean addAll(IntegerList list) {
        boolean addedAll = sortedIntList.addAll(list);
        if (addedAll) {
            totalAdded += list.size();
        }
        return addedAll;
    }

    /**
     * Returns the integer at the specified position in this list.
     *
     * @param index index of the element to return
     * @return the element at the specified position in this list
     */
    @Override
    public int get(int index) {
        return sortedIntList.get(index);
    }

    /**
     * Removes the first occurrence of the specified element from the list.
     *
     * @param num an integer to be removed from the list, if present
     * @return true if an element was removed as a result of this call
     */
    @Override
    public boolean remove(int num) {
        return sortedIntList.remove(num);
    }

    /**
     * Removes from the list all of its elements that are contained in the specified IntegerList.
     *
     * @param list IntegerList containing elements to be removed from the list
     * @return true if the list changed as a result of the call
     */
    @Override
    public boolean removeAll(IntegerList list) {
        return sortedIntList.removeAll(list);
    }

    /**
     * Returns the number of elements in this list.
     *
     * @return number of elements in the list
     */
    @Override
    public int size() {
        return sortedIntList.size();
    }

    /**
     * Returns the total count of attempted element insertions since creation.
     *
     * @return the total count of attempted element insertions
     */
    public int getTotalAdded() {
        return totalAdded;
    }
}