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