const expertBtn = document.querySelector(".buttonExp");
const popUpWindow = document.querySelector(".popUpWindow");
const cross = document.querySelector(".union");

expertBtn.addEventListener("click", function() {
	popUpWindow.classList.toggle('hidden');
})

cross.addEventListener("click", function() {
	popUpWindow.classList.add('hidden');
})

document.addEventListener("click", (e) => {
	const clickBtn = e.composedPath().includes(expertBtn);
	const clickWindow = e.composedPath().includes(popUpWindow);
	if ( !(clickBtn || clickWindow)) {
		popUpWindow.classList.add('hidden');
	}	
})

// нажатие на кнопку Получить материал
const downloadBtn = document.querySelector(".downloadButton");
const formWindow = document.querySelector(".GetMaterial");

downloadBtn.addEventListener("click", function() {
	formWindow.classList.toggle('hidden');
})

document.addEventListener("click", (e) => {
	const clickFormWindow = e.composedPath().includes(formWindow);
	const clickDownBtn = e.composedPath().includes(downloadBtn);
	if ( !(clickFormWindow || clickDownBtn)) {
		formWindow.classList.add('hidden');
	}	
})

//Отправка формы
const form = document.getElementById('form');

//form.addEventListener('submit', sendMessage);

let selector = document.querySelector("#tel");
let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

let validation = new JustValidate("form");

validation.addField("#name", [
  {
    rule: "required"
    // errorMessage: "Введите имя!"
  },
  {
    rule: "minLength",
    value: 2
    // errorMessage: "Минимум 2 символа!"
  }
]).addField("#tel", [
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length > 0)
    }
    // errorMessage: 'Введите телефон'
  },
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length === 10)
    }
    // errorMessage: 'Введите телефон полностью'
  }
  ]).onSuccess(async function () {
  let data = {
    name: document.getElementById("name").value,
    tel: document.getElementById("tel").value,
  }
  //alert('Send mesage');
  let response = await fetch("mail.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
  form.reset();
  let result = await response.text()

  //alert(result)
})