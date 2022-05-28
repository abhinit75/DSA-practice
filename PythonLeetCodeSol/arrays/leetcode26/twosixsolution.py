# Question 26 - Remove Duplicates from a sorted array

'''
Remove duplicates and return the size of the array.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
'''

# First Attempt

def removeDuplicatesFirst(nums):
    for i in range(len(nums)):
        for j in range(len(nums)):
            if nums[i] == nums[j] and i != j:
                nums[j] = "r"

    for i in range(len(nums)):
        if(nums[i] == "r"):
            nums.pop(i)
            nums.append("r")

    try:
        while True:
            nums.remove("r")
    except ValueError:
        pass    


def removeDuplicates(nums):
    i = 0;
    for j in range(1, len(nums)):
        if (nums[i] != nums[j]):
            i += 1
            nums[i] = nums[j]
    
    return i + 1

# Test Cases
