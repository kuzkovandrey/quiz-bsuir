import { Quesction } from './models/question.model';

export const QUIZ_DATA: Quesction[] = [
  {
    question: 'Which of the following does TypeScript use to specify types?',
    options: [
      { text: ':', correct: true },
      { text: ';' },
      { text: '!' },
      { text: '&' },
    ],
    explanation:
      'TS uses a colon (:) to separate the property name from the property type',
  },
  {
    question: 'Which of the following is NOT a type used in TypeScript?',
    options: [
      { text: 'number' },
      { text: 'string' },
      { text: 'boolean' },
      { text: 'enum', correct: true },
    ],
    explanation: 'enum is not used as a type in TypeScript',
  },
  {
    question:
      'How can we specify properties and methods for an object in TypeScript?',
    options: [
      { text: 'Use classes.' },
      { text: 'Use interfaces.', correct: true },
      { text: 'Use enums.' },
      { text: 'Use async/await.' },
    ],
    explanation:
      'interfaces are typically used to list the properties and methods for an object',
  },
  {
    question: 'How else can Array<number> be written in TypeScript?',
    options: [
      { text: '@number' },
      { text: 'number[]', correct: true },
      { text: 'number!' },
      { text: 'number?' },
    ],
    explanation:
      'number[] is another way of writing Array<number> in TypeScript',
  },
  {
    question: 'In which of these does a class take parameters?',
    options: [
      { text: 'constructor', correct: true },
      { text: 'destructor' },
      { text: 'import' },
      { text: 'subscribe' },
    ],
    explanation: 'a constructor is used by a class to take in parameters',
  },
  {
    question: 'Which is NOT an access modifier?',
    options: [
      { text: 'private' },
      { text: 'protected' },
      { text: 'public' },
      { text: 'async', correct: true },
    ],
    explanation: 'async is not used as an access modifier type in TypeScript',
  },
  {
    question:
      'Which keyword allows us to share information between files in TypeScript?',
    options: [
      { text: 'import' },
      { text: 'export', correct: true },
      { text: 'async' },
      { text: 'constructor' },
    ],
    explanation:
      'the export keyword allows for the information to be transmitted between files',
  },
  {
    question:
      'Which is an array method to generate a new array based on a condition?',
    options: [
      { text: 'filter', correct: true },
      { text: 'map' },
      { text: 'async' },
      { text: 'enum' },
    ],
    explanation: 'filter is a method used to conditionally create a new array',
  },
  {
    question: 'How is a property accessible within a class?',
    options: [
      { text: 'Using this.propertyName', correct: true },
      { text: 'Accessors' },
      { text: 'Destructuring' },
      { text: 'Arrow function' },
    ],
    explanation:
      'this.propertyName is the way to access a specific property within a class',
  },
  {
    question: 'Which of the following can be added to an Angular class?',
    options: [
      { text: 'Properties and methods', correct: true },
      { text: 'Imports and exports' },
      { text: 'Template variables' },
      { text: 'Styles' },
    ],
    explanation: 'properties and methods can be added to a class in Angular',
  },
  {
    question: 'How is a class adorned in Angular?',
    options: [
      { text: '@Component decorator.', correct: true },
      { text: '@Injectable decorator.' },
      { text: '@Input decorator.' },
      { text: '@Output decorator.' },
    ],
    explanation: 'a class is adorned with the @Component decorator in Angular',
  },
  {
    question: 'Which defines the location of a component?',
    options: [
      { text: 'decorator' },
      { text: 'selector', correct: true },
      { text: 'template' },
      { text: 'templateUrl' },
    ],
    explanation: 'a selector defines the location of a component in Angular',
  },
  {
    question: 'Which defines the HTML code that the component generates?',
    options: [
      { text: 'decorator' },
      { text: 'selector' },
      { text: 'template', correct: true },
      { text: 'templateUrl' },
    ],
    explanation: 'a template contains the HTML code that a component generates',
  },
  {
    question: 'Which is used for grouping Angular building blocks together?',
    options: [
      { text: 'NgModule', correct: true },
      { text: 'template' },
      { text: 'selector' },
      { text: 'decorator' },
    ],
    explanation:
      'the NgModule is used to group Angular components and modules together',
  },
  {
    question: 'How is an Angular module adorned?',
    options: [
      { text: '@NgModule', correct: true },
      { text: '@Component' },
      { text: '@Injectable' },
      { text: '@Output' },
    ],
    explanation: '@NgModule is used to decorate an Angular module',
  },
  {
    question: 'Which array specifies components belonging to AppModule?',
    options: [
      { text: 'imports' },
      { text: 'declarations', correct: true },
      { text: 'bootstrap' },
      { text: 'providers' },
    ],
    explanation:
      'the declarations array contains all the components that belong to AppModule',
  },
  {
    question: 'What characters are used for text interpolation?',
    options: [
      { text: 'backticks: ``', correct: true },
      { text: 'double curlies {{ }}' },
      { text: 'double ampersand &&' },
      { text: 'double pipes ||' },
    ],
    explanation: 'backticks are used in Angular for insertion of text',
  },
  {
    question: 'Which characters are used to include a property value?',
    options: [
      { text: 'backticks: ``' },
      { text: 'double curlies: {{ }}', correct: true },
      { text: 'double ampersand: &&' },
      { text: 'double pipes: ||' },
    ],
    explanation:
      'double curlies are used to insert a property value inside a template',
  },
  {
    question:
      'Which is a shortcut for applying a class name based on value of property?',
    options: [
      { text: '{{ property }}' },
      { text: '``property``' },
      { text: '[class.property]="isProperty"', correct: true },
      { text: 'property$' },
    ],
    explanation:
      'we use the [class.property] syntax to assign a class name based on a value of property.',
  },
  {
    question:
      'Which of the following are examples of event bindings in Angular?',
    options: [
      { text: '[click]' },
      { text: '@click' },
      { text: '(click)', correct: true },
      { text: 'on-click', correct: true },
    ],
    explanation:
      "(click) and its HTML equivalent 'on-click' are examples of event bindings",
  },
  {
    question:
      'What mechanism does Angular provide for handling keyboard shortcuts?',
    options: [
      { text: 'event binding' },
      { text: 'data binding' },
      { text: 'text interpolation' },
      { text: '(keydown.control.enter)', correct: true },
    ],
    explanation:
      "(keydown.control.enter) is Angular's syntax for handling keyboard shortcuts",
  },
  {
    question: 'Which directive adds or removes an element from the DOM?',
    options: [
      { text: '*ngFor' },
      { text: '*ngIf', correct: true },
      { text: '*ngSwitch' },
      { text: '[ngStyle]' },
    ],
    explanation:
      'ngIf is used to conditionally add or remove an element from the DOM',
  },
  {
    question: 'Which directive can be used to display an array of cat images?',
    options: [
      { text: '*ngFor', correct: true },
      { text: '*ngIf' },
      { text: '*ngSwitch' },
      { text: '[ngStyle]' },
    ],
    explanation:
      'the ngFor directive is used to display entire arrays or objects',
  },
];
