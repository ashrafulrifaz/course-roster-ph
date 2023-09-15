### **Question 1:** Add at least 3 Project features

**Answer:** Here are 3 features of this project...

   * Use of react to build the website

   * Use of fake json data for website content

   * A card to calculate the price and time.

### **Question 2:** Discuss how you managed the state in your assignment project.

**Answer:** We usually use state to store data. As state we use a hook named useState. If we want to import data from a json file and store it somewhere, then we declare it as an empty array inside useState hook. In this assignment project first i took an empty array inside an useState hook and dectructured it with two parameters and then set the fake json data in the second parameter using useEffect. Then, as before, I destructured another useState hook and used it to show the course names in the credit cart. Here in if condition, I declared a new variable and make a new array with first parameter named datas and parameter of handleDatas function and then set the new array to second parameter named setDatas. Then I used 3 useState hook with number to calculate the remaining time, total credit time and to calculate the total price of the course. I calculated the time and price directly inside set... parameter.