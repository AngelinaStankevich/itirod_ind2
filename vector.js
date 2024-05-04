// Определение класса Vector
class Vector {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  // Метод для вычисления суммы двух векторов
  plus(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y, this.z + vector.z);
  }

  // Метод для вычисления скалярного произведения двух векторов
  scalar(vector) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  }

  // Свойство только для чтения для подсчета длины вектора
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  // Переопределение метода toString()
  toString() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }

  // Переопределение метода valueOf()
  valueOf() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
}

export default Vector; // Экспорт класса Vector по умолчанию
