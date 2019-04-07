'''
[LintCode] 431 Connected Component in Undirected Graph 解题报告
Description
Find the number connected component in the undirected graph. Each node in the graph contains a label and a list of its neighbors. (a connected component (or just component) of an undirected graph is a subgraph in which any two vertices are connected to each other by paths, and which is connected to no additional vertices in the supergraph.)

Notice
Each connected component should sort by label.


Clarification
Learn more about representation of graphs


Example
Given graph:

A------B  C
  \         |   |
    \       |   |
      \     |   |
        \   |   |
          D   E
Return {A,B,D}, {C,E}. Since there are two connected component which is {A,B,D}, {C,E}

'''

class Solution:
  def connectedSet(self, nodes):
    if not nodes:
      return []
    
    components = []
    visited = set()
    for node in nodes:
      if node.label not in visited:
        self.find(node, [], components, True, visited)

    return components

  def findComponent(self, node, component, components, isAddToComponents, visited):
    component.append(node.label)
    visited.add(node.label)
    for nei in node.neighbors:
      if nei.label not in visited:
        self.findComponent(nei, component, components, False, visited)

    if isAddToComponents:
      component.sort()
      print('component', component)
      component.append(component)