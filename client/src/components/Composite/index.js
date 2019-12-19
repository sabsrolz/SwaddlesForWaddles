// import React from "react";
// import "./style.css";

const Jimp = require("jimp");

// Initiate the images:
// TO DO - SET A MAX HEIGHT ON THE imgPenguin
let imgPenguin = "../public/assets/images/penguins/penguinTest1.jpg"; // background image examples should all be the same size
let sweaterRaw = "../public/assets/images/sweaters/redSweaterTest.png"; // png layer
// TO DO - THIS CAN BE MADE INTO AN API POST
let imgExported = "../exportedImages/swaddle.jpg"; //

// TO DO - MOVE THIS TO THE TEXT INPUT COMPONENT
let textData = {
  // we will save our sweaters to have minimal transparant pad pad
  text: "SOMETHING FUNNY", //the text to be rendered on the image - will be input
  maxWidth: 1004, // SET THIS AS penguin image width - 10px margin left - 10px margin right
  maxHeight: 100, // SET THIS AS penguin image width - 10px margin top - 10px margin bottom
  placementX: -150, // x axis
  placementY: 550 // y axis
};

// read template
Jimp.read(imgPenguin)

  //combine sweater into image
  .then(mashUp =>
    Jimp.read(sweaterRaw)
      .then(sweaterTemplate => {
        sweaterTemplate.opacity(1);
        // numbers in next line are the position x, y for the sweater overlaw
        return mashUp.composite(sweaterTemplate, 100, 400, [
          Jimp.BLEND_DESTINATION_OVER,
          0.2,
          0.2
        ]);
      })

      //load font
      .then(textTemplate =>
        Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(font => [
          // Jimp.loadFont("./public/assets/fonts/FlappyBirdy-60.fnt").then(font => [
          // We will need to convert a font we link into a .fnt and save it to the repo
          textTemplate,
          font
        ])
      )

      //  add text
      .then(data => {
        textTemplate = data[0];
        font = data[1];

        return textTemplate.print(
          font,
          textData.placementX,
          textData.placementY,
          {
            text: textData.text,
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
          },
          textData.maxWidth,
          textData.maxHeight
        );
      })

      //export image
      .then(textTemplate => textTemplate.quality(100).write(imgExported))

      //log exported filename
      .then(textTemplate => {
        console.log("exported file: " + imgExported);
      })

      //catch errors
      .catch(err => {
        console.error(err);
      })
  );

// // wrap above in this?
// function swaddlePenguin(props) {
//   return <div />;
// }

// export default swaddlePenguin;
