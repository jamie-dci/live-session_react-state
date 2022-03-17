# React Events - Light Switch Part 1

1. Create one new component in this project called `LightSwitch`. The component should render a button. The text of the button should be passed down from `App.js` as a string, via a **prop** called `text`.

2. Now create your `App` functional component in `App.js` and make it a default export. Your `App` component should return an instance of the `LightSwitch` component (i.e. `<LightSwitch />`). This should have the text "Turn light on".

**Remember:** The text of the button should be passed down via the `<LightSwitch />`'s `text` prop!

3. Now go to `LightSwitch.js` and create a function inside your `LightSwitch` component. The function should be called `switchLightOn`. When called, it displays an alert popup box with the text "You turned the light on!"

4. Using your function, make it so that when you click the button, you get the alert.

5. Complete `index.js` so your `<App />` component is rendered in the HTML DOM. Test your app to make sure it is working as expected.

---

### Bonus - Only try to complete this if you finish early!

6. Next, create an array variable inside your `App` component called `buttonNames`. This array should contain **five** strings:

- "Button 1"
- "Button 2"
- "Button 3"
- "Button 4"
- "Button 5"

Now try to use the `.map()` array method on your array to create **five** `<LightSwitch />` components inside `App.js`. Each component should contain one of the strings inside the array (e.g. Button 1).

7. Try to make it so that when you click one of the buttons, you get a second `alert`. This should say "You clicked..." and then the text content of the **specific** button you clicked, e.g. "Button 4".

**Remember:** There is a kind of object which can help you with this!

8. Add some CSS styling to make your app look nicer using `App.css`. Don't forget to import it into `App.js`!

9. If you finish everything else, you could try to restructure your app to use some of the things we learned today, e.g.:

- Props
- Child components
- Events

Let me know if there is anything you get stuck on!