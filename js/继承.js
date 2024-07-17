1、原型链继承
// 定义父类型  
function SuperType(name) {  
    this.name = name;  
    this.colors = ["red", "blue", "green"];  
}  
  
SuperType.prototype.sayName = function() {  
    console.log(this.name);  
};  
  
// 定义子类型  
function SubType(name, age) {  
    // // 调用父类型构造函数  
    // SuperType.call(this, name);  
    this.age = age;  
}  
  
// 继承父类型的方法和属性  
SubType.prototype = new SuperType(); // 注意：这里会调用SuperType构造函数，可能导致不必要的属性创建  
  
// 修正构造函数的指向  
SubType.prototype.constructor = SubType;  
  
// 添加新的方法  
SubType.prototype.sayAge = function() {  
    console.log(this.age);  
};  
  
// 实例化子类型  
var instance = new SubType("Nicholas", 29);  
  
// 访问父类型的方法  
instance.sayName(); // "Nicholas"  
  
// 访问子类型的方法  
instance.sayAge(); // 29  
  
// 访问父类型的属性  
console.log(instance.colors); // ["red", "blue", "green"]  
  
// 修改实例的colors属性，这会影响到所有实例，因为所有实例共享同一份colors属性  
instance.colors.push("black");  
  
var anotherInstance = new SubType("Greg", 27);  
console.log(anotherInstance.colors); // ["red", "blue", "green", "black"]

2、构造函数继承
// 父类  
function Parent(name, age) {  
    this.name = name;  
    this.age = age;  
}  
  
// 子类  
function Child(name, age, sex) {  
    // 调用父类构造函数，继承父类的属性  
    Parent.call(this, name, age);  
    // 定义子类特有的属性  
    this.sex = sex;  
}  
  
// 实例化子类  
var child1 = new Child("Alice", 10, "female");  
console.log(child1.name); // 输出: Alice  
console.log(child1.age);  // 输出: 10  
console.log(child1.sex);  // 输出: female

3、组合继承
// 父类  
function Parent(name) {  
    this.name = name; // 父类的实例属性  
    this.sayHello = function() { // 父类的方法，虽然这里作为实例方法定义，但通常我们会将其放在原型上  
        console.log('Hello, my name is ' + this.name);  
    }  
}  
  
// 注意：在实际应用中，我们通常会将方法定义在原型上，而不是直接在构造函数中定义，  
// 这样做可以避免每个实例都创建相同方法的副本，减少内存占用。  
// 但为了展示组合继承，这里暂时将其保留在构造函数中。  
  
// 父类的一个额外方法，通常放在原型上  
Parent.prototype.eat = function() {  
    console.log(this.name + ' is eating.');  
};  
  
// 子类  
function Child(name, age) {  
    // 调用父类的构造函数，继承父类的实例属性  
    Parent.call(this, name);  
  
    // 定义子类特有的实例属性  
    this.age = age;  
  
    // 注意：这里没有再次调用Parent构造函数来继承方法，  
    // 因为方法将通过原型链继承，稍后会设置子类的原型。  
}  
  
// 设置子类的原型为父类的一个实例，从而继承父类的方法  
Child.prototype = new Parent(); // 注意：这里通常不是最佳实践，因为它调用了Parent的构造函数但没有传递参数  
// 更好的做法是：  
Child.prototype = Object.create(Parent.prototype); // 创建一个父类原型的空对象副本  
Child.prototype.constructor = Child; // 修正constructor的指向  
  
// 可以在子类原型上添加子类特有的方法  
Child.prototype.growUp = function() {  
    this.age++;  
    console.log(this.name + ' is now ' + this.age + ' years old.');  
};  
  
// 测试组合继承  
var child1 = new Child('Alice', 10);  
child1.sayHello(); // 继承自父类的方法  
child1.eat(); // 继承自父类原型的方法  
child1.growUp(); // 子类特有的方法  
  
console.log(child1.age); // 11，子类特有的实例属性  
  
// 注意：虽然这个例子展示了组合继承的基本用法，  
// 但它并不是组合继承的最佳实践，因为我们在设置子类原型时调用了Parent构造函数，  
// 这可能导致不必要的属性或方法的创建（如果Parent构造函数中有额外的逻辑）。  
// 使用Object.create(Parent.prototype)是更好的选择。

继承方式	                           原理	                                                  优点	                                                                                    缺点
原型链继承	   将子类的原型设置为父类的一个实例	                             - 方法复用性好，所有实例共享父类的方法，减少内存占用	                  - 引用类型属性会被所有实例共享，修改一个实例的属性会影响其他实例
构造函数继承	 在子类的构造函数中通过call()或apply()方法调用父类的构造函数	   - 每个实例都有自己独立的属性副本，避免了引用类型属性的共享问题         	- 方法不能通过原型链继承，每个实例都会创建父类方法的一份副本，导致内存占用增加
组合继承	     结合原型链继承和构造函数继承的优点	                           - 灵活性高，可读性和可维护性好
