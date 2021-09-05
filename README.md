
# Quiz on Coagulation in Water Treatment 
Welcome! [IHE Delft](http://un-ihe.org)
## Introduction
Globally, degradation of surface water quality due to the presence of physical, chemical and biological impurities is a major issue that makes surface water unsafe to drink. Therefore, treatment of surface water is essential to make it pathogen free, chemically safe, with no dirt solid matter and aesthetically acceptable. In this context, there is a strong need to understand the theoretical aspect of various treatment options, its design principle and operation. Among the various treatment steps, coagulation process is the first steps in the treatment where we add coagulant to agglomerate small particles to larger in order to allow them to settle in the next treatment steps. 

The overall aim of this project is to make quiz app which allows to assess the knowledge of students in the topic of coagulation. This project is the continuation of the first project, which focused on giving theoretical content about the topic. 

A live website can be found [here](https://dhakal79.github.io/Portfolio-project-MS2/).

![website preview](assets/images/screenshot.jpg)

## Table of Contents 

# Table of Contents
 [1. User Expereince (UX) design](#ux)
  - [User Goals:](#user-goals)
  - [User Expectations:](#user-expectations)
  -	[Colour scheme and font](#color-scheme)
  - [Site skeleton (wireframes)-3 pages](#wireframes)
    - [Home page](#home-page)
    - [Quiz page](#quiz-page)
    - [Feedback page](#feedback-page)

      
  [2. Features](#features)

  [3.Technologies used](#technologies-used)

  [4.Testing](#testing)

  [5.Bugs](#bugs)

  [6. Deployment](#deployment)

  [7. Acknowledgement](#acknowledgement)

  <a name="ux"></a>
# 1. User Expereince (UX) design
  [Go to the top](#table-of-contents)

  Due to COVID-19, the university is switcing all educatiuon systems online which includes teaching and student assessment as well. One of the challenges for lecturer is to assess and grade the knowledge of students online. This project is aimed to design the online quiz app which allows to assess the knowledge of students on the topic coagulation in drinking water treatment. 

  The following users types can be benifitted from the website:

* Professionals dealing with water supply engineering.
* Post graduate students in the field of water supply and environmental engineering. 
 
 

<a name="user-goals"></a>
## 1.1 User Goals
  [Go to the top](#table-of-contents)

The main goal of this project is to develop a quiz app that allows to assess the knowldge of students in the topic of coagulation in drinking water treatment process. This is of great useful for me to apply in my teaching to assess the understanding of my students.


<a name="user-expectations"></a>
## 1.2 User Expectations
  [Go to the top](#table-of-contents)

The quiz app provides 15 multiple choice questions that allows the users to understanding their knowledge on topic "coagulation in drinking water treatment process". Folloiwng user's expections are considered while designing the site:
* The quiz app is designed considering the expectation of users to be simple and easy to use.
* The user interface is easy to navigate (inlcude main navigation bar, and a link at front page that direct to quiz page in just one click).
* Quiz app that contains bank of questions with multiple choice options but users can only select one answer.
* Quiz app has timer that alerts users to finish the quiz on time.
* Quiz app has the function to show if the selected answer is correct or wrong and provide the score (correct and incorrect) at the bottom.
* Quiz app provides overall score with feedback message at the end of the quiz and has an option to try again the quiz.
* Responsive design for all screen/device sizes like mobile, tablet and desktop.
* Feedback page provided where users can provide their comments and suggestion for future improvement


<a name="color-scheme"></a>
## 1.3 Color Scheme
  [Go to the top](#table-of-contents)

The choice of website right foreground and background colour is essential that decides the site visitors wheather to emote the site or not. In this design we consider the accessibility guideline i.e, contrast between background and foreground colours. We make use of [WebAim](https://webaim.org/resources/contrastchecker/)  to select the background and foreground color. Here is an example how the choice of background and foreground is decided to the site.
![color contrast](assets/images/color-contrast.jpg)

<a name="wireframes"></a>
## 1.5 Site Skeleton
  [Go to the top](#table-of-contents)
 
[Balsamiq](https://balsamiq.com/) was used to create wireframes of the website. This was very useful as it gives the template of the UI. Wireframes were designed for web browser and a mobile browser format. The concept design (wireframes) of webpages (3 pages) of the app prepared is presented below.

<a name="home-page"></a>
### Home Page
![Desktop Version](/assets/images/home-desktop.png)
![Mobile Version](/assets/images/home-mobile.png)

	
<a name="quiz-page"></a>
### Quiz Page
  ![Desktop Version](/assets/images/quiz-desktop.png)

![Mobile Version](/assets/images/quiz-mobile.png)

<a name="feedback-page"></a>
### Feedback Page
![Desktop Version](/assets/images/feedback-desktop.png)

![Mobile Version](/assets/images/feedback-mobile.png)


  <a name="features"></a>
# 2. Features
  [Go to the top](#table-of-contents)
 ### All 3 pages:
- Navigation bar is placed at the top right corner of the page, and cosnidered a hover effect that changes the colour (with green box) when we want to click the page. The hover effect is placed to improve the user expereince. 
- Logo of IHE Delft is placed on the top left corner 
- Background color of menu bar and foreground color were chosen considering the contrast between background and foreground colours. We make use of [WebAim](https://webaim.org/resources/contrastchecker/) to select the background and foreground color.
- Social media links (for facebook, Linkden, Twitter and Youtube) are placed at the bottom of the each page in the footer. All the links will open in a new tab. 
- At the bottom of each it is written By Nirajan Dhakal, 2021 

### Home page:
- An image of water treatment plant with zoom animation is included with a focus to attract the attention of the user.
- A text box with letter "Quiz on coagulation in water treatment is provided. This has animation per character to atrract the attention of the user.
- Below the text, a button "go to quiz" is given to direct the user to the quiz page.

The screenshot of home page is below:

  Introduction page UI:
  ![home page preview](/assets/images/home-page-end-product.jpg)

### Quiz page:
- This page start with title "Quiz on coagulation in drinking water treatment" and a button 'Quiz rule". The screenshot is below:
![quiz page preview](/assets/images/quiz-page-first-page.jpg)

- On clicking button "Quiz rule" it provides instruction to the quiz and "start quiz" button. The screenshot is below:
![quiz page preview](/assets/images/quiz-page-instruction.jpg)

- page provides information in both text as well as graphs.
- This page also provides the Table of content that helps users what topics needs to be covered in this course

The screenshot of theory page is below:

 Theory page UI:
  ![theory page preview](./assets/images/theory-end-product.jpg)


### Feedback page:
- Include contact form that provides the user the ability to message site owner, provide feedback and suggestions. 
- Inlcude module evaluation forms where users can choose the options from (strongly agree, agree, neutral, disagree, strongly disagree) using radio-button option.
- Provide Submit and Reset buttons with hoever effect on it
- The form use the method="POST" action="https://formdump.codeinstitute.net/"
- I use the option of placeholder for full name and email address.

The screenshot of feedback page is below:

  Feedback page UI:
  ![feedback page preview](./assets/images/feedback-end-product.jpg)

The feedback form was correctly submitted  as  shown below.
![feedback page submission](./assets/images/form.jpg)
   <a name="technologies-used"></a>
# 3. Technologies Used
  [Go to the top](#table-of-contents)

* [HTML5](https://en.wikipedia.org/wiki/HTML5) (markup language) was used for structuring and presenting content of the website.
 
* [CSS3](https://en.wikipedia.org/wiki/CSS) (Cascading Style Sheets) was used to provide the style to the content written in a HTML.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) was used to make the developed quiz more interactive, add dynamic behavior and special effects.
* [Balsamiq](https://balsamiq.com/) was used to create wireframes of the website (desktop and mobile version).
* [Google Fonts](https://fonts.google.com/) was used to import font-family "Lato" and "Oswald" into style,css file and which was used throughout the pages of the website.
* [Font Awesome](https://fontawesome.com/) was used to improt icons to the sites.
* [Chrome](https://www.google.com/intl/en_uk/chrome/) was used to debug and test the source code using HTML5 as well as to test site responsiveness.
* [Github](https://github.com/) was used to create the repository and to store the cproject's code after pushed from Git.
* [Gitpod](https://www.gitpod.io/) was used as the Code Editor for the site

* [WebAim](https://webaim.org/resources/contrastchecker/) was used to select the background and font color in the website.
* [W3C Markup](https://validator.w3.org/) tool was used to validate the HTML code  used in the proejct.
* [Jigsaw validation](https://jigsaw.w3.org/) tool was used to validate CSS style used in the proejct.
* [Jshint validation](https://jshint.com/) was used to validate JavaScript code used in the proejct.
* [Ami](http://ami.responsivedesign.is/#) was used to develop a Mockup screenshot generator

  <a name="testing"></a>
# 4. Testing
  [Go to the top](#table-of-contents)
## 4.1 Testing using tools
### 4.1.1 Google Developer Tools
I make use of google developer tools (Chrome DevTools) as debugging tools. Using this tool i inspect for every elements that I added in HTML and CSS style. Once I was happy with, I copy the CSS style code from Chrome DevTools and paste in my CSS style sheet.

### 4.1.2 Responsive Tools

In order to make sure that design web pages are responsive to all device sizes, [Am I Responsive](http://ami.responsivedesign.is/) site was used to check it. 

### 4.1.3 W3C Validator Tools

[W3C Markup](https://validator.w3.org/#validate_by_input+with_options) was used to check for any errors within my HTML pages.

![W3C HTML Validation](./assets/images/W3Chtml.jpg)
The HTML checker notified me an error in my index.html page. it suggested that i should consider using h2-h6 elements to the section with id='animation" in the page. 

The identified error was corrected by switching section to div and no error was found as shown in picture below.
![W3C HTML error corrected](./assets/images/w3chtml-corrected.jpg)

[W3C CSS Validation](https://jigsaw.w3.org/css-validator/) was used to check for any error within my CSS stylesheet. No errors were found.

![W3C CSS Validation](/assets/images/css-validation.jpg)


## 4.2 Manual Testing

I have tested my site on multiple devices. These include:
  - Galaxy S5 (360 x 640)
  - iPhone 6/7/8 (375 x 667) 
  - iPhone 6/7/8 plus (414 x 736)
  - ipad (768 x 1024)
  - iPhone XS Max
  - iPad Pro (1024 x 1366)
  - Huawei P20 Pro

Please find below my testing process for all pages via mobile and web:
 ## All 3 pages:
 ### Navigation bars

TEST            | OUTCOME                          | PASS / FAIL  
--------------- | -------------------------------- | ---------------
Introduction page | on click to "introduction", the browser redirects me to the introduction page. The hoever effect (green rectangular box) appears when mouse is on "introduction".| PASS
Theory page | on click to drop down menu bar "coagulation", the browser redirects me to the theory page. The hoever effect (green rectangular box) appears when mouse is on "theory". | PASS
Feedback page| on click to "feedback page", the browser redirects me to the feedback page. The hoever effect (green rectangular box) appears when mouse is on "feedback page". | PASS
Responsive | All pages and elements were responsive (mobile and website) using differnt breakpoints.| PASS
Foreground & background  color| Checked foreground information is not distracted by backgrounds| PASS
Text|Checked if all fonts and colors used are consistent or not|PASS
Back to top|Checked if the page redirect to the top of the page when clicking the back to top on the bottom left corner of the page| PASS
|||

 ### Footer
TEST            | OUTCOME                          | PASS / FAIL  
--------------- | -------------------------------- | ---------------
Facebook | on clicking Facebook icon, a new tab opens and redirects to the Facebook website.| PASS
Linkedin| on clicking Linkedin icon, a new tab opens and redirects to the Linkdin website.  | PASS
Instagram| on clicking instagram icon, a new tab opens and redirects to the instagram website.  | PASS
Youtube| on clicking youtube icon, a new tab opens and redirects to the youtube we

### Introduction page
TEST            | OUTCOME                          | PASS / FAIL  
--------------- | -------------------------------- | ---------------
Media| All images and videos on the pages load and played. The video added was not auto play. All images were checked if it blurred in differnt screen sizes| PASS
Responsive | Responsive of the page in differnce screen sizes (mobile and website) using differnt breakpoints were checked.| PASS
External link | Checked if the external link "Apply here" redirect to the concern page and open in new tab.| PASS
Accessibility | Checked the accessibility of the page using lighthouse| PASS

![Index-html page accessibility](./assets/images/introduction.jpg)

### Theory page
TEST            | OUTCOME                          | PASS / FAIL  
--------------- | -------------------------------- | ---------------
Media| All images on the pages load. All images were checked if it blurred in differnt screen sizes| PASS
Responsive | Responsive of the page in differnce screen sizes (mobile and website) using differnt breakpoints were checked.| PASS
Accessibility | Checked the accessibility of the page using lighthouse| PASS

![Theory-html page accessibility](./assets/images/theory.jpg)

### Feedback page
TEST            | OUTCOME                          | PASS / FAIL  
--------------- | -------------------------------- | ---------------
Responsive | Responsive of the page in differnce screen sizes (mobile and website) using differnt breakpoints were checked.| PASS
Submit/Reset| Checked if submit and reset button works or not|PASS
Radio buttons| Checked if radio button works or not|PASS
Placeholder| Checked if placeholder on the full name and email addres works or not|PASS
Google map| Checked if google map when clicked on view larger map redirect to the google map page in new tab works ot not|PASS
Accessibility | Checked the accessibility of the page using lighthouse| PASS

![Feedback-html page accessibility](./assets/images/feedback.jpg)

  <a name="bugs"></a>
# 5. Bugs
  [Go to the top](#table-of-contents)

### Solved bugs
- When i checked the accessibility of feedback page i discovered i forget to add title to iframe (google map). I solved it by adding title "google map".
- I also discovered that Form elements do not have associated labels. I solved this by adding assoviated labels. 
- I saw a hyphens between social media icons. The problem with &lt;a &gt; tags. The problem was solved by writing in css style sheet that target &lt;a &gt; using text-decoration: none;

  <a name="deployment"></a>
# 6. Deployment
  [Go to the top](#table-of-contents)

The site was deployed to GitHub pages using the following steps:
- Sign up to GutHub
- Create a new repository on GitHub.
- Click on settings on the navigation bar under the repository title.
- Select pages on the left menu bar.
- Click on the master branch and save.
- This will now generate a link with your website live.
- The live link can be found here - (https://dhakal79.github.io/Portfolio-project-MS1/)

  <a name="acknowledgement"></a>
# 7. Acknowledgement
  [Go to the top](#table-of-contents)
### Code
* The footer code came from the Love Running projects
* The code for image animation on index.html page came from the Love Running projects
* Naviagtion drop down menu code came from a youtube video https://www.youtube.com/watch?v=wHFflWvii3M&t=508s
* Coding for feedback.html page was inspired from differnt tutorial from https://codeinstitute.net/ 
* The icons in the footer and contact page came from [Font Awesome](https://fontawesome.com/)
* For README.md file, reference of https://github.com/Chris-McGonigle/emmas-beauty-parlour and https://github.com/iKelvvv/MS1 was considered. 
* Thanks to my mentor Marcel Mulders for his constructive feedback.

### Content 
 * All the contents for index.html page age came from https://www.un-ihe.org/unit-operations-water-treatment-coagulation-sedimentation-flotation-and-filtration
 * All the content for theory.html came from lecture note IHE Delft.
 * The front page water image in index.html came from [Google Images](https://www.google.com/imghp?hl=en)
  