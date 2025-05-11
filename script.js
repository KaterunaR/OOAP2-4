// Розробити програму, яка містить чотири компоненти UI для
// введення і відображення тексту. Необхідно текст введений в одному з
// компонентів синхронізувати з текстом в інших компонентах. Використати
// патерн Mediator.



class Component {
    constructor(element, mediator) {
      this.element = element;
      this.mediator = mediator;

      this.element.addEventListener('input', () => {
        this.mediator.notify(this, this.element.value);
      });
    }

    setValue(value) {
      this.element.value = value;
    }
}


class Mediator {
    constructor() {
      this.components = [];
    }

    register(component) {
      this.components.push(component);
    }

    notify(sender, newValue) {
      this.components.forEach(comp => {
        if (comp !== sender) {
          comp.setValue(newValue);
        }
      });
    }
}

    
const mediator = new Mediator();

const comp1 = new Component(document.getElementById('component1'), mediator);
const comp2 = new Component(document.getElementById('component2'), mediator);
const comp3 = new Component(document.getElementById('component3'), mediator);
const comp4 = new Component(document.getElementById('component4'), mediator);

mediator.register(comp1);
mediator.register(comp2);
mediator.register(comp3);
mediator.register(comp4);