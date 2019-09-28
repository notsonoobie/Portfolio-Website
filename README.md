# Portfolio-Website
Portfoilo Website Created with Pure &amp; Advanced HTML &amp; CSS, &amp; minimal use of JS.
***
## Project Status :

__`Work in Progress`__ :skull: 


[![Netlify Status](https://api.netlify.com/api/v1/badges/234671fd-9264-4251-9390-8c8b24f84f50/deploy-status)](https://app.netlify.com/sites/showcasingmyself/deploys)

## Environments Required :
* [Nodejs](https://nodejs.org/en/download/)
* [Npm](https://www.npmjs.com/package/download)
* [Git](https://git-scm.com/downloads)
## Check for proper Installation :

    $ node -v
    $ npm -v
    $ git --version
    
## Developer Dependencies :
* `node-sass` [:link:](https://www.npmjs.com/package/node-sass)
* `autoprefixer` [:link:](https://www.npmjs.com/package/autoprefixer)
* `concat` [:link:](https://www.npmjs.com/package/concat)
* `live-server` [:link:](https://www.npmjs.com/package/live-server)
* `npm-run-all` [:link:](https://www.npmjs.com/package/npm-run-all)
* `postcss-cli` [:link:](https://www.github.com/postcss/postcss-cli)


## SASS Compiler :
1. Scripts :
   * Compiled CSS :
   
         node-sass sass/main.scss css/style.comp.css 
   * Live SASS Compiler :
            
         node-sass sass/main.scss css/style.css -w
   * Live Server :
   
         live-server
   * Live SASS Compiler + Live Server (Parallel Flow) :
   
         npm-run-all --parallel devserver watch-sass
   * CSS File Concatenation (NOTE : Since, the font folder is located in different directory, we have to explicitly specify that directory in style.css [ ../assets/Fonts/ ] ):
          
         concat -o css/style.concat.css assets/Fonts/linea-open-source.css css/style.comp.css
   * CSS Prefixer for Browser Compatibility :
   
         postcss --use autoprefixer -b 'last 10 versions' css/style.concat.css -o css/style.prefix.css
   * Compress CSS Code :
   
         node-sass css/style.prefix.css css/style.css --output-style compressed
   * Build Mode (Compile SASS + Concat CSS Files + CSS Prefixer + Compress CSS) - Sequential Flow :
   
         npm-run-all compile-sass concat-css-files add-prefix-css compress-css

2. Install Clients :

        $ npm install

3. Run SASS Compiler :

       $ npm run compile-sass
4. Production Mode :

       $ npm run build-css
5. Development Mode :

       $ npm run develop-css
***
## *Project Description* :

This project was created for showcasing my portfolio. The website is powered by Prof. Jonas Schmedtmann (Github [@jonasschmedtmann](https://github.com/jonasschmedtmann)) &amp; theysaidso.com which provides `Free Quote` (10 Request Per Hour Limit rate) through API.
This project is fully packed with new/advanced CSS Tricks &amp; Syntax. SASS Preprocessor (7-1 Architecture) is used which will help to achieve Usability, Scalability, &amp; Maintainability.
The `main.scss` file will include all the `7 Directories Files` in order, which will be compiled to `style.css` inside `css` Directory using NPM SASS Compiler.

## Table of Contents :

1. Navigation - Navigation Button which remains at a fixed position on extreme right side of the page.
2. Header - Contains Header Elements & Contents
3. Main - Contains Main Elements &amp; Contents of the Webpage, includes :
     * About Section
     * Feature Section
     * Diversion Section
     * Quote Section (Getting Quote through AJAX Call)
     * Feedback Section
4. Footer - Contains Footer Elements, Copyrights Details, Webpage Details, &amp; Website Logo.
5. Responsive Design - The website if fully Responsive for Small Phones, Landscape Tablets, Portrait Tablets, Desktop &amp; Big Desktops.

## Features Left to be Implemented :

   * ~Multiple Device/Screen Support `Currently Designed only for Large Devices`~
   * ~Navigation Element~
   * Server Side Implementation to react with Front-end & Forms
   * SEO Optimization
   * Security Optimization
   
   ***
   
   ## *Contact Me*

:phone:   +91-89288-85199

:e-mail:  swastikmedical74@gmail.com

:octocat:  [notsonoobie](https://github.com/notsonoobie)

***

&copy; Rahul Gupta ([notsonoobie](https://github.com/notsonoobie)) -- Thank You! :nerd_face:
