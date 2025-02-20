function createSnowflakes() {
    const snowContainer = document.querySelector('.snow-container');

    for (let i = 0; i < 50; i++) { 
        let snow = document.createElement('div');
        snow.classList.add('snow');
        snow.style.left = Math.random() * 100 + "vw";
        snow.style.animationDuration = (Math.random() * 3 + 2) + "s"; 
        snow.style.animationDelay = Math.random() * 2 + "s"; 
        snowContainer.appendChild(snow);
    }
}

createSnowflakes();

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");
    const penguinsContainer = document.querySelector(".penguins-container");
    const snowContainer = document.querySelector(".snow-container");

    button.addEventListener("click", function () {
        penguinsContainer.style.gap = "0"; 

        // Add transition effect for smooth movement
        const penguins = document.querySelectorAll(".penguin");
        penguins.forEach(penguin => {
            penguin.style.transition = "transform 1s ease-in-out, margin 0.5s ease-in-out"; 
            penguin.style.transform = "translateX(10px)"; 
            penguin.style.marginLeft = "0";
            penguin.style.marginRight = "0";
        });

        // Add a big heart in the middle if it doesn't exist
        if (!document.querySelector(".middle-heart")) {
            const middleHeart = document.createElement("div");
            middleHeart.classList.add("middle-heart");
            middleHeart.innerHTML = "❤️"; 
            middleHeart.style.position = "absolute";
            middleHeart.style.fontSize = "100px";  
            middleHeart.style.left = "50%"; 
            middleHeart.style.top = "20%"; 
            middleHeart.style.transform = "translate(-50%, -50%) scale(0)"; 
            middleHeart.style.animation = "pop 0.5s ease-in-out forwards"; 
            penguinsContainer.appendChild(middleHeart);
        }

        // Change Snowflakes to Hearts
        snowContainer.innerHTML = ""; 

        for (let i = 0; i < 20; i++) {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️"; 
            heart.style.position = "absolute";
            heart.style.fontSize = Math.random() * 15 + 10 + "px"; 
            heart.style.left = Math.random() * 100 + "vw"; 
            heart.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
            heart.style.top = "-10px";
            snowContainer.appendChild(heart);
        }
    });
});

