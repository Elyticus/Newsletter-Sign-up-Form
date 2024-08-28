const emailInput = document.getElementById("emailInput");
const subscribeBtn = document.getElementById("btn");
const errorEmail = document.getElementById("errorEmail");
const mainForm = document.getElementById("mainForm");

emailInput.value = "";

const regexEmailAddress = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

const initialFormHTML = mainForm.innerHTML;
const initialFormClass = mainForm.className;
const initialFormStyle = mainForm.style.cssText;

subscribeBtn.addEventListener("click", () => {
  if (!regexEmailAddress.test(emailInput.value)) {
    emailInput.classList.add("error_message");
    errorEmail.style.display = "block";
  } else {
    mainForm.style.minWidth = "250px";
    mainForm.classList.add("thank_style");
    emailInput.classList.remove("error_message");
    errorEmail.style.display = "none";
    mainForm.innerHTML = `
    <div id="success" class="thankYouMessage">
        <div class="success_message">
            <img class="success_image" src="./assets/images/icon-success.svg" />
            <h1 class="main_thank_message">Thanks for subscribing!</h1>
        </div>

        <p class="dismiss_text">
          A confirmation email has been sent to 
          <span class="email_value">${emailInput.value}</span>. 
          Please open it and click the button inside to confirm your subscription.
        </p>

        <button id="dismissBtn" class="dismiss_btn">Dismiss message</button>
    </div>
    `;

    const dismissBtn = document.getElementById("dismissBtn");
    const successMessage = document.getElementById("success");

    dismissBtn.addEventListener("click", () => {
      mainForm.innerHTML = initialFormHTML;
      mainForm.className = initialFormClass;
      mainForm.style.cssText = initialFormStyle;
      successMessage.style.display = "none";
    });
  }
});
