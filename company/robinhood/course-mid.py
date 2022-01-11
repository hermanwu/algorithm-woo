'''
Course Schedule Mid
Each course at our university has at most one prerequisite that must be taken first. No two courses share a prerequisite. There is only one path through the program.
Write a function that takes a list of (prerequisite, course) pairs, and returns the name  of the course that the student will be taking when they are halfway through their program. (If a track has an even number of courses, and therefore has two "middle" courses,   you should return the first one.)

Sample input 1: (arbitrarily ordered)
const prereqs_courses1 = [
    ["Foundations of Computer Science", "Operating Systems"],
    ["Data Structures", "Algorithms"],
    ["Computer Networks", "Computer Architecture"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Computer Architecture", "Data Structures"],
    ["Software Design", "Computer Networks"]
]
In this case, the order of the courses in the program is:
    Software Design
    Computer Networks
    Computer Architecture
    Data Structures
    Algorithms
    Foundations of Computer Science
    Operating Systems
Sample output 1:
    "Data Structures"
Sample input 2:
prereqs_courses2 = [
    ["Data Structures", "Algorithms"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Foundations of Computer Science", "Logic"]
]
Sample output 2:
    "Algorithms"
Sample input 3:
prereqs_courses3 = [
    ["Data Structures", "Algorithms"],
]
Sample output 3:
    "Data Structures"
Complexity analysis variables:
n: number of pairs in the input
'''

def mid_course(relations):
  dag = dict(relations)
  start = dag.keys() - dag.values()
  res = []
  for course in start:
    mid = (len(dag.keys()) + 1 - 1) // 2
    while mid > 0:
      course = dag.get(course, None)
      mid -= 1
    if course:
      res.append(course)
  return res

# Tests
prereqs_courses1 = [
    ["Foundations of Computer Science", "Operating Systems"],
    ["Data Structures", "Algorithms"],
    ["Computer Networks", "Computer Architecture"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Computer Architecture", "Data Structures"],
    ["Software Design", "Computer Networks"],
    ["New Software", "Operating Systems"]
]
prereqs_courses2 = [
    ["Data Structures", "Algorithms"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Foundations of Computer Science", "Logic"]
]
prereqs_courses3 = [
    ["Data Structures", "Algorithms"],
]
# print(mid_course(prereqs_courses1))
# print(mid_course(prereqs_courses2))
# print(mid_course(prereqs_courses3))


'''
Follow Up：Course Schedule (multi Path)
Students may decide to take different "tracks" or sequences of courses in the Computer Science curriculum. There may be more than one track that includes the same course, but each student follows a single linear track from a "root" node to a "leaf" node. 
In the graph below, their path always moves left to right.
Write a function that takes a list of (source, destination) pairs, and returns the name of all of the courses that the students could be taking when they are halfway through their track of courses.
Sample input 1:
all_courses_1 = [
    ["Logic", "COBOL"],
    ["Data Structures", "Algorithms"],
    ["Creative Writing", "Data Structures"],
    ["Algorithms", "COBOL"],
    ["Intro to Computer Science", "Data Structures"],
    ["Logic", "Compilers"],
    ["Data Structures", "Logic"],
    ["Graphics", "Networking"],
    ["Networking", "Algorithms"],
    ["Creative Writing", "System Administration"],
    ["Databases", "System Administration"],
    ["Creative Writing", "Databases"],
    ["Intro to Computer Science", "Graphics"],
]
Sample output 1 (in any order):
    ["Data Structures", "Networking", "Creative Writing", "Databases"]
All paths through the curriculum (midpoint *highlighted*):
Intro to C.S. -> Graphics -> *Networking* -> Algorithms -> Cobol
Intro to C.S. -> *Data Structures* -> Algorithms -> COBOL
Intro to C.S. -> *Data Structures* -> Logic -> COBOL
Intro to C.S. -> *Data Structures* -> Logic -> Compiler
Creative Writing -> *Databases* -> System Administration
*Creative Writing* -> System Administration
Creative Writing -> *Data Structures* -> Algorithms -> COBOL
Creative Writing -> *Data Structures* -> Logic -> COBOL
Creative Writing -> *Data Structures* -> Logic -> Compilers


Sample input 2:
all_courses_2 = [
    ["Course_3", "Course_7"],
    ["Course_0", "Course_1"],
    ["Course_1", "Course_2"],
    ["Course_2", "Course_3"],
    ["Course_3", "Course_4"],
    ["Course_4", "Course_5"],
    ["Course_5", "Course_6"],
]
Sample output 2 (in any order):
["Course_2", "Course_3"]

Complexity analysis variables:
n: number of pairs in the input
'''

from collections import defaultdict

def mid_course_2(relations):
  def load(r):
    res = defaultdict(list)
    for pair in r:
      res[pair[0]].append(pair[1])
    return res

  dag = load(relations)
  key_set = dag.keys()
  value_set = set([item for x in dag.values() for item in x])
  start = key_set - value_set
  res = set()
  def dfs(root, track):
    if root not in dag or len(dag[root]) == 0:
      res.add(track[(len(track) - 1) // 2])
    for course in dag[root]:
      track.append(course)
      dfs(course, track)
      track.pop()

  for course in start:
    dfs(course, [course])
  return list(res)

# Tests
all_courses_1 = [
    ["Logic", "COBOL"],
    ["Data Structures", "Algorithms"],
    ["Creative Writing", "Data Structures"],
    ["Algorithms", "COBOL"],
    ["Intro to Computer Science", "Data Structures"],
    ["Logic", "Compilers"],
    ["Data Structures", "Logic"],
    ["Graphics", "Networking"],
    ["Networking", "Algorithms"],
    ["Creative Writing", "System Administration"],
    ["Databases", "System Administration"],
    ["Creative Writing", "Databases"],
    ["Intro to Computer Science", "Graphics"],
]
all_courses_2 = [
    ["Course_3", "Course_7"],
    ["Course_0", "Course_1"],
    ["Course_1", "Course_2"],
    ["Course_2", "Course_3"],
    ["Course_3", "Course_4"],
    ["Course_4", "Course_5"],
    ["Course_5", "Course_6"],
]
print(mid_course_2(all_courses_1))
print(mid_course_2(all_courses_2))
