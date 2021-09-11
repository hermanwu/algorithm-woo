class Shape:
    def draw(self):
        raise NotImplementedError('This method should have implemented.')


class Triangle(Shape):
    # Write your code here
    def draw(self):
        print "  /\\"
        print " /  \\"
        print "/____\\"


class Rectangle(Shape):
    # Write your code here
    def draw(self):
        print " ----"
        print "|    |"
        print " ----"


class Square(Shape):
    # Write your code here
    def draw(self):
        print " ----"
        print "|    |"
        print "|    |"
        print " ----"


class ShapeFactory:
    def getShape(self, shapeType):
        if shapeType == "Triangle":
            return Triangle()
        elif shapeType == "Rectangle":
            return Rectangle()
        elif shapeType == "Square":
            return Square()
        else:
            return None
