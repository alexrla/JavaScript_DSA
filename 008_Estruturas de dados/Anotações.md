# Estrutura de Dados - JavaScript



### Estruturas de dados - Introdução

- **O porquê de tantas:**
  - **Estruturas de dados diferentes se destacam em coisas diferentes. Alguns são altamente especializados, enquanto outros (como arrays) são usados de forma mais geral;**



#### Classes - ES2015

- **Classe: modelo utilizado para criar objetos com propriedades e métodos pré-definidos;**
- **São necessárias porque a partir delas, iremos implementar as estruturas de dados;** 
- **É necessário aprendermos sobre classes, porque as estruturas de dados são implementadas como classes;**
- **Exemplo de implementação:**

  ```javascript
  class Student {
      constructor(firstName, lastName){
          this.firstName = firstName;
          this.lastName = lastName;
      };
  };
  
  // - Método construtor: utilizado para criar novos objetos(novas instâncias, nesse exemplo, de aluno) e inicializá-los;
  // - Class: palavra-chave que cria uma "constante" (não poderemos redefiní-la);
  // - O nome dado a uma classe, deve se iniciar com letra maiúscula;
  ```
- **Instanciando a classe (utilizamos a palavra-chave `new`):**

  ```javascript
  class Student {
      constructor(firstName, lastName){
          this.firstName = firstName;
          this.lastName = lastName;
      };
  };
  
  let firstStudent = new Student("Colt", "Steele");
  let secondStudent = new Student("Blue", "Steele");
  ```
- **Outros métodos:**

  ```javascript
  class Student {
      constructor(firstName, lastName){
          this.firstName = firstName;
          this.lastName = lastName;
          this.absences = 0;
          this.scores = [];
      };
      
      // Métodos de instância - Fornecem funcionalidades que pertencem a uma única instância
      sayYourName(){
          return `My name is ${this.firstName} ${this.lastName}`;
      };
      
      numberOfAbsences() {
          this.absences += 1;
          
          if(this.absences > 20) {
              return `You failed the year due to absences`;
          }
          return `You have ${this.absences} absences`;
      };
      
      addScore(score) {
          this.scores.push(score);
          return this.scores;
      };
      
      calculateAverage() {
          let sum = this.scores.reduce(function(a, b){return a+b;});
      	return (sum / this.scores.length).toFixed(2);
      };
      
      // Métodos de classe (métodos estáticos) - Utilizamos a palavra-chave static
      static enrollStudents(...students){
          // talvez envie um e-mail aqui
      }
  }
  
  let firstStudent = new Student("Colt", "Steele");
  
  console.log(firstStudent.sayYourName()) // "Colt Steele"
  console.log(firstStudent.addScore(8)); // [ 8 ]
  console.log(firstStudent.addScore(4)); // [ 8, 4 ]
  console.log(firstStudent.calculateAverage()); // 6.00
  Student.enrollStudents([firstStudent])
  
  // Métodos estáticos são pertinentes às classes, mas não necessariamente as suas instâncias individuais
  ```
- **Palavra-chave `this`**

  - **Se refere ao objeto criado a partir daquela classe (a instância);**
