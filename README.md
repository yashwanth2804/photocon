# Photocon / An Instagram clone app

This image sharing app lets you to share images , it has functionality as follows
* Post a image with basic info content
* like and comment
* delete post
* Theater view for viewing photo 
* Mobile first design

## Screenshots
### Mobile
![](https://cdn.steemitimages.com/DQmcMgRwavLgNWNHiuKd4Ys6U5X6h45Y1ydfkJCTBpCQyWR/mobile.png)
### Web
![](https://cdn.steemitimages.com/DQmQkjeFEgpvHFoTsSqeGmHoSRBZAKB42wrXo4eU2ZtcS58/Photocon-web.png)

## Stack 
This app was built using `React-Redux` and UI development framework was `Semantic ui`.

### Project explanation 

The Project was built using React-Redux architecture, in case of storing the `likes` for the images was done using redux store, single state manager. Semantic Ui used for this responsive web app that fit for mobile view. Taken care of mobile first design.
Used axios to load the insta.json file to the app. At first I tired directly with the provided  api but i faced CROS related issues.

Implemented the inplace Edit/update info functionality for user experience.
Taken care of basic validation like if post has no comments then disabled `show comments` button will be shown.

The given data was blended to fit the app's functionality.
The `like button` has implantation like medium's clap button functionality unlike Instagram like.




## Available Scripts

In the project directory, you can run:
### `npm install`
 Please run this command before starting the project to download dependecies
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

 