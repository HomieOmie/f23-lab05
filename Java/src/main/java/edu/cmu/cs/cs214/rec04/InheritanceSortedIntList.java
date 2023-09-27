package edu.cmu.cs.cs214.rec04;

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

public class InheritanceSortedIntList extends SortedIntList {
    private int totalAdded;

    /**
     * Constructs a new InheritanceSortedIntList.
     * Initializes the totalAdded count to 0.
     */
    public InheritanceSortedIntList() {
        totalAdded = 0;
    }

    /**
     * Adds the specified integer to the list while maintaining ascending order.
     * Overrides the add method from the base class (SortedIntList) to track added elements.
     *
     * @param num an integer to be added to the list
     * @return true if the list is changed as a result of the call
     */
    @Override
    public boolean add(int num) {
        boolean added = super.add(num);
        if (added) {
            totalAdded++;
        }
        return added;
    }

    /**
     * Adds all integers from the specified IntegerList to this list while maintaining ascending order.
     * Overrides the addAll method from the base class (SortedIntList) to track added elements.
     *
     * @param list IntegerList containing elements to be added to the list
     * @return true if the list changed as a result of the call
     */
    @Override
    public boolean addAll(IntegerList list) {
        boolean added = false;
        for (int i = 0; i < list.size(); i++) {
            added = this.add(list.get(i)) || added;
        }
        return added;
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