import unittest
from twosixsolution import removeDuplicates

class TestStringMethods(unittest.TestCase):

    def test_removeDuplicates(self):
        nums = [0,0,1,1,1,2,2,3,3,4]
        self.assertEqual(removeDuplicates(nums), 5)

if __name__ == '__main__':
    unittest.main()
