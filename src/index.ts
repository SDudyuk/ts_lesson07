interface IFigure {
  name: string;
  colorName: string;
  calculateArea(): number;
}

interface IPrint {
  print(): string;
}

interface ICircle extends IFigure {
  radius: number;
}

interface IRectangle extends IFigure, IPrint {
  length: number;
  width: number;
}
interface ISquare extends IFigure, IPrint {
  side: number;
}

interface ITriangle extends IFigure {
  basis: number;
  height: number;
}

abstract class Figure implements IFigure {
  constructor(
    readonly name: string,
    readonly colorName: string
  ) {}

  public abstract calculateArea(): number;
}

class Circle extends Figure implements ICircle {
  static readonly PI = 3.14;
  public radius: number;

  constructor(radius: number, colorName: string) {
    super("circle", colorName);
    this.radius = radius;
  }

  public calculateArea(): number {
    return Circle.PI * this.radius * this.radius;
  }
}

class Rectangle extends Figure implements IRectangle {
  public length: number;
  public width: number;
  protected static FormulaOfArea: string = "AreaOfRectangle = length * width";

  constructor(length: number, width: number, colorName: string) {
    super("rectangle", colorName);
    this.length = length;
    this.width = width;
  }

  public calculateArea(): number {
    return this.length * this.width;
  }

  public print(): string {
    return Rectangle.FormulaOfArea;
  }
}

class Square extends Figure implements ISquare {
  side: number;
  protected static FormulaOfArea: string = "AreaOfSquare = side * side";

  constructor(side: number, colorName: string) {
    super("square", colorName);
    this.side = side;
  }

  public calculateArea(): number {
    return this.side * this.side;
  }

  public print(): string {
    return Square.FormulaOfArea;
  }
}

class Triangle extends Figure implements ITriangle {
  public basis: number;
  public height: number;

  constructor(basisLength: number, heightLength: number, colorName: string) {
    super("triangle", colorName);
    this.basis = basisLength;
    this.height = heightLength;
  }

  public calculateArea(): number {
    return 0.5 * this.basis * this.height;
  }
}

const myCircle = new Circle(5, "red");
const myRectangle = new Rectangle(3, 4, "black");
const mySquare = new Square(5, "red");
const myTriangle = new Triangle(5, 3, "blue");

myCircle.calculateArea();
myRectangle.print();
mySquare.print();
myTriangle.calculateArea();
