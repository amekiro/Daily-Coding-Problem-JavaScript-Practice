# Daily Coding Problem Practice

## Abstract
Daily Coding Problem sends a coding problem every day. This repository will be used to store all files used to complete the problem.

## How to test JavaScript code
1. Node.js and a command line application such as GitBash is required to test the code.
2. As I practice with additional prompts from Daily Coding Problem, I'll add additional files to this repository. The next section lists the prompts I work on, which also lists the corresponding file number.
3. Once the directory containing this README is selected, run "$node [file number].js" in the command line. [file number] corresponds to the number listed in the next section for that file.
4. Upon running the command, a result should show in the command line for the corresponding prompt based on the test value(s) used.

## Daily Problems
### #824 (Easy)
**Prompt:** Write a program to merge two binary trees. Each node in the new tree should hold a value equal to the sum of the values of the corresponding nodes of the input trees.

If only one input tree has a node in a given position, the corresponding node in the new tree should match that input node.

**Strategy:** Starting at the parent node, I'll follow the breadth-first search traversal. Although there is no difference between breadth-first and depth-first search traversal, breadth-first search traversal will make it easier for me to keep track of which nodes have been covered.

**Questions** for prompt:
- Is the structure between the two trees equivalent with different values? I will assume they are **not** equivalent.
- If one tree has 2 branches while another tree has 1 branch, does the 1 only correspond to the first branch? I will assume branches correspond to the branch in the same relation from the left (branch A has nodes 1 and 2 while branch B only has node 2. Branch A node 1 will not be combined with any other nodes, while branch As and Bs node 2 will be combined for the final tree)
- Are the values for the tree nodes only numbers? I will assume nodes only contain numbers.

***

### #825 (Easy)
**Prompt:** Given a sorted list of integers, square the elements and give the output in sorted order.

For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

**Strategy:**
1. Map array to new array with i being i * i
2. Sort list

**Questions** for prompt:
- This appears to be a very straightforward prompt. There are no questions at this time.

***

### #827 (Medium)
**Prompt:** You are the technical director of WSPT radio, serving listeners nationwide. For simplicity's sake we can consider each listener to live along a horizontal line stretching from 0 (west) to 1000 (east).

Given a list of N listeners, and a list of M radio towers, each placed at various locations along this line, determine what the minimum broadcast range would have to be in order for each listener's home to be covered.

For example, suppose listeners = [1, 5, 11, 20], and towers = [4, 8, 15]. In this case the minimum range would be 5, since that would be required for the tower at position 15 to reach the listener at position 20.

**Strategy:**

Sample:
- listeners = [1, 5, 7, 11, 20]
- towers = [4, 8, 15]

*Visual Structure:*

|             | 1 | 2 | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10   | 11   | 12   | 13   | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
|------------:|:-:|:-:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:----:|:----:|:----:|:----:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Listeners   | X |   |     |     | X   |     |  X  |     |     |      | X    |      |      |    |    |    |    |    |    | X  |
| Cover Range | A | A | A/B | A/B | A/B | A/B | A/B | A/B | A/B | B/C  | B/C  | B/C  | B/C  | C  | C  | C  | C  | C  | C  | C  |
| Towers      |   |   |     | A   |     |     |     | B   |     |      |      |      |      |    | C  |    |    |    |    |    |

Tower C needs a range of 5 to reach 20.

*Computational Strategy:*
For each tower:
1. Identify last listener:
    - If there is no tower before the current tower and there is a listener, get the distance from the first listener, eg. distance from first tower at 4 from first participant at 1: 3
    - If there is a tower before the current tower,
        - If there is only one listener between the current and prior towers, get the distance from the listener, eg. distance from third tower at 15 from fourth participant at 11: 4
        - If there are two listeners between the current and prior towers, get the distance from the last listener before halfway between the current and prior towers, eg. distance from second tower at 8 from third participant at 7: 1
2. Identify later listener:
    - Repeat Identify last listener, but instead of before the current tower, search after the current tower
    - Examples for prior repeats:
        - Distance from last tower at 15 from last participant at 20: 5
        - Distance from second tower at 8 from fourth participant at 11: 3
        - Distance from first tower at 4 from second participant at 5: 1
3. Identify distance needed from each tower in each direction:
    - If there are no towers before/after the current tower, use the current distance:
        - First tower: 3
        - Last tower (third): 5
    - If there was one participant between two towers, use the smallest distance:
        - Second tower: 3
    - If there were two participants between two towers, use the largest distance:
        - First/second tower: 1
4. In the list of distances, the largest value is the minimum distance

*Test calculation:*

Tower A (4):
- Last Listener
    - No tower before A: Distance from first listener (1) = **3**
- Next Listener
    - Tower B is after A
        - There are more than 1 listeners between A and B
            - Halfway between A and B is 6:
                - Distance from last listener at or before 6 (5) to A = **1**
                - Distance from first listener at or after 6 (5) to B = **1**
        - Maximum distance between the 2 towers and their listeners is **1**

Tower B (8):
- Last Listener
    - Tower A is before B: This has been covered with the prior tower and there is no need to repeat this        
- Next Listener
    - Tower C is after B:
        - There is 1 listener between B and C:
            - Distance from listener (11) to B = **3**
            - Distance from listener (11) to C = **4**
        - Minimum distance between the 2 towers and their listener is **3**

Tower C (15):
- Last Listener
    - Tower B is before C: This has been covered with the prior tower and there is no need to repeat this
- Next Listener
    - No tower after C: Distance from last listener (20) = **5**

After calculating all towers, the minimum distance for each tower are [3, 1, 3, 5] with 5 as the greatest value.

***

## #829 (Hard)

**Prompt:** Create a data structure that performs all the following operations in O(1) time:

- plus: Add a key with value 1. If the key already exists, increment its value by one.
- minus: Decrement the value of a key. If the key's value is currently 1, remove it.
- get_max: Return a key with the highest value.
- get_min: Return a key with the lowest value.

**Strategy:**
- In order to remove the need to repeatedly write an object, I'll use a factory function to create each test case along with the plus, minus, get_max and get_min methods
- Create a function to run through all methods in order to reduce repetition for testing. There will also need a timer to see how long the process takes to check timing.
    - plus: method with 1 parameter (key)
        1. Check if key already exists
            - If key exists, increment value by one
            - If key doesn't exist, add key with value of 1
    - minus: method with 1 parameter (key)
        1. Check if the key exists
            - If key does not exist, do nothing
            - If key exists
                - If value is 1, then remove the option
                - If the value is not 1, decrement it by one
    - get_max: method with 0 parameters
        1. Compile all keys as an array of keys and values and get the maximum value
    - get_min: method with 0 parameters
        1. Compile all keys as an array of keys and values and get the minimum value