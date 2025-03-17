# Exercises for module 03 - Signals and change detection

## Exercise 1 - Component state using Signals

In this exercise, you will convert the component’s state management from traditional properties to Angular signals. You will practice working with signals for state management and see how they integrate into the component’s lifecycle.

### 1. Converting Boolean State to a Signal
- Open `src/app/app.component.ts`.
- Create a boolean signal called `isHighlighted`
  ```typescript
  import { signal } from '@angular/core';

  export class AppComponent {
    readonly isHighlighted = signal(false);

    toggleHighlight() {
      this.isHighlighted.update(value => !value);
    }
  }

### 2. Updating the template
  Update the `app.component.html` to work with the signal:

```html
<button (click)="toggleHighlight()" [class.highlight]="isHighlighted()">Toggle Highlight</button>
```

Now, in the same `AppComponent`, convert the `textColor` property to a signal:

```typescript
export class AppComponent {
  isHighlighted = signal(false);
  textColor = signal('black');

  toggleHighlight() {
    this.isHighlighted.update(value => !value);
  }

  changeColor() {
    this.textColor.update(color => color === 'black' ? 'blue' : 'black');
  }
}
```

Update the HTML to bind to the `textColor` signal:

```html
<p [style.color]="textColor()">This text will change color dynamically.</p>
<button (click)="changeColor()">Change Text Color</button>
```

You have successfully converted your component’s state to use Angular signals for both class binding and dynamic styling.



## Exercise 2 - Adding a Computed Signal in Modern Angular

In this exercise, you will extend the state management of the previous exercise by adding a computed signal. A computed signal will be used to derive new values based on other signals in the component.

### 1. Adding a Computed Signal
- Open `src/app/app.component.ts`.
- Add a new computed signal based on the `isHighlighted` and `textColor` signals:
  ```typescript
  import { signal, computed } from '@angular/core';

  export class AppComponent {
    isHighlighted = signal(false);
    textColor = signal('black');

    // Computed signal that generates a message based on the highlight and color states
    statusMessage = computed(() => {
      const highlightStatus = this.isHighlighted() ? 'Highlighted' : 'Not Highlighted';
      return `The button is ${highlightStatus} and the text color is ${this.textColor()}`;
    });

    toggleHighlight() {
      this.isHighlighted.update(value => !value);
    }

    changeColor() {
      this.textColor.update(color => color === 'black' ? 'blue' : 'black');
    }
  }
  ```

### 2. Displaying the Computed Signal in the Template
- Open `src/app/app.component.html`.
- Add a new paragraph to display the computed `statusMessage`:
  ```html
  <p>{{ statusMessage() }}</p>
  ```

### 3. Testing the Computed Signal
- Run the application and test the behavior. When you click the button to toggle the highlight or change the text color, the status message should update automatically.

### 4. Exercise Completed
- You have successfully added a computed signal to derive new values based on other signals in the component.



